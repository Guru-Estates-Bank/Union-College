import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Compass, GraduationCap, Users } from "lucide-react";

const About = () => {
  return (
    <main className="bg-[#F8F6F1] text-[#082744] overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[80vh] flex items-center pt-28 pb-20">
        {/* Background decoration */}
        <div className="absolute top-20 right-[-120px] w-[420px] h-[420px] rounded-full bg-[#B68A3A]/10 blur-3xl" />

        <div className="absolute left-[-100px] bottom-[-100px] w-[350px] h-[350px] rounded-full bg-[#082744]/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-7">
                <span className="w-10 h-[1px] bg-[#B68A3A]" />

                <span className="text-xs tracking-[0.25em] uppercase font-semibold text-[#B68A3A]">
                  About Union College
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] mb-8">
                Education Choices,
                <br />
                <span className="text-[#B68A3A]">Made Clear.</span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl leading-relaxed text-[#082744]/65 max-w-xl mb-10">
                Union College helps learners explore programmes and
                institutions, understand essential admission information, and
                navigate their next academic step with guidance.
              </p>

              {/* CTA */}
              <motion.a
                href="/contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-7
                  py-4
                  rounded-full
                  bg-[#B68A3A]
                  text-white
                  font-semibold
                  shadow-lg
                  shadow-[#B68A3A]/20
                  hover:bg-[#9F752E]
                  transition
                "
              >
                Talk to an Advisor
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              {/* Main image */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1691962725086-d1590e379139?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Students walking across a university campus"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#082744]/50 via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="
                  absolute
                  -bottom-8
                  -left-8
                  bg-white
                  rounded-2xl
                  shadow-xl
                  p-5
                  w-[220px]
                "
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="
                    w-11
                    h-11
                    rounded-xl
                    bg-[#B68A3A]/10
                    flex
                    items-center
                    justify-center
                    text-[#B68A3A]
                  "
                  >
                    <Compass size={21} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#082744]/45">
                      Our Focus
                    </p>

                    <p className="font-semibold text-[#082744]">
                      Clear Choices
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-[#082744]/55">
                  Helping learners understand their options and next steps.
                </p>
              </motion.div>

              {/* Decorative gold circle */}
              <div
                className="
                absolute
                -top-8
                -right-8
                w-24
                h-24
                rounded-full
                border
                border-[#B68A3A]/40
              "
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR PURPOSE
      ========================================================= */}
      <section className="py-24 lg:py-32 bg-[#082744] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs tracking-[0.25em] uppercase text-[#B68A3A]">
                Our Purpose
              </span>

              <h2
                className="
                font-serif
                text-4xl
                md:text-5xl
                lg:text-6xl
                leading-tight
                mt-5
              "
              >
                Making the journey
                <br />
                <span className="text-[#B68A3A]">easier to navigate.</span>
              </h2>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <p
                className="
                text-xl
                md:text-2xl
                leading-relaxed
                text-white/70
                max-w-3xl
              "
              >
                From exploring programmes to understanding admission
                information, Union College provides a structured path for
                learners making their next academic decision.
              </p>
            </motion.div>
          </div>

          {/* VALUES */}
          <div
            className="
            grid
            md:grid-cols-3
            gap-6
            mt-20
          "
          >
            {[
              {
                icon: Compass,
                number: "01",
                title: "Explore",
                text: "Discover programmes and institutions that match your academic direction.",
              },
              {
                icon: GraduationCap,
                number: "02",
                title: "Understand",
                text: "Review essential programme and admission information clearly.",
              },
              {
                icon: Users,
                number: "03",
                title: "Navigate",
                text: "Get guidance as you move towards your next academic step.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="
                    group
                    border
                    border-white/10
                    rounded-2xl
                    p-7
                    hover:border-[#B68A3A]/50
                    hover:bg-white/[0.03]
                    transition
                  "
                >
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className="
                      w-12
                      h-12
                      rounded-xl
                      bg-[#B68A3A]/10
                      flex
                      items-center
                      justify-center
                      text-[#B68A3A]
                      group-hover:bg-[#B68A3A]
                      group-hover:text-white
                      transition
                    "
                    >
                      <Icon size={21} />
                    </div>

                    <span className="text-sm text-white/25">{item.number}</span>
                  </div>

                  <h3 className="font-serif text-2xl mb-3">{item.title}</h3>

                  <p className="text-white/50 leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          GUIDANCE SECTION
      ========================================================= */}
      <section id="why-union" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="
                aspect-[4/3]
                rounded-[2rem]
                overflow-hidden
              "
              >
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"
                  alt="Students discussing their education options"
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="
                absolute
                -bottom-6
                -right-6
                bg-[#B68A3A]
                text-white
                rounded-2xl
                p-6
                w-[190px]
                shadow-xl
              "
              >
                <Check size={22} className="mb-4" />

                <p className="font-serif text-xl leading-tight">
                  A structured path from exploration to application.
                </p>
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span
                className="
                text-xs
                tracking-[0.25em]
                uppercase
                font-semibold
                text-[#B68A3A]
              "
              >
                Why Union College
              </span>

              <h2
                className="
                font-serif
                text-4xl
                md:text-5xl
                leading-tight
                mt-5
                mb-7
              "
              >
                Clear information.
                <br />
                <span className="text-[#B68A3A]">Guided choices.</span>
              </h2>

              <p
                className="
                text-lg
                leading-relaxed
                text-[#082744]/60
                mb-8
                max-w-xl
              "
              >
                Education decisions can involve many programmes, institutions
                and admission requirements. Union College brings these steps
                together to help learners move forward with greater clarity.
              </p>

              <div className="space-y-4">
                {[
                  "Explore programmes and institutions",
                  "Understand essential admission information",
                  "Get guidance on your next academic step",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div
                      className="
                      w-8
                      h-8
                      rounded-full
                      bg-[#B68A3A]/10
                      flex
                      items-center
                      justify-center
                      text-[#B68A3A]
                      shrink-0
                    "
                    >
                      <Check size={16} />
                    </div>

                    <span className="text-[#082744]/75">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section id="advisor" className="py-24 lg:py-28 bg-[#B68A3A]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              className="
              text-xs
              tracking-[0.25em]
              uppercase
              font-semibold
              text-white/70
            "
            >
              Take the Next Step
            </span>

            <h2
              className="
              font-serif
              text-4xl
              md:text-5xl
              lg:text-6xl
              text-white
              mt-5
              mb-6
            "
            >
              Ready to explore your options?
            </h2>

            <p
              className="
              text-lg
              text-white/75
              max-w-2xl
              mx-auto
              mb-9
            "
            >
              Talk to an advisor and get guidance on your next academic step.
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="
                inline-flex
                items-center
                gap-3
                bg-[#082744]
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                hover:bg-[#061d32]
                transition
              "
            >
              Talk to an Advisor
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
