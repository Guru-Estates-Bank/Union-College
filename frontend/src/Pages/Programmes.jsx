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
import { Link } from "react-router-dom";
import programmes from "../data/programmeData";

const Programmes = () => {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All Levels");
  const [faculty, setFaculty] = useState("All Faculties");
  const [institution, setInstitution] = useState("All Institutions");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProgrammes = useMemo(() => {
    return programmes.filter((programme) => {
      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        !searchValue ||
        programme.title.toLowerCase().includes(searchValue) ||
        programme.faculty.toLowerCase().includes(searchValue) ||
        programme.institution.toLowerCase().includes(searchValue);

      const matchesLevel = level === "All Levels" || programme.level === level;

      const matchesFaculty =
        faculty === "All Faculties" || programme.faculty === faculty;

      const matchesInstitution =
        institution === "All Institutions" ||
        programme.institution === institution;

      return (
        matchesSearch && matchesLevel && matchesFaculty && matchesInstitution
      );
    });
  }, [search, level, faculty, institution]);

  const clearFilters = () => {
    setSearch("");
    setLevel("All Levels");
    setFaculty("All Faculties");
    setInstitution("All Institutions");
  };

  return (
    <main className="bg-[#F8F6F1] text-[#082744] min-h-screen">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-[-150px] w-[450px] h-[450px] rounded-full bg-[#B68A3A]/10 blur-3xl" />

        <div className="absolute bottom-[-100px] left-[-150px] w-[400px] h-[400px] rounded-full bg-[#082744]/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-7">
              <span className="w-10 h-[1px] bg-[#B68A3A]" />

              <span className="text-xs tracking-[0.25em] uppercase font-semibold text-[#B68A3A]">
                Programme Directory
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] mb-8">
              Explore
              <br />
              <span className="text-[#B68A3A]">Programmes</span>
            </h1>

            {/* Intro */}
            <p className="text-lg md:text-xl leading-relaxed text-[#082744]/65 max-w-2xl">
              Browse programmes by academic level, faculty and institution to
              find options relevant to your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SEARCH + FILTERS
      ========================================================= */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#082744]/5 shadow-[0_15px_50px_rgba(8,39,68,0.06)] p-5 md:p-6">
            {/* Search */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search
                  size={19}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#082744]/35
                  "
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search programmes, faculties or institutions..."
                  className="
                    w-full
                    h-14
                    pl-12
                    pr-5
                    rounded-2xl
                    bg-[#F8F6F1]
                    border
                    border-[#082744]/10
                    outline-none
                    focus:border-[#B68A3A]
                    focus:ring-4
                    focus:ring-[#B68A3A]/10
                    transition
                  "
                />
              </div>

              {/* Mobile filter button */}
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="
                  lg:hidden
                  h-14
                  px-5
                  rounded-2xl
                  border
                  border-[#082744]/10
                  flex
                  items-center
                  justify-center
                  gap-2
                  font-semibold
                "
              >
                <SlidersHorizontal size={18} />
                Filters
              </button>
            </div>

            {/* Filters */}
            <div
              className={`
                ${showFilters ? "grid" : "hidden"}
                lg:grid
                grid-cols-1
                md:grid-cols-3
                gap-4
                mt-4
              `}
            >
              {/* Level */}
              <FilterSelect
                value={level}
                onChange={setLevel}
                options={["All Levels", "Undergraduate", "Postgraduate"]}
              />

              {/* Faculty */}
              <FilterSelect
                value={faculty}
                onChange={setFaculty}
                options={["All Faculties", "Business", "Technology"]}
              />

              {/* Institution */}
              <FilterSelect
                value={institution}
                onChange={setInstitution}
                options={[
                  "All Institutions",
                  "Union College",
                  "Partner Institution",
                  "Academic Partner",
                  "Global Institution",
                ]}
              />
            </div>

            {/* Filter footer */}
            <div
              className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-4
              mt-5
              pt-5
              border-t
              border-[#082744]/8
            "
            >
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
                  className="
                    text-sm
                    font-semibold
                    text-[#B68A3A]
                    hover:text-[#9F752E]
                    transition
                  "
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredProgrammes.length > 0 ? (
            <div
              className="
              grid
              md:grid-cols-2
              lg:grid-cols-3
              gap-7
            "
            >
              {filteredProgrammes.map((programme, index) => (
                <motion.article
                  key={programme.id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-50px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="
                    group
                    bg-white
                    rounded-[1.5rem]
                    overflow-hidden
                    border
                    border-[#082744]/5
                    shadow-[0_10px_40px_rgba(8,39,68,0.05)]
                    hover:shadow-[0_20px_55px_rgba(8,39,68,0.10)]
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={programme.image}
                      alt={programme.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-105
                        transition-transform
                        duration-700
                      "
                    />

                    <div
                      className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#082744]/60
                      via-transparent
                      to-transparent
                    "
                    />

                    {/* Level badge */}
                    <div
                      className="
                      absolute
                      top-4
                      left-4
                      px-3
                      py-1.5
                      rounded-full
                      bg-white/90
                      backdrop-blur-sm
                      text-xs
                      font-semibold
                      text-[#082744]
                    "
                    >
                      {programme.level}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p
                      className="
                      text-xs
                      uppercase
                      tracking-[0.15em]
                      text-[#B68A3A]
                      font-semibold
                      mb-3
                    "
                    >
                      {programme.faculty}
                    </p>

                    <h2
                      className="
                      font-serif
                      text-2xl
                      leading-tight
                      mb-3
                    "
                    >
                      {programme.title}
                    </h2>

                    <p
                      className="
                      text-sm
                      text-[#082744]/55
                      leading-relaxed
                      mb-5
                    "
                    >
                      {programme.description}
                    </p>

                    {/* Institution */}
                    <div
                      className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-[#082744]/65
                      mb-4
                    "
                    >
                      <BookOpen size={16} className="text-[#B68A3A]" />

                      {programme.institution}
                    </div>

                    {/* Meta */}
                    <div
                      className="
                      flex
                      items-center
                      justify-between
                      gap-3
                      py-4
                      border-y
                      border-[#082744]/8
                    "
                    >
                      <div className="flex items-center gap-2">
                        <Clock3 size={15} className="text-[#B68A3A]" />

                        <span className="text-xs text-[#082744]/60">
                          {programme.duration}
                        </span>
                      </div>

                      <span
                        className="
                        text-xs
                        text-[#082744]/50
                      "
                      >
                        {programme.mode}
                      </span>
                    </div>

                    {/* CTA */}
                    <Link
                      to={`/programmes/${programme.slug}`}
                      className="
                        mt-5
                        flex
                        items-center
                        justify-between
                        w-full
                        group/button
                        font-semibold
                        text-[#082744]
                      "
                    >
                      <span>View Programme</span>

                      <span
                        className="
                        w-10
                        h-10
                        rounded-full
                        bg-[#082744]
                        text-white
                        flex
                        items-center
                        justify-center
                        group-hover/button:bg-[#B68A3A]
                        transition
                      "
                      >
                        <ArrowRight size={17} />
                      </span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            /* =====================================================
               EMPTY STATE
            ===================================================== */
            <div
              className="
              bg-white
              rounded-[2rem]
              border
              border-[#082744]/5
              p-16
              text-center
            "
            >
              <div
                className="
                w-16
                h-16
                rounded-full
                bg-[#B68A3A]/10
                text-[#B68A3A]
                flex
                items-center
                justify-center
                mx-auto
                mb-6
              "
              >
                <Search size={25} />
              </div>

              <h2 className="font-serif text-3xl mb-3">No programmes found</h2>

              <p
                className="
                text-[#082744]/55
                max-w-md
                mx-auto
                mb-7
              "
              >
                Try changing your search or filters to explore other programme
                options.
              </p>

              <button
                onClick={clearFilters}
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-full
                  bg-[#082744]
                  text-white
                  font-semibold
                "
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
      <section className="bg-[#082744] text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              className="
              text-xs
              tracking-[0.25em]
              uppercase
              text-[#B68A3A]
              font-semibold
            "
            >
              Need Guidance?
            </span>

            <h2
              className="
              font-serif
              text-4xl
              md:text-5xl
              mt-5
              mb-6
            "
            >
              Not sure which programme
              <br />
              is right for you?
            </h2>

            <p
              className="
              text-white/60
              text-lg
              max-w-xl
              mx-auto
              mb-9
            "
            >
              Talk to an advisor about your academic interests and explore
              relevant options.
            </p>

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                gap-3
                bg-[#B68A3A]
                hover:bg-[#9F752E]
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                transition
              "
            >
              Talk to an Advisor
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

/* =============================================================
   FILTER SELECT
============================================================= */

const FilterSelect = ({ value, onChange, options }) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          appearance-none
          w-full
          h-13
          px-4
          pr-11
          rounded-2xl
          bg-[#F8F6F1]
          border
          border-[#082744]/10
          text-sm
          text-[#082744]
          outline-none
          focus:border-[#B68A3A]
          focus:ring-4
          focus:ring-[#B68A3A]/10
          transition
          cursor-pointer
        "
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        size={17}
        className="
          pointer-events-none
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-[#082744]/45
        "
      />
    </div>
  );
};

export default Programmes;
