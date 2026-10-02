import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Clock3,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

import institutionData from "../data/institutionData";
import programmeData from "../data/programmeData";
import universityProgrammes from "../data/universityProgrammes";

const FALLBACK_IMAGES = {
  business:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85",
  technology:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
  default:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=85",
};

const getLevel = (title = "") => {
  const value = title.toLowerCase();

  if (
    value.includes("ph.d") ||
    value.includes("phd") ||
    value.includes("doctor of") ||
    value.includes("doctoral")
  ) {
    return "Doctoral";
  }

  if (
    value.includes("master") ||
    value.includes("m.a") ||
    value.includes("m.a.") ||
    value.includes("m.b.a") ||
    value.includes("mba") ||
    value.includes("mca") ||
    value.includes("m.com") ||
    value.includes("m.sc") ||
    value.includes("m.sc.") ||
    value.includes("m.s.w") ||
    value.includes("post graduate") ||
    value.includes("postgraduate") ||
    value.includes("pg diploma") ||
    value.includes("post graduation")
  ) {
    return "Postgraduate";
  }

  if (
    value.includes("diploma") ||
    value.includes("certificate") ||
    value.includes("vocational")
  ) {
    return "Diploma / Certificate";
  }

  if (
    value.includes("bachelor") ||
    value.includes("b.com") ||
    value.includes("bba") ||
    value.includes("bca") ||
    value.includes("b.sc") ||
    value.includes("b.sc.") ||
    value.includes("b.a") ||
    value.includes("b.a.") ||
    value.includes("bsw") ||
    value.includes("b.s.w") ||
    value.includes("b.tech") ||
    value.includes("b.e.") ||
    value.includes("d2d")
  ) {
    return "Undergraduate";
  }

  return "Other";
};

const getInstitutionImage = (slug) => {
  const institution = institutionData.find((item) => item.slug === slug);
  return institution?.image || null;
};

