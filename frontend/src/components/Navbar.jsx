import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, GraduationCap, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function GoldButton({ children }) {
  return (
    <span className="group inline-flex items-center gap-3 rounded-full bg-[#B68A3A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#B68A3A]/20 transition hover:bg-[#a37932]">
      {children}

      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition group-hover:translate-x-0.5">
        <ArrowRight size={14} />
      </span>
    </span>
  );
}

const navigation = [
  {
    label: "Programmes",
    path: "/programmes",
  },
  {
    label: "Institutions",
    path: "/institutions",
  },
  {
    label: "Admissions",
    path: "/admissions",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "About Us",
    path: "/about",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/40 bg-white/90 px-4 py-3 shadow-xl shadow-[#082744]/5 backdrop-blur-xl md:px-6"
      >
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#082744] text-[#B68A3A]">
            <GraduationCap size={21} />
          </div>

          <div className="text-left">
            <div className="font-serif text-lg font-bold leading-none text-[#082744]">
              Union
            </div>

            <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#B68A3A]">
              College
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-[#082744]"
                    : "text-[#082744]/70 hover:text-[#082744]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/919088966666"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoldButton>Talk to an Advisor</GoldButton>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#082744] text-white lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 rounded-2xl border border-white/50 bg-white p-4 shadow-2xl lg:hidden"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                    isActive
                      ? "bg-[#F8F6F0] text-[#082744]"
                      : "text-[#082744] hover:bg-[#F8F6F0]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <a
              href="https://wa.me/919088966666"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 block"
            >
              <span className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#B68A3A] px-4 py-3 text-sm font-semibold text-white">
                Talk to an Advisor
                <ArrowRight size={15} />
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
