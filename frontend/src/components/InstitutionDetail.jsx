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
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import institutionData from "../data/institutionData";

function InfoSection({ icon: Icon, title, children }) {
  return (
    <section className="border-t border-[#082744]/10 py-10">
      <div className="flex gap-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#082744] text-[#B68A3A]">
          <Icon size={19} />
        </div>

        <div className="min-w-0">
          <h2 className="font-serif text-2xl font-semibold text-[#082744]">
            {title}
          </h2>

          <div className="mt-4 text-sm leading-7 text-[#082744]/65">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-[#082744]/8 bg-white p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F6F1] text-[#B68A3A]">
        <Icon size={18} />
      </div>

      <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#082744]/40">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-[#082744]">{value}</p>
    </div>
  );
}

export default function InstitutionDetail() {
  const { slug } = useParams();

  const institution = institutionData.find((item) => item.slug === slug);

  if (!institution) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8F6F1] px-6 pt-32">
        <div className="text-center">
          <Building2 size={48} className="mx-auto text-[#B68A3A]" />

          <h1 className="mt-6 font-serif text-4xl font-semibold text-[#082744]">
            Institution not found
          </h1>

          <p className="mt-4 text-[#082744]/60">
            The institution you are looking for does not exist.
          </p>

          <Link
            to="/institutions"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#082744] px-6 py-3 text-sm font-semibold text-white"
          >
            <ArrowLeft size={16} />
            Back to Institutions
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#F8F6F1] text-[#082744]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#082744] pt-36 md:pt-44">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#B68A3A]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8 md:pb-28">
          {/* Back */}
          <Link
            to="/institutions"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Institutions
          </Link>

          <div className="mt-10 grid items-end gap-12 lg:grid-cols-[1fr_0.85fr]">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B68A3A]/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#B68A3A]">
                <Building2 size={14} />
                Institution
              </div>

              <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
                {institution.name}
              </h1>

              <div className="mt-6 flex items-center gap-2 text-sm text-white/60">
                <MapPin size={16} />
                {institution.location}
              </div>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                {institution.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
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
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="overflow-hidden rounded-[2rem] border border-white/10"
            >
              <img
                src={institution.image}
                alt={institution.name}
                className="h-[380px] w-full object-cover md:h-[460px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick information */}
      <section className="relative z-10 -mt-8 px-6">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard
            icon={MapPin}
            label="Location"
            value={institution.location}
          />

          <InfoCard
            icon={BookOpen}
            label="Programmes"
            value={`${institution.programmes.length} available`}
          />

          <InfoCard
            icon={Clock3}
            label="Learning Modes"
            value={`${institution.learningModes.length} options`}
          />

          <InfoCard
            icon={ShieldCheck}
            label="Verification"
            value="View recognition details"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_350px] lg:px-8">
          {/* Left */}
          <div>
            {/* About */}
            <InfoSection icon={Building2} title="About the Institution">
              <p>{institution.about}</p>
            </InfoSection>

            {/* Programmes */}
            <div
              id="programmes"
              className="scroll-mt-32 border-t border-[#082744]/10 py-10"
            >
              <div className="flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#082744] text-[#B68A3A]">
                  <BookOpen size={19} />
                </div>

                <div className="w-full">
                  <h2 className="font-serif text-2xl font-semibold">
                    Associated Programmes
                  </h2>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {institution.programmes.map((programme) => (
                      <div
                        key={programme}
                        className="flex items-center gap-3 rounded-2xl border border-[#082744]/8 bg-white p-4"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F6F1] text-[#B68A3A]">
                          <Check size={15} />
                        </span>

                        <span className="text-sm font-medium">{programme}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Modes */}
            <InfoSection icon={GraduationCap} title="Learning Modes">
              <div className="flex flex-wrap gap-3">
                {institution.learningModes.map((mode) => (
                  <span
                    key={mode}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#082744]"
                  >
                    {mode}
                  </span>
                ))}
              </div>
            </InfoSection>

            {/* Recognition */}
            <InfoSection icon={ShieldCheck} title="Recognition / Approval">
              <p>{institution.recognition}</p>
            </InfoSection>

            {/* Admission */}
            <InfoSection icon={GraduationCap} title="Admission Details">
              <p>{institution.admission}</p>

              <div className="mt-6 space-y-3">
                {institution.admissionProcess.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 rounded-2xl bg-white p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#082744] text-xs font-bold text-white">
                      {index + 1}
                    </span>

                    <span className="pt-1 text-sm text-[#082744]/70">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </InfoSection>

            {/* Documents */}
            <InfoSection icon={FileText} title="Required Documents">
              <div className="space-y-3">
                {institution.documents.map((document) => (
                  <div key={document} className="flex items-center gap-3">
                    <Check size={16} className="shrink-0 text-[#B68A3A]" />

                    <span>{document}</span>
                  </div>
                ))}
              </div>
            </InfoSection>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-28 rounded-3xl bg-[#082744] p-7 text-white shadow-xl shadow-[#082744]/10">
              <Sparkles size={24} className="text-[#B68A3A]" />

              <h3 className="mt-5 font-serif text-3xl font-semibold">
                Need guidance?
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                Our advisors can help you understand programmes, eligibility and
                the relevant admission process.
              </p>

              <Link
                to="/contact"
                className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[#B68A3A] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#a37932]"
              >
                Talk to an Advisor
                <ArrowRight size={15} />
              </Link>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-xs leading-6 text-white/45">
                  Union College provides admissions support and guidance. The
                  relevant institution is responsible for admission decisions
                  and awarding the qualification.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#082744] px-8 py-16 text-center md:px-16">
          <h2 className="mx-auto max-w-3xl font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
            Ready to explore your options?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60">
            Speak with an advisor to understand your programme and institution
            options.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#B68A3A] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#a37932]"
          >
            Talk to an Advisor
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
