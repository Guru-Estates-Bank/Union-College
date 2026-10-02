import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Building2,
  Check,
  Clock3,
  FileText,
  GraduationCap,
  IndianRupee,
  MapPin,
  CalendarDays,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import institutionData from "../data/institutionData";
import universityProgrammes from "../data/universityProgrammes";

export default function InstitutionDetail() {
  const { slug } = useParams();
  const institution = institutionData.find((item) => item.slug === slug);

  let programmes = universityProgrammes[slug] || [];

  if (
    slug === "indra-institute-of-management-studies" ||
    slug === "indra-institute-of-medical-and-science" ||
    slug === "indra-institute-of-law"
  ) {
    const indraProgrammes = universityProgrammes["indra-group"] || [];
    programmes = indraProgrammes.filter(
      (item) => item.institutionSlug === slug,
    );
  }

  if (!institution) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8F6F1] px-6 py-20 text-[#082744]">
        <div className="text-center">
          <Building2 className="mx-auto h-12 w-12 text-[#B68A3A]" />
          <h1 className="mt-6 font-serif text-4xl font-semibold">
            Institution not found
          </h1>
          <p className="mt-4 text-[#082744]/60">
            The institution you are looking for does not exist.
          </p>
          <Link
            to="/institutions"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#082744] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d3557]"
          >
            <ArrowLeft size={16} />
            Back to Institutions
          </Link>
        </div>
      </main>
    );
  }

  const formatCurrency = (value) => {
    if (value === null || value === undefined || value === "" || Number.isNaN(Number(value))) {
      return null;
    }
    return `₹${Number(value).toLocaleString("en-IN")}`;
  };

  const getFee = (item, key) => formatCurrency(item[key]);

  const heroImage = institution.image || null;

  return (
    <main className="min-h-screen bg-[#F8F6F1] text-[#082744]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#082744]">
        <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[#B68A3A]/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-white/5 blur-3xl" />

        {heroImage && (
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-[0.16]"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-[#082744]/95 via-[#082744]/90 to-[#082744]/70" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8 md:pb-28 md:pt-40">
          <Link
            to="/institutions"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Institutions
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B68A3A]/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2A755] backdrop-blur">
                <Building2 size={14} />
                Partner Institution
              </div>

              <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-white md:text-7xl">
                {institution.name}
              </h1>

              {institution.location && (
                <div className="mt-6 flex items-center gap-2 text-sm text-white/60">
                  <MapPin size={16} />
                  {institution.location}
                </div>
              )}

              {institution.description && (
                <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                  {institution.description}
                </p>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#B68A3A] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#a37932]"
                >
                  Talk to an Advisor
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="#programmes"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Programmes
                </a>

                {institution.website && (
                  <a
                    href={institution.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white/75 transition hover:bg-white/10 hover:text-white"
                  >
                    Official Website
                    <ArrowRight size={16} />
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
                {heroImage ? (
                  <img
                    src={heroImage}
                    alt={institution.name}
                    className="h-[300px] w-full rounded-[1.5rem] object-cover md:h-[410px]"
                  />
                ) : (
                  <div className="flex h-[300px] items-center justify-center rounded-[1.5rem] bg-white/5 md:h-[410px]">
                    <Building2 className="h-24 w-24 text-white/20" />
                  </div>
                )}
              </div>

              <div className="absolute -bottom-5 left-8 rounded-2xl border border-white/10 bg-[#082744]/90 px-5 py-4 shadow-xl backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B68A3A]/15 text-[#D2A755]">
                    <GraduationCap size={19} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D2A755]">
                      Union College
                    </div>
                    <div className="mt-1 text-xs text-white/50">
                      Education • Guidance • Opportunity
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUICK INFORMATION */}
      <section className="relative z-10 -mt-2 px-6 py-10 md:-mt-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard
            icon={BookOpen}
            label="Programmes"
            value={`${programmes.length} available`}
          />
          <InfoCard
            icon={MapPin}
            label="Location"
            value={institution.location || "India"}
          />
          <InfoCard
            icon={ShieldCheck}
            label="Institution"
            value="Partner Institution"
          />
          <InfoCard
            icon={GraduationCap}
            label="Admissions"
            value="Enquire Now"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="border-t border-[#082744]/10 pt-10">
            <SectionLabel>About the Institution</SectionLabel>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              {institution.name}
            </h2>
            <p className="mt-6 max-w-3xl text-sm leading-8 text-[#082744]/60 md:text-base">
              {institution.about || institution.description}
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#F0EDE5] p-7 md:p-8">
            <Sparkles className="h-7 w-7 text-[#B68A3A]" />
            <h3 className="mt-5 font-serif text-2xl font-semibold">
              Explore with clarity.
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#082744]/55">
              Review programmes, eligibility, fees and admission information
              before deciding on your next step.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#082744] transition hover:text-[#B68A3A]"
            >
              Speak with an advisor
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section
        id="programmes"
        className="scroll-mt-28 border-t border-[#082744]/8 px-6 py-20 lg:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>Courses & Programmes</SectionLabel>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              Programmes available through Union College
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#082744]/55 md:text-base">
              Explore programme details, eligibility and available fee
              information. Fees shown are based on the programme data currently
              provided to Union College.
            </p>
          </div>

          {programmes.length > 0 ? (
            <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
              {programmes.map((item, index) => {
                const generalFee = getFee(item, "generalFee");
                const obcFee = getFee(item, "obcFee");
                const stScFee = getFee(item, "stScFee");
                const tuitionFee = getFee(item, "tuitionFeeYearly");
                const totalStudentFee = getFee(item, "totalStudentFee");

                return (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.08 }}
                    transition={{ duration: 0.45, delay: Math.min(index * 0.025, 0.2) }}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#082744]/8 bg-white shadow-[0_10px_40px_rgba(8,39,68,0.045)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(8,39,68,0.10)]"
                  >
                    <div className="border-b border-[#082744]/8 p-6 md:p-7">
                      <div className="flex items-start justify-between gap-5">
                        <div className="min-w-0">
                          {item.faculty && (
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B68A3A]">
                              {item.faculty}
                            </p>
                          )}

                          <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-[#082744]">
                            {item.programme || item.title || "Programme"}
                          </h3>

                          {item.specialisation && (
                            <details className="mt-5 rounded-2xl border border-[#082744]/8 bg-[#F8F6F1]">
                              <summary className="cursor-pointer list-none px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#082744]">
                                <span className="inline-flex items-center gap-2">
                                  View Specializations
                                  <ArrowRight size={13} />
                                </span>
                              </summary>
                              <div className="border-t border-[#082744]/8 px-4 py-4">
                                <div className="grid gap-2 sm:grid-cols-2">
                                  {item.specialisation
                                    .split(",")
                                    .map((specialisation) => specialisation.trim())
                                    .filter(Boolean)
                                    .map((specialisation, specialisationIndex) => (
                                      <div
                                        key={`${item.id}-specialisation-${specialisationIndex}`}
                                        className="flex items-start gap-2 text-sm leading-6 text-[#082744]/60"
                                      >
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B68A3A]" />
                                        <span>{specialisation}</span>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </details>
                          )}
                        </div>

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F8F6F1] text-[#B68A3A] transition group-hover:bg-[#082744] group-hover:text-[#D2A755]">
                          <BookOpen size={18} />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6 md:p-7">
                      <div className="space-y-4">
                        {item.duration && (
                          <ProgrammeInfo
                            icon={Clock3}
                            label="Duration"
                            value={item.duration}
                          />
                        )}

                        {item.studyPattern && (
                          <ProgrammeInfo
                            icon={CalendarDays}
                            label="Study Pattern"
                            value={item.studyPattern}
                          />
                        )}

                        {item.eligibility && (
                          <ProgrammeInfo
                            icon={Check}
                            label="Eligibility"
                            value={item.eligibility}
                          />
                        )}
                      </div>

                      {(tuitionFee || totalStudentFee || generalFee || obcFee || stScFee) && (
                        <div className="mt-6 rounded-2xl bg-[#F0EDE5] p-4">
                          <div className="mb-3 flex items-center gap-2">
                            <IndianRupee size={17} className="text-[#B68A3A]" />
                            <p className="text-sm font-semibold text-[#082744]">
                              Fee Structure
                            </p>
                          </div>

                          <div className="grid gap-3 sm:grid-cols-2">
                            {tuitionFee && <FeeBox label="Tuition Fees Yearly" value={tuitionFee} />}
                            {totalStudentFee && <FeeBox label="Total Student Fees" value={totalStudentFee} />}
                            {generalFee && <FeeBox label="General" value={generalFee} />}
                            {obcFee && <FeeBox label="OBC" value={obcFee} />}
                            {stScFee && <FeeBox label="ST / SC" value={stScFee} />}
                          </div>

                          {item.registrationFee && (
                            <div className="mt-4 border-t border-[#082744]/10 pt-4 text-xs text-[#082744]/55">
                              <span className="font-semibold text-[#082744]">
                                Registration / Application Fee:
                              </span>{" "}
                              {formatCurrency(item.registrationFee)}
                            </div>
                          )}
                        </div>
                      )}

                      {Array.isArray(item.installments) && item.installments.length > 0 && (
                        <div className="mt-4 rounded-2xl border border-[#082744]/8 bg-white p-4">
                          <p className="mb-3 text-sm font-semibold text-[#082744]">
                            Installment Schedule
                          </p>
                          <div className="space-y-2">
                            {item.installments.map((installment, installmentIndex) => (
                              <div
                                key={`${item.id}-installment-${installmentIndex}`}
                                className="flex items-center justify-between rounded-xl bg-[#F8F6F1] px-4 py-3 text-sm"
                              >
                                <span className="text-[#082744]/55">
                                  Installment {installment.number || installmentIndex + 1}
                                </span>
                                <span className="font-semibold text-[#082744]">
                                  {formatCurrency(installment.amount)}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.academicYear && (
                        <div className="mt-5 flex items-center gap-2 text-xs text-[#082744]/45">
                          <CalendarDays size={14} />
                          Academic Year:{" "}
                          <strong className="text-[#082744]/70">{item.academicYear}</strong>
                        </div>
                      )}

                      {item.source && (
                        <p className="mt-4 text-[10px] leading-5 text-[#082744]/35">
                          Source: {item.source}
                        </p>
                      )}

                      <Link
                        to="/contact"
                        className="mt-6 flex w-full items-center justify-between rounded-2xl bg-[#082744] px-5 py-4 text-sm font-semibold text-white transition group-hover:bg-[#B68A3A]"
                      >
                        Enquire about this programme
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          ) : (
            <div className="mt-12 rounded-[2rem] border border-[#082744]/8 bg-white p-12 text-center">
              <BookOpen className="mx-auto h-10 w-10 text-[#B68A3A]" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">
                Programme details will be updated soon
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#082744]/55">
                Please contact our admissions team for the latest programme and fee information.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#082744] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#B68A3A]"
              >
                Contact Admissions
                <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* SUPPORT */}
      <section className="bg-[#F0EDE5] px-6 py-20 lg:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Admission Support</SectionLabel>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            Guidance when you need it.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <SupportCard
              icon={GraduationCap}
              title="Programme Guidance"
              description="Understand programme options, eligibility and academic pathways."
            />
            <SupportCard
              icon={FileText}
              title="Application Support"
              description="Get assistance with the admission process and required documents."
            />
            <SupportCard
              icon={ShieldCheck}
              title="Admission Assistance"
              description="Our counselling team can help you understand the next steps."
            />
          </div>
        </div>
      </section>

      {/* ADMISSION */}
      <section className="px-6 py-20 lg:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#082744] p-8 text-white md:p-10">
            <SectionLabel dark>Admission Process</SectionLabel>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Start your admission journey.
            </h2>

            <div className="mt-10 space-y-7">
              <Step number="01" title="Choose a programme" description="Explore available programmes and eligibility requirements." />
              <Step number="02" title="Speak with an advisor" description="Discuss your academic background and preferred programme." />
              <Step number="03" title="Submit documents" description="Complete the required application and documentation." />
              <Step number="04" title="Complete admission" description="Proceed with the institution's admission process." />
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#082744]/8 bg-white p-8 md:p-10">
            <SectionLabel>Documents</SectionLabel>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Documents generally required.
            </h2>

            <div className="mt-8 grid gap-3">
              {(
                institution.documents?.length
                  ? institution.documents
                  : [
                      "Academic certificates and mark sheets",
                      "Identity proof",
                      "Passport-size photographs",
                      "Address proof",
                      "Category certificate, where applicable",
                      "Other documents as required by the institution",
                    ]
              ).map((document) => (
                <div
                  key={document}
                  className="flex items-start gap-3 rounded-2xl bg-[#F8F6F1] p-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#B68A3A]" />
                  <span className="text-sm leading-6 text-[#082744]/65">
                    {document}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-20 lg:px-8 md:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] bg-[#082744] px-7 py-16 md:px-14 md:py-20">
          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-[#B68A3A]/20 blur-[100px]" />
          <div className="absolute bottom-0 right-0 opacity-10">
            <GraduationCap className="h-64 w-64" strokeWidth={0.5} />
          </div>

          <div className="relative z-10 max-w-3xl">
            <SectionLabel dark>Talk To Us</SectionLabel>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-white md:text-6xl">
              Let’s find your
              <span className="text-[#D2A755]"> next step.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 md:text-base">
              Have questions about programmes, eligibility, fees or the admission process?
              Start a conversation with Union College.
            </p>

            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#B68A3A] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#a37932]"
            >
              Talk to an Advisor
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionLabel({ children, dark = false }) {
  return (
    <div className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${dark ? "text-[#D2A755]" : "text-[#B68A3A]"}`}>
      <span className={`h-px w-9 ${dark ? "bg-[#B68A3A]" : "bg-[#B68A3A]"}`} />
      {children}
    </div>
  );
}

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-[#082744]/8 bg-white p-5 shadow-[0_8px_30px_rgba(8,39,68,0.04)]">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F8F6F1] text-[#B68A3A]">
          <Icon size={18} />
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#082744]/40">
            {label}
          </p>
          <p className="mt-1 text-sm font-semibold leading-6 text-[#082744]">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProgrammeInfo({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#F8F6F1] text-[#B68A3A]">
        <Icon size={15} />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#082744]/40">
          {label}
        </p>
        <p className="mt-1 text-sm leading-6 text-[#082744]/70">{value}</p>
      </div>
    </div>
  );
}

function FeeBox({ label, value }) {
  return (
    <div className="rounded-xl bg-white p-3 ring-1 ring-[#082744]/8">
      <p className="text-[10px] font-medium uppercase tracking-wide text-[#082744]/45">
        {label}
      </p>
      <p className="mt-1 font-semibold text-[#082744]">{value}</p>
    </div>
  );
}

function SupportCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-[1.5rem] border border-[#082744]/8 bg-white p-7"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082744] text-[#D2A755]">
        <Icon size={21} />
      </div>
      <h3 className="mt-6 text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#082744]/50">{description}</p>
    </motion.div>
  );
}

function Step({ number, title, description }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs font-semibold text-[#D2A755]">
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-white/50">{description}</p>
      </div>
    </div>
  );
}
