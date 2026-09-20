import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, MapPin, Search, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import institutionData from "../data/institutionData.js";

export default function Institutions() {
  const [search, setSearch] = useState("");

  const filteredInstitutions = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return institutionData;
    }

    return institutionData.filter((institution) => {
      return (
        institution.name.toLowerCase().includes(query) ||
        institution.location.toLowerCase().includes(query) ||
        institution.programmes.some((programme) =>
          programme.toLowerCase().includes(query),
        )
      );
    });
  }, [search]);

  return (
    <main className="bg-[#F8F6F1] text-[#082744]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#B68A3A]/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#082744]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B68A3A]/30 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B68A3A]"
            >
              <Building2 size={14} />
              Institutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
            >
              Explore
              <span className="text-[#B68A3A]"> Institutions.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 max-w-2xl text-lg leading-8 text-[#082744]/65"
            >
              Explore participating and listed institutions and discover the
              programmes associated with each institution.
            </motion.p>
          </div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 max-w-2xl"
          >
            <div className="relative">
              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#082744]/40"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search institutions or programmes..."
                className="w-full rounded-2xl border border-[#082744]/10 bg-white py-5 pl-14 pr-5 text-sm text-[#082744] outline-none transition placeholder:text-[#082744]/35 focus:border-[#B68A3A]/50 focus:ring-4 focus:ring-[#B68A3A]/10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Institutions */}
      <section className="border-t border-[#082744]/5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B68A3A]">
                Our Institutions
              </p>

              <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
                Find an institution
              </h2>
            </div>

            <div className="hidden text-sm text-[#082744]/50 md:block">
              {filteredInstitutions.length}{" "}
              {filteredInstitutions.length === 1
                ? "institution"
                : "institutions"}
            </div>
          </div>

          {filteredInstitutions.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredInstitutions.map((institution, index) => (
                <motion.article
                  key={institution.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group overflow-hidden rounded-3xl border border-[#082744]/8 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#082744]/10"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={institution.image}
                      alt={institution.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#082744]/70 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2 text-sm font-medium text-white">
                      <MapPin size={15} />
                      {institution.location}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#B68A3A]">
                      <Building2 size={14} />
                      Institution
                    </div>

                    <h3 className="font-serif text-2xl font-semibold leading-tight text-[#082744]">
                      {institution.name}
                    </h3>

                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#082744]/60">
                      {institution.description}
                    </p>

                    {/* Programmes */}
                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#082744]/40">
                        Programmes
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {institution.programmes.slice(0, 3).map((programme) => (
                          <span
                            key={programme}
                            className="rounded-full bg-[#F8F6F1] px-3 py-1.5 text-xs font-medium text-[#082744]/70"
                          >
                            {programme}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Link */}
                    <Link
                      to={`/institutions/${institution.slug}`}
                      className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#082744] transition hover:text-[#B68A3A]"
                    >
                      View Institution
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#082744] text-white transition group-hover:bg-[#B68A3A]">
                        <ArrowRight size={15} />
                      </span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-[#082744]/10 bg-white px-6 py-20 text-center">
              <Building2 size={40} className="mx-auto text-[#B68A3A]" />

              <h3 className="mt-5 font-serif text-2xl font-semibold">
                No institutions found
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#082744]/60">
                Try searching for a different institution or programme.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Advisor CTA */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#082744] px-8 py-16 text-center md:px-16 md:py-20">
          <Sparkles className="mx-auto text-[#B68A3A]" size={28} />

          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
            Need help choosing an institution?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60">
            Talk to an advisor for guidance on programmes, institutions and the
            next step in your admission journey.
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
