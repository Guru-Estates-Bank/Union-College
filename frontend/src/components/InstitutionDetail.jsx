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
  MapPin,
  ShieldCheck,
  Sparkles,
  IndianRupee,
  CalendarDays,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import institutionData from "../data/institutionData";
import universityProgrammes from "../data/universityProgrammes";

export default function InstitutionDetail() {
  const { slug } = useParams();

  // Find the institution using the URL slug
  const institution = institutionData.find((item) => item.slug === slug);

  // Programme data is mapped directly to the institution slug.
  // Indra Institute of Management Studies is one single institution,
  // so all of its Management, Computer Applications, Pharmacy and Law
  // programmes are displayed on the same institution page.
  const programmes = universityProgrammes[slug] || [];

  // If institution does not exist
  if (!institution) {
    return (
      <main className="min-h-screen bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Building2 className="mx-auto mb-6 h-12 w-12 text-slate-400" />

          <h1 className="text-3xl font-bold text-slate-900">
            Institution Not Found
          </h1>

          <p className="mt-3 text-slate-600">
            The institution you are looking for could not be found.
          </p>

          <Link
            to="/institutions"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Institutions
          </Link>
        </div>
      </main>
    );
  }

  /*
   * ---------------------------------------------------------
   * FALLBACK HERO IMAGE
   * ---------------------------------------------------------
   *
   * Some institutions may have image: null.
   * Instead of rendering a broken image, use a simple
   * gradient-based visual.
   */

  const heroImage = institution.image || null;

  /*
   * ---------------------------------------------------------
   * HELPERS
   * ---------------------------------------------------------
   */

  const formatCurrency = (value) => {
    if (
      value === null ||
      value === undefined ||
      value === "" ||
      Number.isNaN(Number(value))
    ) {
      return null;
    }

    return `₹${Number(value).toLocaleString("en-IN")}`;
  };

  const getFee = (item, key) => {
    if (
      item[key] === null ||
      item[key] === undefined ||
      item[key] === ""
    ) {
      return null;
    }

    return formatCurrency(item[key]);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />

        {heroImage && (
          <img
            src={heroImage}
            alt={institution.name}
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
        )}

        <div className="absolute inset-0 bg-slate-950/60" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <Link
            to="/institutions"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Partner Institutions
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              {institution.shortName && (
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                  <Building2 className="h-4 w-4" />
                  {institution.shortName}
                </div>
              )}

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl"
              >
                {institution.name}
              </motion.h1>

              {institution.location && (
                <div className="mt-6 flex items-center gap-2 text-white/80">
                  <MapPin className="h-5 w-5" />
                  <span>{institution.location}</span>
                </div>
              )}

              {institution.description && (
                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
                  {institution.description}
                </p>
              )}

              <div className="mt-8 flex flex-wrap gap-4">
                {institution.website && (
                  <a
                    href={institution.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
                  >
                    Visit Official Website
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Enquire Now
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
                {heroImage ? (
                  <img
                    src={heroImage}
                    alt=""
                    className="h-[360px] w-full rounded-2xl object-cover"
                  />
                ) : (
                  <div className="flex h-[360px] items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-slate-800">
                    <Building2 className="h-24 w-24 text-white/30" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK INFORMATION
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-10 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                <Building2 className="h-6 w-6" />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  About the Institution
                </p>

                <h2 className="text-2xl font-bold text-slate-900">
                  {institution.name}
                </h2>
              </div>
            </div>

            <p className="leading-8 text-slate-600">
              {institution.description ||
                `${institution.name} is one of the partner institutions available through Union College. Students can explore eligible programmes and admission opportunities through our counselling team.`}
            </p>

            {institution.website && (
              <a
                href={institution.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-700"
              >
                View official institution website
                <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </div>

          <div className="rounded-3xl bg-slate-900 p-7 text-white shadow-sm md:p-9">
            <Sparkles className="mb-5 h-8 w-8 text-indigo-300" />

            <h3 className="text-xl font-bold">
              Find the right programme
            </h3>

            <p className="mt-3 leading-7 text-white/70">
              Speak with our admissions team to understand eligibility,
              programme structure, fees and admission requirements.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Talk to an Advisor
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROGRAMMES
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Courses & Programmes
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Programmes available through Union College
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Explore programme details, eligibility and available fee
            information. Fees shown below are based on the programme data
            currently provided to Union College.
          </p>
        </div>

        {programmes.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {programmes.map((item) => {
              const generalFee = getFee(item, "generalFee");
              const obcFee = getFee(item, "obcFee");
              const stScFee = getFee(item, "stScFee");

              const tuitionFee = getFee(item, "tuitionFeeYearly");
              const totalStudentFee = getFee(item, "totalStudentFee");

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  {/* Programme heading */}
                  <div className="border-b border-slate-100 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        {item.faculty && (
                          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
                            {item.faculty}
                          </p>
                        )}

                        <h3 className="text-xl font-bold leading-7 text-slate-900">
                          {item.programme ||
                            item.title ||
                            "Programme"}
                        </h3>

                        {item.specialisation && (
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            <span className="font-semibold">
                              Specialisation:
                            </span>{" "}
                            {item.specialisation}
                          </p>
                        )}
                      </div>

                      <div className="shrink-0 rounded-xl bg-indigo-50 p-3 text-indigo-600">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Programme information */}
                  <div className="space-y-4 p-6">
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

                    {/* =================================================
                        STANDARD FEE STRUCTURE
                    ================================================== */}

                    {(tuitionFee || totalStudentFee) && (
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div className="mb-3 flex items-center gap-2">
                          <IndianRupee className="h-5 w-5 text-indigo-600" />

                          <p className="font-bold text-slate-900">
                            Fee Structure
                          </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          {tuitionFee && (
                            <FeeBox
                              label="Tuition Fees Yearly"
                              value={tuitionFee}
                            />
                          )}

                          {totalStudentFee && (
                            <FeeBox
                              label="Total Student Fees"
                              value={totalStudentFee}
                            />
                          )}
                        </div>
                      </div>
                    )}

                    {/* =================================================
                        INDRA FEE STRUCTURE
                    ================================================== */}

                    {(generalFee || obcFee || stScFee) && (
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div className="mb-3 flex items-center gap-2">
                          <IndianRupee className="h-5 w-5 text-indigo-600" />

                          <p className="font-bold text-slate-900">
                            Fee Structure
                          </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3">
                          {generalFee && (
                            <FeeBox
                              label="General"
                              value={generalFee}
                            />
                          )}

                          {obcFee && (
                            <FeeBox
                              label="OBC"
                              value={obcFee}
                            />
                          )}

                          {stScFee && (
                            <FeeBox
                              label="ST / SC"
                              value={stScFee}
                            />
                          )}
                        </div>

                        {item.registrationFee && (
                          <div className="mt-4 border-t border-slate-200 pt-4 text-sm text-slate-600">
                            <span className="font-semibold text-slate-900">
                              Registration / Application Fee:
                            </span>{" "}
                            {formatCurrency(item.registrationFee)}
                          </div>
                        )}
                      </div>
                    )}

                    {/* =================================================
                        INSTALLMENT STRUCTURE
                    ================================================== */}

                    {Array.isArray(item.installments) &&
                      item.installments.length > 0 && (
                        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4">
                          <p className="mb-3 font-bold text-slate-900">
                            Installment Schedule
                          </p>

                          <div className="space-y-2">
                            {item.installments.map(
                              (installment, index) => (
                                <div
                                  key={`${item.id}-installment-${index}`}
                                  className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm"
                                >
                                  <span className="font-medium text-slate-600">
                                    Installment{" "}
                                    {installment.number || index + 1}
                                  </span>

                                  <span className="font-bold text-slate-900">
                                    {formatCurrency(
                                      installment.amount
                                    )}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}

                    {/* Academic year */}
                    {item.academicYear && (
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <CalendarDays className="h-4 w-4" />

                        <span>
                          Academic Year:{" "}
                          <strong className="text-slate-700">
                            {item.academicYear}
                          </strong>
                        </span>
                      </div>
                    )}

                    {/* Source */}
                    {item.source && (
                      <p className="text-xs leading-5 text-slate-400">
                        Source: {item.source}
                      </p>
                    )}

                    {/* Enquiry */}
                    <Link
                      to="/contact"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-indigo-600"
                    >
                      Enquire about this programme
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
            <BookOpen className="mx-auto mb-4 h-10 w-10 text-slate-400" />

            <h3 className="text-xl font-bold text-slate-900">
              Programme details will be updated soon
            </h3>

            <p className="mx-auto mt-2 max-w-xl text-slate-600">
              Please contact our admissions team for the latest programme
              and fee information.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white"
            >
              Contact Admissions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </section>

      {/* =====================================================
          LEARNING MODES
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 md:p-9">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-indigo-600" />

            <h2 className="text-2xl font-bold text-slate-900">
              Learning & Admission Support
            </h2>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
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

      {/* =====================================================
          ADMISSION DETAILS
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-900 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
              Admission Process
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Start your admission journey
            </h2>

            <div className="mt-8 space-y-5">
              <Step
                number="01"
                title="Choose a programme"
                description="Explore available programmes and eligibility requirements."
              />

              <Step
                number="02"
                title="Speak with an advisor"
                description="Discuss your academic background and preferred programme."
              />

              <Step
                number="03"
                title="Submit documents"
                description="Complete the required application and documentation."
              />

              <Step
                number="04"
                title="Complete admission"
                description="Proceed with the institution's admission process."
              />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Documents
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Documents generally required
            </h2>

            <div className="mt-7 space-y-4">
              {[
                "Academic certificates and mark sheets",
                "Identity proof",
                "Passport-size photographs",
                "Address proof",
                "Category certificate, where applicable",
                "Other documents as required by the institution",
              ].map((document) => (
                <div
                  key={document}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

                  <span className="text-sm leading-6 text-slate-700">
                    {document}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 p-8 text-white shadow-xl md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
                Need help?
              </p>

              <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                Speak with a Union College admission advisor
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-white/80">
                Get guidance on programme selection, eligibility, fees,
                documents and the admission process.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-indigo-700 transition hover:bg-slate-100"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   REUSABLE COMPONENTS
============================================================ */

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {label}
          </p>

          <p className="mt-1 font-bold leading-6 text-slate-900">
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
      <Icon className="mt-1 h-4 w-4 shrink-0 text-indigo-600" />

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {label}
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-700">
          {value}
        </p>
      </div>
    </div>
  );
}

function FeeBox({ label, value }) {
  return (
    <div className="rounded-xl bg-white p-3 ring-1 ring-slate-200">
      <p className="text-xs font-medium text-slate-500">
        {label}
      </p>

      <p className="mt-1 font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}

function SupportCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <Icon className="h-6 w-6 text-indigo-600" />

      <h3 className="mt-4 font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>
    </div>
  );
}

function Step({ number, title, description }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold">
        {number}
      </div>

      <div>
        <h3 className="font-bold">{title}</h3>

        <p className="mt-1 text-sm leading-6 text-white/65">
          {description}
        </p>
      </div>
    </div>
  );
}