const normalizeUniversityProgramme = (item) => {
  const title = item.programme || "Programme";
  const institutionSlug = item.institutionSlug || "";

  return {
    id: `university-${institutionSlug}-${item.id}`,
    slug: `${institutionSlug}-${String(item.id).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    title,
    faculty: item.faculty || "Other",
    institution: item.institutionName || "Partner Institution",
    institutionSlug,
    level: getLevel(title),
    duration: item.duration
      ? /^\d+$/.test(String(item.duration))
        ? `${item.duration} Year${String(item.duration) === "1" ? "" : "s"}`
        : String(item.duration)
      : "Duration available on enquiry",
    mode: item.studyPattern || "Programme dependent",
    image:
      getInstitutionImage(institutionSlug) ||
      (String(item.faculty || "").toLowerCase().includes("technology")
        ? FALLBACK_IMAGES.technology
        : FALLBACK_IMAGES.default),
    description:
      item.specialisation ||
      `Explore this ${item.faculty || "academic"} programme at ${item.institutionName || "the partner institution"}.`,
    specialisation: item.specialisation || "",
    eligibility: item.eligibility || "",
    tuitionFeeYearly: item.tuitionFeeYearly ?? item.generalFee ?? null,
    totalStudentFee: item.totalStudentFee ?? null,
    source: item.source || "",
    sourceType: "university",
  };
};

const normalizeProgrammeData = (item) => ({
  ...item,
  institutionSlug: item.institutionSlug || "union-college",
  level: item.level || getLevel(item.title),
  specialisation: item.specialisation || "",
  sourceType: "catalog",
});

const buildProgrammeDirectory = () => {
  const detailedProgrammes = Object.values(universityProgrammes)
    .flat()
    .filter(Boolean)
    .map(normalizeUniversityProgramme);

  const seen = new Set();
  const combined = [...programmeData.map(normalizeProgrammeData), ...detailedProgrammes];

  return combined.filter((item) => {
    const key = item.id || `${item.institutionSlug}-${item.title}`;

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
};

const programmes = buildProgrammeDirectory();

const Programmes = () => {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All Levels");
  const [faculty, setFaculty] = useState("All Faculties");
  const [institution, setInstitution] = useState("All Institutions");
  const [showFilters, setShowFilters] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);
  const PAGE_SIZE = 12;

  const levels = useMemo(
    () => [
      "All Levels",
      ...Array.from(new Set(programmes.map((item) => item.level).filter(Boolean))).sort(),
    ],
    []
  );

  const faculties = useMemo(
    () => [
      "All Faculties",
      ...Array.from(
        new Set(programmes.map((item) => item.faculty).filter(Boolean))
      ).sort(),
    ],
    []
  );

  const institutions = useMemo(
    () => [
      "All Institutions",
      ...Array.from(
        new Set(programmes.map((item) => item.institution).filter(Boolean))
      ).sort(),
    ],
    []
  );

  const filteredProgrammes = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return programmes.filter((programme) => {
      const searchableText = [
        programme.title,
        programme.specialisation,
        programme.faculty,
        programme.institution,
        programme.level,
        programme.description,
        programme.eligibility,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !searchValue || searchableText.includes(searchValue);

      const matchesLevel =
        level === "All Levels" || programme.level === level;

      const matchesFaculty =
        faculty === "All Faculties" || programme.faculty === faculty;

      const matchesInstitution =
        institution === "All Institutions" ||
        programme.institution === institution;

      return (
        matchesSearch &&
        matchesLevel &&
        matchesFaculty &&
        matchesInstitution
      );
    });
  }, [search, level, faculty, institution]);

  const clearFilters = () => {
    setSearch("");
    setLevel("All Levels");
    setFaculty("All Faculties");
    setInstitution("All Institutions");
    setSearchParams({});
  };

  const totalPages = Math.max(1, Math.ceil(filteredProgrammes.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedProgrammes = filteredProgrammes.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  const goToPage = (page) => {
    const nextPage = Math.max(1, Math.min(page, totalPages));
    const next = new URLSearchParams(searchParams);
    if (nextPage === 1) next.delete("page");
    else next.set("page", String(nextPage));
    setSearchParams(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#F8F6F1] text-[#082744]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute right-[-150px] top-20 h-[450px] w-[450px] rounded-full bg-[#B68A3A]/10 blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-150px] h-[400px] w-[400px] rounded-full bg-[#082744]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#B68A3A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B68A3A]">
                Programme Directory
              </span>
            </div>

            <h1 className="mb-8 font-serif text-5xl leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Explore
              <br />
              <span className="text-[#B68A3A]">Programmes</span>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-[#082744]/65 md:text-xl">
              Browse courses across Union College and its partner institutions.
              Search by course name, specialisation, university, faculty or
              academic level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SEARCH + FILTERS
      ========================================================= */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-[#082744]/5 bg-white p-5 shadow-[0_15px_50px_rgba(8,39,68,0.06)] md:p-6">
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="relative flex-1">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#082744]/35"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search courses, specialisations, universities..."
                  className="h-14 w-full rounded-2xl border border-[#082744]/10 bg-[#F8F6F1] pl-12 pr-5 outline-none transition focus:border-[#B68A3A] focus:ring-4 focus:ring-[#B68A3A]/10"
                />
              </div>

              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-[#082744]/10 px-5 font-semibold lg:hidden"
              >
                <SlidersHorizontal size={18} />
                Filters
              </button>
            </div>

            <div
              className={`${showFilters ? "grid" : "hidden"} mt-4 grid-cols-1 gap-4 md:grid-cols-3 lg:grid`}
            >
              <FilterSelect
                value={level}
                onChange={setLevel}
                options={levels}
              />

              <FilterSelect
                value={faculty}
                onChange={setFaculty}
                options={faculties}
              />

              <FilterSelect
                value={institution}
                onChange={setInstitution}
                options={institutions}
              />
            </div>

            <div className="mt-5 flex flex-col gap-4 border-t border-[#082744]/8 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[#082744]/55">
                <span className="font-semibold text-[#082744]">
                  {filteredProgrammes.length}
                </span>{" "}
                programmes available
              </p>

              {(search ||
                level !== "All Levels" ||
                faculty !== "All Faculties" ||
                institution !== "All Institutions") && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-left text-sm font-semibold text-[#B68A3A] transition hover:text-[#9F752E]"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRAMME RESULTS
      ========================================================= */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filteredProgrammes.length > 0 ? (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {filteredProgrammes.map((programme, index) => (
                <motion.article
                  key={programme.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(index, 8) * 0.04,
                  }}
                  className="group overflow-hidden rounded-[1.5rem] border border-[#082744]/5 bg-white shadow-[0_10px_40px_rgba(8,39,68,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(8,39,68,0.10)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={
                        programme.image ||
                        ((programme.faculty || "")
                          .toLowerCase()
                          .includes("technology")
                          ? FALLBACK_IMAGES.technology
                          : FALLBACK_IMAGES.default)
                      }
                      alt={programme.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#082744]/60 via-transparent to-transparent" />

                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#082744] backdrop-blur-sm">
                      {programme.level}
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#B68A3A]">
                      {programme.faculty}
                    </p>

                    <h2 className="mb-3 line-clamp-2 font-serif text-2xl leading-tight">
                      {programme.title}
                    </h2>

                    {programme.specialisation && (
                      <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-[#082744]/55">
                        {programme.specialisation}
                      </p>
                    )}

                    <div className="mb-4 flex items-start gap-2 text-sm text-[#082744]/65">
                      <BookOpen
                        size={16}
                        className="mt-0.5 shrink-0 text-[#B68A3A]"
                      />
                      <span>{programme.institution}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 border-y border-[#082744]/8 py-4">
                      <div className="flex items-center gap-2">
                        <Clock3 size={15} className="shrink-0 text-[#B68A3A]" />
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#082744]/35">
                            Duration
                          </p>
                          <p className="mt-1 text-xs font-medium text-[#082744]/70">
                            {programme.duration}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#082744]/35">
                          Tuition / Year
                        </p>
                        <p className="mt-1 text-sm font-semibold text-[#082744]">
                          {programme.tuitionFeeYearly
                            ? `₹${Number(programme.tuitionFeeYearly).toLocaleString("en-IN")}`
                            : "On enquiry"}
                        </p>
                      </div>
                    </div>

                    {programme.totalStudentFee && (
                      <div className="mt-3 flex items-center justify-between rounded-xl bg-[#F8F6F1] px-4 py-3">
                        <span className="text-xs font-medium text-[#082744]/50">
                          Total Student Fee
                        </span>
                        <span className="text-sm font-semibold text-[#082744]">
                          ₹{Number(programme.totalStudentFee).toLocaleString("en-IN")}
                        </span>
                      </div>
                    )}

                    <Link
                      to={
                        programme.slug
                          ? `/programmes/${programme.slug}`
                          : "/contact"
                      }
                      className="group/button mt-5 flex w-full items-center justify-between font-semibold text-[#082744]"
                    >
                      <span>View Programme</span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#082744] text-white transition group-hover/button:bg-[#B68A3A]">
                        <ArrowRight size={17} />
                      </span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {totalPages > 1 && (
              <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Programme pagination">
                <button
                  type="button"
                  onClick={() => goToPage(safePage - 1)}
                  disabled={safePage === 1}
                  className="rounded-full border border-[#082744]/10 px-4 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-35"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={`h-9 min-w-9 rounded-full px-3 text-sm font-semibold ${page === safePage ? "bg-[#082744] text-white" : "border border-[#082744]/10 text-[#082744]"}`}
                    aria-current={page === safePage ? "page" : undefined}
                  >
                    {page}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => goToPage(safePage + 1)}
                  disabled={safePage === totalPages}
                  className="rounded-full border border-[#082744]/10 px-4 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-35"
                >
                  Next
                </button>
              </nav>
            )}
          ) : (
            <div className="rounded-[2rem] border border-[#082744]/5 bg-white p-16 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#B68A3A]/10 text-[#B68A3A]">
                <Search size={25} />
              </div>

              <h2 className="mb-3 font-serif text-3xl">No programmes found</h2>

              <p className="mx-auto mb-7 max-w-md text-[#082744]/55">
                Try changing your search or filters to explore other programme
                options.
              </p>

              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 rounded-full bg-[#082744] px-6 py-3 font-semibold text-white"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          ADVISOR CTA
      ========================================================= */}
      <section className="bg-[#082744] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B68A3A]">
            Need Guidance?
          </span>

          <h2 className="mt-5 mb-6 font-serif text-4xl md:text-5xl">
            Not sure which programme
            <br />
            is right for you?
          </h2>

          <p className="mx-auto mb-9 max-w-xl text-lg text-white/60">
            Talk to an advisor about your academic interests and explore
            relevant options.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#B68A3A] px-8 py-4 font-semibold text-white transition hover:bg-[#9F752E]"
          >
            Talk to an Advisor
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

const FilterSelect = ({ value, onChange, options }) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-13 w-full cursor-pointer appearance-none rounded-2xl border border-[#082744]/10 bg-[#F8F6F1] px-4 pr-11 text-sm text-[#082744] outline-none transition focus:border-[#B68A3A] focus:ring-4 focus:ring-[#B68A3A]/10"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        size={17}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#082744]/45"
      />
    </div>
  );
};

export default Programmes;
