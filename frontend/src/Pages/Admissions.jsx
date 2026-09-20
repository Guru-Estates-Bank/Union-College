import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  FileCheck2,
  GraduationCap,
  MessageCircle,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Explore",
    description:
      "Explore programmes and institutions based on your academic interests, qualifications, and future plans.",
    icon: Search,
  },
  {
    number: "02",
    title: "Guidance",
    description:
      "Speak with an advisor to understand programme information, admission requirements, and your available options.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Select",
    description:
      "Review your options and select the programme and institution that align with your academic goals.",
    icon: Compass,
  },
  {
    number: "04",
    title: "Apply",
    description:
      "Move forward with the application process with guidance on the information and documents required.",
    icon: FileCheck2,
  },
];

const supportPoints = [
  "Understand programme and institution options",
  "Get clarity on admission information",
  "Understand required documents and next steps",
  "Receive guidance throughout your admission journey",
];

const Admissions = () => {
  return (
    <main className="bg-[#F8F6F0] text-[#082744]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#B68A3A]/10 blur-3xl" />
        <div className="absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-[#082744]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#B68A3A]" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B68A3A]">
                Admissions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Your Admission
              <span className="block text-[#B68A3A]">Journey, Simplified.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-2xl text-lg leading-8 text-[#082744]/70"
            >
              From exploring your options to understanding the next steps, Union
              College provides guidance to help you navigate your admission
              journey with greater clarity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#082744] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0D3557]"
              >
                Talk to an Advisor
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="border-y border-[#082744]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B68A3A]">
              The Process
            </p>

            <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
              Four simple steps
            </h2>

            <p className="mt-5 text-base leading-7 text-[#082744]/65">
              A clear path from discovering your options to moving forward with
              your application.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group relative rounded-3xl border border-[#082744]/10 bg-[#F8F6F0] p-7"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082744] text-white">
                      <Icon size={21} />
                    </div>

                    <span className="font-serif text-4xl text-[#B68A3A]/30">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-serif text-2xl">{step.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-[#082744]/65">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-[#B68A3A] text-white lg:flex">
                      <ArrowRight size={13} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guidance */}
      <section className="bg-[#082744] text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B68A3A]" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B68A3A]">
                Guidance
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Support when you
              <span className="block text-[#B68A3A]">need clarity.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              Choosing a programme and understanding the admission process can
              involve several decisions. Union College helps you understand your
              options and the information you need before taking the next step.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#B68A3A] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#a77b32]"
            >
              Talk to an Advisor
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-9"
          >
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B68A3A]">
              <GraduationCap size={25} />
            </div>

            <h3 className="font-serif text-2xl">How we can help</h3>

            <div className="mt-7 space-y-5">
              {supportPoints.map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#B68A3A]"
                  />

                  <p className="text-sm leading-6 text-white/70">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important responsibility note */}
      <section className="bg-[#F8F6F0]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-8 lg:py-24">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082744] text-white">
            <ShieldCheck size={25} />
          </div>

          <h2 className="mt-7 font-serif text-3xl sm:text-4xl">
            Clear guidance. Clear responsibilities.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#082744]/65 sm:text-base">
            Union College provides admissions support and guidance throughout
            your journey. Admission decisions and the awarding of qualifications
            are the responsibility of the relevant institution.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#B68A3A] px-7 py-12 text-center sm:px-12">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/20" />
            <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full border border-white/20" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Ready for your next step?
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl text-white sm:text-5xl">
                Let’s make your admission journey clearer.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/80">
                Speak with an advisor to understand your options and the next
                steps in your admission journey.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#082744] transition-all duration-300 hover:bg-[#F8F6F0]"
              >
                Talk to an Advisor
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admissions;
