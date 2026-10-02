import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  Check,
  ChevronDown,
  GraduationCap,
  Menu,
  Search,
  Sparkles,
  Users,
  X,
  Globe2,
  Compass,
  Layers3,
  MessageCircle,
  Play,
  Quote,
  MapPin,
  Clock3,
  Star,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import universityProgrammes from "../data/universityProgrammes";

/* ============================================================
   UNION COLLEGE — HOME PAGE
   React + Tailwind CSS + Framer Motion
   Everything lives inside this single file.
============================================================ */

const COLORS = {
  navy: "#082744",
  navy2: "#0D3557",
  gold: "#B68A3A",
  ivory: "#F8F6F0",
};

/* ============================================================
   IMAGE DATA
============================================================ */

const images = {
  hero: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=85",

  students:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85",

  library:
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1400&q=85",

  lecture:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=85",

  technology:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=85",

  student:
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=85",

  campus:
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1600&q=85",

  books:
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=85",
};

/* ============================================================
   DATA
============================================================ */

const getProgrammeLevel = (title = "") => {
  const value = title.toLowerCase();
  if (value.includes("ph.d") || value.includes("phd") || value.includes("doctor")) return "Doctoral";
  if (value.includes("master") || value.includes("m.a") || value.includes("m.b.a") || value.includes("mba") || value.includes("m.com") || value.includes("m.sc") || value.includes("post graduate") || value.includes("post graduation")) return "Postgraduate";
  if (value.includes("diploma") || value.includes("certificate")) return "Diploma / Certificate";
  return "Undergraduate";
};

const getProgrammeImage = (faculty = "") => {
  const value = faculty.toLowerCase();
  if (value.includes("technology") || value.includes("computer") || value.includes("science")) return images.technology;
  if (value.includes("hospitality") || value.includes("tourism")) return images.lecture;
  return images.students;
};

const programmes = Object.values(universityProgrammes)
  .flat()
  .filter(Boolean)
  .map((item) => ({
    id: item.id,
    slug: item.institutionSlug
      ? item.institutionSlug + "-" + String(item.id).toLowerCase().replace(/[^a-z0-9]+/g, "-")
      : "",
    title: item.programme,
    category: item.faculty || "Other",
    institution: item.institutionName || "Partner Institution",
    institutionSlug: item.institutionSlug || "",
    level: getProgrammeLevel(item.programme),
    duration: item.duration
      ? String(item.duration) + " Year" + (String(item.duration) === "1" ? "" : "s")
      : "Duration on enquiry",
    mode: item.studyPattern || "Semester pattern on enquiry",
    tuitionFeeYearly: item.tuitionFeeYearly ?? null,
    totalStudentFee: item.totalStudentFee ?? null,
    image: getProgrammeImage(item.faculty),
    description: item.specialisation
      ? item.programme + " with specialisation options including " + item.specialisation + "."
      : "Explore " + item.programme + " under " + (item.faculty || "this faculty") + " at " + (item.institutionName || "the partner institution") + ".",
  }));

const featuredProgrammes = [
  "ssu-commerce-01",
  "ssu-commerce-09",
  "ssu-commerce-05",
]
  .map((id) => programmes.find((item) => item.id === id))
  .filter(Boolean);

const institutions = [
  {
    name: "Union College",
    category: "Global Education",
    code: "UC",
    image: images.campus,
  },
  {
    name: "Partner Institution",
    category: "International",
    code: "PI",
    image: images.lecture,
  },
  {
    name: "Academic Partner",
    category: "Higher Education",
    code: "AP",
    image: images.library,
  },
  {
    name: "Global Institution",
    category: "International",
    code: "GI",
    image: images.students,
  },
];

/* ============================================================
   ANIMATION VARIANTS
============================================================ */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* ============================================================
   SECTION LABEL
============================================================ */

function SectionLabel({ children, dark = false }) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${
        dark ? "text-white/60" : "text-[#B68A3A]"
      }`}
    >
      <span className={`h-px w-8 ${dark ? "bg-white/30" : "bg-[#B68A3A]"}`} />
      {children}
    </div>
  );
}

/* ============================================================
   BUTTON
============================================================ */

function GoldButton({ children, onClick, icon = true }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="group inline-flex items-center gap-3 rounded-full bg-[#B68A3A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#B68A3A]/20 transition hover:bg-[#a37932]"
    >
      {children}

      {icon && (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition group-hover:translate-x-0.5">
          <ArrowRight size={14} />
        </span>
      )}
    </motion.button>
  );
}

/* ============================================================
   OUTLINE BUTTON
============================================================ */

function OutlineButton({ children, onClick, dark = false }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-3 rounded-full border px-6 py-3.5 text-sm font-semibold transition ${
        dark
          ? "border-white/20 text-white hover:border-white/40 hover:bg-white/5"
          : "border-[#082744]/15 text-[#082744] hover:border-[#082744]/30 hover:bg-[#082744]/5"
      }`}
    >
      {children}
      <ArrowUpRight size={16} />
    </motion.button>
  );
}

