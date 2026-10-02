import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Clock3,
  GraduationCap,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import programmeData from "../data/programmeData";
import institutionData from "../data/institutionData";
import universityProgrammes from "../data/universityProgrammes";

const getUniversityProgrammeSlug = (item) =>
  `${item.institutionSlug}-${String(item.id).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

const getInstitutionImage = (slug) =>
  institutionData.find((item) => item.slug === slug)?.image || null;

const getUniversityProgramme = (slug) => {
  const all = Object.values(universityProgrammes).flat().filter(Boolean);
  return all.find((item) => getUniversityProgrammeSlug(item) === slug) || null;
};

const normalizeUniversityProgramme = (item) => ({
  ...item,
  title: item.programme,
  institution: item.institutionName || "Partner Institution",
  level: item.programme?.toLowerCase().includes("master") || item.programme?.toLowerCase().includes("mba") || item.programme?.toLowerCase().includes("mca") || item.programme?.toLowerCase().includes("m.com") || item.programme?.toLowerCase().includes("m.sc") || item.programme?.toLowerCase().includes("post graduate") ? "Postgraduate" : item.programme?.toLowerCase().includes("diploma") ? "Diploma / Certificate" : "Undergraduate",
  duration: item.duration ? `${item.duration} Year${String(item.duration) === "1" ? "" : "s"}` : "Available on enquiry",
  mode: item.studyPattern || "Programme dependent",
  image: getInstitutionImage(item.institutionSlug) || "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=85",
  description: item.specialisation ? `${item.programme} with specialisation options including ${item.specialisation}.` : `Explore ${item.programme} at ${item.institutionName || "the partner institution"}.`,
  fees: item.tuitionFeeYearly ? `Tuition fee: ₹${Number(item.tuitionFeeYearly).toLocaleString("en-IN")} per year${item.totalStudentFee ? ` · Total student fee: ₹${Number(item.totalStudentFee).toLocaleString("en-IN")}` : ""}.` : "Fee details available on enquiry.",
  admission: item.eligibility || "Admission requirements are programme-specific. Please enquire for current admission guidance.",
  documents: ["Academic qualification documents", "Identity proof", "Passport-size photographs", "Programme-specific documents"],
  recognition: item.source ? `Programme information is based on the Union College programme and fee structure source. Students should verify current recognition, eligibility and admission requirements with the relevant institution.` : "Students should verify current recognition, eligibility and admission requirements with the relevant institution.",
});

const ProgrammeDetail = () => {
  const { slug } = useParams();

  const catalogueProgramme = programmeData.find((item) => item.slug === slug);
  const universityProgramme = getUniversityProgramme(slug);
  const programme = catalogueProgramme || (universityProgramme ? normalizeUniversityProgramme(universityProgramme) : null);

  // ---------------------------------------------------------
  // Programme not found
  // ---------------------------------------------------------

  if (!programme) {
    return (
      <main className="min-h-screen bg-[#F8F6F1] flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-[#B68A3A] uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Programme
          </p>

          <h1 className="font-serif text-4xl md:text-5xl text-[#082744] mb-5">
            Programme not found
          </h1>

          <p className="text-[#082744]/55 mb-8">
            The programme you are looking for could not be found.
          </p>

          <Link
            to="/programmes"
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
            <ArrowLeft size={17} />
            Back to Programmes
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#F8F6F1] text-[#082744] min-h-screen">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        {/* Decorative background */}
        <div
          className="
          absolute
          top-10
          right-[-180px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#B68A3A]/10
          blur-3xl
        "
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <Link
              to="/programmes"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                text-[#082744]/50
                hover:text-[#B68A3A]
                transition
              "
            >
              <ArrowLeft size={16} />
              Back to Programmes
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Faculty */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[1px] bg-[#B68A3A]" />

                <span
                  className="
                  text-xs
                  uppercase
                  tracking-[0.22em]
                  font-semibold
                  text-[#B68A3A]
                "
                >
                  {programme.faculty}
                </span>
              </div>

              {/* Title */}
              <h1
                className="
                font-serif
                text-5xl
                md:text-6xl
                lg:text-7xl
                leading-[0.95]
                tracking-[-0.03em]
                mb-7
              "
              >
                {programme.title}
              </h1>

              {/* Description */}
              <p
                className="
                text-lg
                md:text-xl
                leading-relaxed
                text-[#082744]/60
                max-w-xl
                mb-9
              "
              >
                {programme.description}
              </p>

              {/* Institution */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="
                  w-10
                  h-10
                  rounded-xl
                  bg-[#082744]
                  text-white
                  flex
                  items-center
                  justify-center
                "
                >
                  <BookOpen size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#082744]/40">
                    Institution
                  </p>

                  <p className="font-semibold">{programme.institution}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    px-7
                    py-4
                    rounded-full
                    bg-[#B68A3A]
                    text-white
                    font-semibold
                    hover:bg-[#9F752E]
                    transition
                    shadow-lg
                    shadow-[#B68A3A]/20
                  "
                >
                  Talk to an Advisor
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="#apply"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    px-7
                    py-4
                    rounded-full
                    border
                    border-[#082744]/15
                    text-[#082744]
                    font-semibold
                    hover:border-[#B68A3A]
                    hover:text-[#B68A3A]
                    transition
                  "
                >
                  Apply
                </a>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="relative"
            >
              <div
                className="
                relative
                aspect-[4/3]
                rounded-[2rem]
                overflow-hidden
                shadow-2xl
              "
              >
                <img
                  src={programme.image}
                  alt={programme.title}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#082744]/50
                  via-transparent
                  to-transparent
                "
                />
              </div>

              {/* Floating programme type */}
              <div
                className="
                absolute
                -bottom-6
                -left-6
                bg-white
                rounded-2xl
                shadow-xl
                p-5
                min-w-[210px]
              "
              >
                <p
                  className="
                  text-xs
                  uppercase
                  tracking-wider
                  text-[#082744]/40
                  mb-2
                "
                >
                  Programme Level
                </p>

                <p className="font-serif text-xl">{programme.level}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK INFORMATION
      ===================================================== */}

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="
            bg-[#082744]
            rounded-[1.75rem]
            p-6
            md:p-8
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
          >
            <InfoItem
              icon={GraduationCap}
              label="Level"
              value={programme.level}
            />

            <InfoItem
              icon={Clock3}
              label="Duration"
              value={programme.duration}
            />

            <InfoItem icon={MapPin} label="Mode" value={programme.mode} />

            <InfoItem
              icon={BookOpen}
              label="Faculty"
              value={programme.faculty}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN INFORMATION
      ===================================================== */}

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_0.42fr] gap-14 lg:gap-20">
            {/* MAIN */}
            <div className="space-y-16">
              {/* Eligibility */}
              <InfoSection number="01" title="Eligibility">
                <p className="text-lg text-[#082744]/60 leading-relaxed">
                  {programme.eligibility}
                </p>
              </InfoSection>

              {/* Specialisation */}
              {programme.specialisation && (
                <InfoSection number="02" title="Specialisation">
                  <p className="text-lg text-[#082744]/60 leading-relaxed">
                    {programme.specialisation}
                  </p>
                </InfoSection>
              )}

              {/* Fees */}
              <InfoSection number="03" title="Fees">
                <p className="text-lg text-[#082744]/60 leading-relaxed">
                  {programme.fees}
                </p>
              </InfoSection>

              {/* Admission */}
              <InfoSection number="04" title="Admission">
                <p className="text-lg text-[#082744]/60 leading-relaxed">
                  {programme.admission}
                </p>
              </InfoSection>

              {/* Documents */}
              <InfoSection number="05" title="Documents">
                <div className="space-y-3">
                  {programme.documents.map((document) => (
                    <div key={document} className="flex items-center gap-3">
                      <div
                        className="
                        w-8
                        h-8
                        rounded-full
                        bg-[#B68A3A]/10
                        text-[#B68A3A]
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                      >
                        <Check size={15} />
                      </div>

                      <span className="text-[#082744]/65">{document}</span>
                    </div>
                  ))}
                </div>
              </InfoSection>

              {/* Recognition */}
              <InfoSection number="06" title="Recognition / Verification">
                <div
                  className="
                  flex
                  gap-4
                  p-5
                  rounded-2xl
                  bg-[#082744]/5
                "
                >
                  <ShieldCheck
                    size={22}
                    className="text-[#B68A3A] shrink-0 mt-1"
                  />

                  <p className="text-[#082744]/60 leading-relaxed">
                    {programme.recognition}
                  </p>
                </div>
              </InfoSection>
            </div>

            {/* =================================================
                SIDEBAR
            ================================================= */}

            <aside>
              <div
                className="
                lg:sticky
                lg:top-28
                bg-white
                rounded-[1.75rem]
                p-7
                border
                border-[#082744]/5
                shadow-[0_15px_50px_rgba(8,39,68,0.07)]
              "
              >
                <p
                  className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  font-semibold
                  text-[#B68A3A]
                  mb-3
                "
                >
                  Interested?
                </p>

                <h3
                  className="
                  font-serif
                  text-3xl
                  leading-tight
                  mb-5
                "
                >
                  Take the next step.
                </h3>

                <p
                  className="
                  text-sm
                  leading-relaxed
                  text-[#082744]/55
                  mb-7
                "
                >
                  Talk to an advisor about this programme and get guidance on
                  the next step.
                </p>

                <Link
                  to="/contact"
                  className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-[#B68A3A]
                    hover:bg-[#9F752E]
                    text-white
                    py-3.5
                    rounded-full
                    font-semibold
                    transition
                  "
                >
                  Talk to an Advisor
                  <ArrowRight size={17} />
                </Link>

                <a
                  id="apply"
                  href="#"
                  className="
                    mt-3
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    border
                    border-[#082744]/15
                    hover:border-[#B68A3A]
                    text-[#082744]
                    hover:text-[#B68A3A]
                    py-3.5
                    rounded-full
                    font-semibold
                    transition
                  "
                >
                  Apply
                </a>

                <div
                  className="
                  mt-7
                  pt-6
                  border-t
                  border-[#082744]/8
                "
                >
                  <p
                    className="
                    text-xs
                    uppercase
                    tracking-wider
                    text-[#082744]/35
                    mb-2
                  "
                  >
                    Institution
                  </p>

                  <p className="font-semibold">{programme.institution}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =====================================================
          ROLE CLARIFICATION
      ===================================================== */}

      <section className="py-20 bg-[#082744] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ShieldCheck size={30} className="text-[#B68A3A] mx-auto mb-6" />

          <h2
            className="
            font-serif
            text-3xl
            md:text-4xl
            mb-6
          "
          >
            Admission Guidance
          </h2>

          <p
            className="
            text-white/60
            text-lg
            leading-relaxed
          "
          >
            Union College provides admissions support and guidance. The relevant
            institution is responsible for admission decisions and awarding the
            qualification.
          </p>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="py-24 bg-[#B68A3A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="
            font-serif
            text-4xl
            md:text-5xl
            text-white
            mb-6
          "
          >
            Have questions about this programme?
          </h2>

          <p
            className="
            text-white/75
            text-lg
            mb-9
          "
          >
            Talk to an advisor about your options and next steps.
          </p>

          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              gap-3
              bg-[#082744]
              hover:bg-[#061d32]
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
        </div>
      </section>
    </main>
  );
};

/* =============================================================
   INFO ITEM
============================================================= */

const InfoItem = ({ icon: Icon, label, value }) => {
  return (
    <div className="flex items-center gap-4">
      <div
        className="
        w-11
        h-11
        rounded-xl
        bg-white/10
        text-[#B68A3A]
        flex
        items-center
        justify-center
        shrink-0
      "
      >
        <Icon size={19} />
      </div>

      <div>
        <p
          className="
          text-[10px]
          uppercase
          tracking-[0.15em]
          text-white/40
          mb-1
        "
        >
          {label}
        </p>

        <p className="text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  );
};

/* =============================================================
   INFORMATION SECTION
============================================================= */

const InfoSection = ({ number, title, children }) => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 25,
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
      }}
    >
      <div className="flex items-center gap-4 mb-5">
        <span
          className="
          text-xs
          font-semibold
          text-[#B68A3A]
          tracking-wider
        "
        >
          {number}
        </span>

        <span className="h-[1px] w-8 bg-[#B68A3A]/50" />

        <h2
          className="
          font-serif
          text-3xl
          md:text-4xl
        "
        >
          {title}
        </h2>
      </div>

      <div className="pl-0 md:pl-16">{children}</div>
    </motion.section>
  );
};

export default ProgrammeDetail;