/* ============================================================
   HOME
============================================================ */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [finder, setFinder] = useState({
    search: "",
    level: "All Levels",
    faculty: "All Faculties",
    institution: "All Institutions",
  });

  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, 100]);
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.08]);

  const updateFinder = (field, value) => {
    setFinder((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const filteredProgrammes = programmes.filter((programme) => {
    const searchMatch =
      !finder.search ||
      programme.title.toLowerCase().includes(finder.search.toLowerCase());

    const levelMatch =
      finder.level === "All Levels" || programme.level === finder.level;

    const facultyMatch =
      finder.faculty === "All Faculties" ||
      programme.category === finder.faculty;

    const institutionMatch =
      finder.institution === "All Institutions" ||
      programme.institution === finder.institution;

    return searchMatch && levelMatch && facultyMatch && institutionMatch;
  });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8F6F0] text-[#082744]">
      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <Navbar></Navbar>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        id="top"
        className="relative min-h-[850px] overflow-hidden bg-[#082744]"
      >
        {/* Background image */}

        <motion.div
          style={{
            y: heroY,
            scale: heroScale,
          }}
          className="absolute inset-0"
        >
          <img
            src={images.hero}
            alt="University campus"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#041827]/95 via-[#082744]/85 to-[#082744]/35" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#082744] via-transparent to-[#082744]/20" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Gold glow */}

        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-[#B68A3A]/20 blur-[120px]"
        />

        <div className="relative z-10 mx-auto flex min-h-[850px] max-w-7xl items-center px-6 pb-20 pt-36 lg:px-8">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
            {/* Hero copy */}

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <motion.div variants={fadeUp}>
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/75 backdrop-blur-md">
                  <Sparkles size={13} className="text-[#B68A3A]" />
                  Education. Guidance. Opportunity.
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-serif text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[82px]"
              >
                Explore Education.
                <br />
                <span className="text-[#D2A755]">Discover Your Path.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-xl text-base leading-8 text-white/70 md:text-lg"
              >
                Explore programmes and institutions, understand your options,
                and get guidance through your admission journey.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <GoldButton onClick={() => scrollToSection("finder")}>
                  Explore Programmes
                </GoldButton>

                <OutlineButton dark>
                  <Link to="contact">Talk to an Advisor</Link>
                </OutlineButton>
              </motion.div>

              {/* Trust row */}

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/50"
              >
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#B68A3A]" />
                  Guided discovery
                </div>

                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#B68A3A]" />
                  Programme exploration
                </div>

                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#B68A3A]" />
                  Personal guidance
                </div>
              </motion.div>
            </motion.div>

            {/* Hero visual */}

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative hidden lg:block"
            >
              <div className="relative ml-auto max-w-[500px]">
                {/* Main image */}

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative overflow-hidden rounded-[34px] border border-white/15 bg-white/10 p-2 shadow-2xl"
                >
                  <img
                    src={images.students}
                    alt="Students on campus"
                    className="h-[560px] w-full rounded-[28px] object-cover"
                  />

                  <div className="absolute inset-x-2 bottom-2 rounded-[28px] bg-gradient-to-t from-[#041827] via-[#041827]/80 to-transparent p-7 pt-32">
                    <div className="text-xs uppercase tracking-[0.22em] text-[#D2A755]">
                      Your journey starts here
                    </div>

                    <div className="mt-2 text-2xl font-semibold text-white">
                      Find the right direction.
                    </div>
                  </div>
                </motion.div>

                {/* Floating card */}

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-16 top-20 rounded-2xl border border-white/15 bg-[#082744]/85 p-4 shadow-2xl backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B68A3A]/15 text-[#D2A755]">
                      <Compass size={21} />
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/45">
                        Discover
                      </div>

                      <div className="mt-1 text-sm font-semibold text-white">
                        Find your path
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Stats */}

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-8 -right-10 rounded-2xl bg-white p-5 shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#082744] text-[#D2A755]">
                      <GraduationCap size={23} />
                    </div>

                    <div>
                      <div className="text-2xl font-bold text-[#082744]">
                        01
                      </div>

                      <div className="text-xs text-[#082744]/50">
                        Start your journey
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom scroll cue */}

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40 md:flex"
        >
          <span className="h-px w-8 bg-white/20" />
          Scroll to explore
          <span className="h-px w-8 bg-white/20" />
        </motion.div>
      </section>

      {/* ======================================================
          STATS STRIP
      ====================================================== */}

      <section className="relative z-20 -mt-10 px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-[#082744]/5 bg-white shadow-2xl shadow-[#082744]/10 md:grid-cols-4"
        >
          {[
            ["01", "Discover", "Explore education options"],
            ["02", "Compare", "Understand your choices"],
            ["03", "Connect", "Talk to the right people"],
            ["04", "Move Forward", "Take your next step"],
          ].map(([number, title, text], index) => (
            <div
              key={title}
              className={`p-7 ${
                index !== 3
                  ? "border-b border-[#082744]/8 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <div className="text-xs font-semibold text-[#B68A3A]">
                {number}
              </div>

              <div className="mt-3 text-base font-semibold text-[#082744]">
                {title}
              </div>

              <div className="mt-1 text-xs leading-5 text-[#082744]/50">
                {text}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ======================================================
          PROGRAMME FINDER
      ====================================================== */}

      <section id="finder" className="scroll-mt-28 px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionLabel>Programme Finder</SectionLabel>

              <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] md:text-5xl">
                Start with what
                <span className="text-[#B68A3A]"> interests you.</span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#082744]/55">
                Search programmes, explore areas of study and discover
                possibilities that fit the direction you want to take.
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[28px] border border-[#082744]/8 bg-white p-5 shadow-xl shadow-[#082744]/5 md:p-6"
            >
              <div className="grid gap-3 md:grid-cols-2">
                <div className="relative md:col-span-2">
                  <Search
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#082744]/35"
                  />

                  <input
                    value={finder.search}
                    onChange={(e) => updateFinder("search", e.target.value)}
                    placeholder="Search by programme or subject..."
                    className="w-full rounded-2xl border border-[#082744]/8 bg-[#F8F6F0] py-4 pl-11 pr-4 text-sm outline-none transition focus:border-[#B68A3A]"
                  />
                </div>

                <select
                  value={finder.level}
                  onChange={(e) => updateFinder("level", e.target.value)}
                  className="appearance-none rounded-2xl border border-[#082744]/8 bg-[#F8F6F0] px-4 py-4 text-sm text-[#082744] outline-none"
                >
                  <option>All Levels</option>
                  {Array.from(new Set(programmes.map((item) => item.level).filter(Boolean)))
                    .sort()
                    .map((level) => (
                      <option key={level}>{level}</option>
                    ))}
                </select>

                <select
                  value={finder.faculty}
                  onChange={(e) => updateFinder("faculty", e.target.value)}
                  className="appearance-none rounded-2xl border border-[#082744]/8 bg-[#F8F6F0] px-4 py-4 text-sm text-[#082744] outline-none"
                >
                  <option>All Faculties</option>
                  {Array.from(new Set(programmes.map((item) => item.category).filter(Boolean)))
                    .sort()
                    .map((faculty) => (
                      <option key={faculty}>{faculty}</option>
                    ))}
                </select>

                <select
                  value={finder.institution}
                  onChange={(e) => updateFinder("institution", e.target.value)}
                  className="appearance-none rounded-2xl border border-[#082744]/8 bg-[#F8F6F0] px-4 py-4 text-sm text-[#082744] outline-none"
                >
                  <option>All Institutions</option>
                  {Array.from(new Set(programmes.map((item) => item.institution).filter(Boolean)))
                    .sort()
                    .map((institution) => (
                      <option key={institution}>{institution}</option>
                    ))}
                </select>

                <button
                  onClick={() => scrollToSection("programmes")}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[#082744] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#0D3557]"
                >
                  Search Programmes
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FEATURED PROGRAMMES
      ====================================================== */}

      <section
        id="programmes"
        className="scroll-mt-28 bg-white px-6 py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <SectionLabel>Featured Programmes</SectionLabel>

              <h2 className="font-serif text-4xl tracking-[-0.03em] md:text-5xl">
                Education built around
                <span className="text-[#B68A3A]"> possibility.</span>
              </h2>
            </div>

            <Link
              to="/programmes"
              className="flex items-center gap-2 text-sm font-semibold text-[#082744]"
            >
              View all programmes
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 grid gap-7 lg:grid-cols-3"
          >
            {featuredProgrammes.map((programme) => (
              <motion.article
                key={programme.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[28px] border border-[#082744]/8 bg-[#F8F6F0] transition-shadow hover:shadow-2xl hover:shadow-[#082744]/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={programme.image}
                    alt={programme.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#082744]/80 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#082744] backdrop-blur">
                    {programme.category}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="text-xs text-white/65">
                      {programme.institution}
                    </div>

                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      {programme.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-6 text-[#082744]/55">
                    {programme.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-[#082744]/65">
                      {programme.level}
                    </span>

                    <span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-[#082744]/65">
                      {programme.duration}
                    </span>

                    <span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-[#082744]/65">
                      {programme.mode}
                    </span>

                    {programme.tuitionFeeYearly && (
                      <span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-[#082744]/65">
                        ₹{Number(programme.tuitionFeeYearly).toLocaleString("en-IN")}/year
                      </span>
                    )}
                  </div>

                  <Link
                    to={"/programmes/" + programme.slug}
                    className="mt-7 flex w-full items-center justify-between rounded-2xl bg-[#082744] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#B68A3A]"
                  >
                    View Programme
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredProgrammes.length === 0 && (
            <div className="mt-10 rounded-3xl bg-[#F8F6F0] p-12 text-center">
              <Search size={30} className="mx-auto text-[#B68A3A]" />

              <h3 className="mt-4 text-lg font-semibold">
                No programmes found
              </h3>

              <p className="mt-2 text-sm text-[#082744]/50">
                Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ======================================================
          EDITORIAL IMAGE SECTION
      ====================================================== */}

      <section className="overflow-hidden bg-[#082744] px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full border border-[#B68A3A]/30" />

              <div className="relative overflow-hidden rounded-[34px]">
                <img
                  src={images.library}
                  alt="University library"
                  className="h-[560px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#041827]/60 to-transparent" />

                <div className="absolute bottom-7 left-7 rounded-2xl border border-white/15 bg-[#082744]/80 px-5 py-4 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <BookOpen size={19} className="text-[#D2A755]" />

                    <div>
                      <div className="text-sm font-semibold text-white">
                        Learn with purpose
                      </div>

                      <div className="text-xs text-white/45">
                        Build knowledge. Create opportunity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionLabel dark>More Than A Programme</SectionLabel>

              <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-white md:text-5xl">
                Your education should open
                <span className="text-[#D2A755]"> new doors.</span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/60">
                Choosing an education pathway is about more than selecting a
                course. It is about understanding where you want to go and
                finding the environment, programme and support that can help you
                move there.
              </p>

              <div className="mt-9 space-y-5">
                {[
                  [
                    Compass,
                    "Explore with clarity",
                    "Understand your options before making your next move.",
                  ],
                  [
                    Users,
                    "Get human guidance",
                    "Connect with people who can help you navigate your journey.",
                  ],
                  [
                    Layers3,
                    "See the bigger picture",
                    "Consider programmes, institutions and future possibilities together.",
                  ],
                ].map(([Icon, title, text]) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#D2A755]">
                      <Icon size={19} />
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-white">
                        {title}
                      </div>

                      <div className="mt-1 text-xs leading-5 text-white/45">
                        {text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <GoldButton onClick={() => scrollToSection("advisor")}>
                  Start a Conversation
                </GoldButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================
          INSTITUTIONS
      ====================================================== */}

      <section id="institutions" className="scroll-mt-28 px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <SectionLabel>Institutions</SectionLabel>

            <h2 className="font-serif text-4xl tracking-[-0.03em] md:text-5xl">
              Discover the places
              <span className="text-[#B68A3A]"> behind the opportunities.</span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#082744]/55">
              Explore institutions and understand the environments where your
              academic journey can take shape.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-5 md:grid-cols-2"
          >
            {institutions.map((institution, index) => (
              <motion.div
                key={institution.name}
                variants={fadeUp}
                whileHover={{ scale: 1.015 }}
                className="group relative h-[360px] overflow-hidden rounded-[30px]"
              >
                <img
                  src={institution.image}
                  alt={institution.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#041827] via-[#041827]/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                      {institution.category}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#082744] transition group-hover:bg-[#B68A3A] group-hover:text-white"></div>
                  </div>

                  <h3 className="text-2xl font-semibold text-white">
                    {institution.name}
                  </h3>

                  <p className="mt-2 text-sm text-white/55">
                    Explore programmes, opportunities and academic pathways.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          WHY UNION
      ====================================================== */}

      <section
        id="why-union"
        className="scroll-mt-28 bg-[#F0EDE5] px-6 py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionLabel>Why Union</SectionLabel>

              <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] md:text-5xl">
                Education choices,
                <br />
                made
                <span className="text-[#B68A3A]"> clearer.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#082744]/55">
                We bring discovery, information and guidance together so you can
                focus on making your next step with confidence.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {[
                [
                  Compass,
                  "Clarity",
                  "Understand your options without getting lost in complexity.",
                ],
                [
                  Users,
                  "Guidance",
                  "Get access to a more human and informed journey.",
                ],
                [
                  Globe2,
                  "Opportunity",
                  "Explore institutions and pathways beyond the obvious.",
                ],
                [
                  ShieldCheck,
                  "Confidence",
                  "Make informed decisions with the right information.",
                ],
              ].map(([Icon, title, text]) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="rounded-[25px] border border-[#082744]/8 bg-white p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082744] text-[#D2A755]">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">{title}</h3>

                  <p className="mt-3 text-sm leading-6 text-[#082744]/50">
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================
          HOW IT WORKS
      ====================================================== */}

      <section
        id="how-it-works"
        className="scroll-mt-28 bg-[#082744] px-6 py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <SectionLabel dark>How It Works</SectionLabel>

            <h2 className="font-serif text-4xl tracking-[-0.03em] text-white md:text-5xl">
              From curiosity to
              <span className="text-[#D2A755]"> next step.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative mt-16 grid gap-10 md:grid-cols-4"
          >
            <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-white/10 md:block" />

            {[
              [
                "01",
                Search,
                "Explore",
                "Discover programmes and institutions that match your interests.",
              ],
              [
                "02",
                MessageCircle,
                "Guidance",
                "Get support understanding your options and questions.",
              ],
              [
                "03",
                Compass,
                "Select",
                "Compare possibilities and identify the direction that fits.",
              ],
              [
                "04",
                GraduationCap,
                "Apply",
                "Move forward with a clearer understanding of your next step.",
              ],
            ].map(([number, Icon, title, text]) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="relative z-10 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-[#0D3557] text-[#D2A755] shadow-xl">
                  <Icon size={23} />
                </div>

                <div className="mt-5 text-[10px] font-semibold tracking-[0.25em] text-[#D2A755]">
                  {number}
                </div>

                <h3 className="mt-2 text-lg font-semibold text-white">
                  {title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-xs leading-6 text-white/45">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          TESTIMONIAL / EDITORIAL
      ====================================================== */}

      <section className="px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[35px] bg-[#B68A3A] lg:grid-cols-[.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[400px]"
            >
              <img
                src={images.student}
                alt="Student"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#082744]/20" />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#082744] text-[#D2A755]">
                    <Star size={18} />
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-[#082744]">
                      Your future matters
                    </div>

                    <div className="text-[10px] text-[#082744]/50">
                      Start with a conversation
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col justify-center p-9 md:p-14"
            >
              <Quote size={34} className="text-white/40" />

              <blockquote className="mt-7 font-serif text-3xl leading-tight tracking-[-0.03em] text-white md:text-4xl">
                “The right education decision starts with understanding what is
                possible.”
              </blockquote>

              <div className="mt-8">
                <div className="text-sm font-semibold text-white">
                  Union College
                </div>

                <div className="mt-1 text-xs text-white/55">
                  Education • Guidance • Opportunity
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================
          ADVISOR CTA
      ====================================================== */}

      <section id="advisor" className="scroll-mt-28 px-6 pb-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[35px] bg-[#082744] px-7 py-16 md:px-14 md:py-20"
        >
          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-[#B68A3A]/20 blur-[100px]" />

          <div className="absolute bottom-0 right-0 h-64 w-64 opacity-10">
            <GraduationCap className="h-full w-full" strokeWidth={0.5} />
          </div>

          <div className="relative z-10 max-w-3xl">
            <SectionLabel dark>Talk To Us</SectionLabel>

            <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-white md:text-6xl">
              Let’s find your
              <span className="text-[#D2A755]"> next step.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 md:text-base">
              Have questions about programmes, institutions or where to begin?
              Start a conversation and explore your options with guidance.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact">
                <GoldButton>Talk to an Advisor</GoldButton>
              </Link>

              <OutlineButton dark>Explore Programmes</OutlineButton>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ======================================================
          PROGRAMME MODAL
      ====================================================== */}
    </div>
  );
}
