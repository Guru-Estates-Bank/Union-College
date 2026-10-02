import React from "react";
import { GraduationCap, Globe2, MessageCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
const exploreLinks = [
  ["Programmes", "/programmes"],
  ["Institutions", "/institutions"],
  ["Why Union", "/about#why-union"],
  ["How It Works", "/admissions"],
];
const unionLinks = [
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Partners", "/institutions"],
  ["Careers", "/contact"],
];
export default function Footer() {
  return (
    <footer className="border-t border-[#082744]/10 bg-white px-6 py-14 lg:px-8">
      {" "}
      <div className="mx-auto max-w-7xl">
        {" "}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_.7fr_.7fr_.7fr]">
          {" "}
          {/* Brand */}{" "}
          <div>
            {" "}
            <Link to="/" className="flex items-center gap-3">
              {" "}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#082744] text-[#D2A755]">
                {" "}
                <GraduationCap size={22} />{" "}
              </div>{" "}
              <div>
                {" "}
                <div className="font-serif text-xl font-bold text-[#082744]">
                  {" "}
                  Union{" "}
                </div>{" "}
                <div className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#B68A3A]">
                  {" "}
                  College{" "}
                </div>{" "}
              </div>{" "}
            </Link>{" "}
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#082744]/50">
              {" "}
              B-120 A, Revenue Estate Village of Khushrupur, Vishnu Garden,
              Keshav Kunj, Sector-105, Dwarka Expressway, 122001 <br />{" "}
              +919088966666{" "}
            </p>{" "}
            <div className="mt-6 flex gap-3">
              {" "}
              <a
                href="/"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#082744]/10 text-[#082744]/60 transition hover:border-[#B68A3A] hover:text-[#B68A3A]"
                aria-label="Website"
              >
                {" "}
                <Globe2 size={16} />{" "}
              </a>{" "}
              <a
                href="https://wa.me/919088966666"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#082744]/10 text-[#082744]/60 transition hover:border-[#B68A3A] hover:text-[#B68A3A]"
                aria-label="WhatsApp"
              >
                {" "}
                <MessageCircle size={16} />{" "}
              </a>{" "}
              <a
                href="/contact"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#082744]/10 text-[#082744]/60 transition hover:border-[#B68A3A] hover:text-[#B68A3A]"
                aria-label="Contact"
              >
                {" "}
                <MapPin size={16} />{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          {/* Explore */}{" "}
          <div>
            {" "}
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#082744]">
              {" "}
              Explore{" "}
            </h4>{" "}
            <div className="mt-5 space-y-3">
              {" "}
              {exploreLinks.map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="block text-sm text-[#082744]/50 transition hover:text-[#082744]"
                >
                  {" "}
                  {label}{" "}
                </Link>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          {/* Union */}{" "}
          <div>
            {" "}
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#082744]">
              {" "}
              Union{" "}
            </h4>{" "}
            <div className="mt-5 space-y-3">
              {" "}
              {unionLinks.map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="block text-sm text-[#082744]/50 transition hover:text-[#082744]"
                >
                  {" "}
                  {label}{" "}
                </Link>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          {/* Connect */}{" "}
          <div>
            {" "}
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#082744]">
              {" "}
              Connect{" "}
            </h4>{" "}
            <div className="mt-5 space-y-3 text-sm text-[#082744]/50">
              {" "}
              <Link
                to="/contact"
                className="block transition hover:text-[#082744]"
              >
                {" "}
                Speak with an advisor{" "}
              </Link>{" "}
              <Link
                to="/programmes"
                className="block transition hover:text-[#082744]"
              >
                {" "}
                Explore opportunities{" "}
              </Link>{" "}
              <Link
                to="/contact"
                className="block transition hover:text-[#082744]"
              >
                {" "}
                Start your journey{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Bottom */}{" "}
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-[#082744]/8 pt-7 text-xs text-[#082744]/40 md:flex-row">
          {" "}
          <p>
            {" "}
            © {new Date().getFullYear()} Union College. All rights
            reserved.{" "}
          </p>{" "}
          <div className="flex gap-5">
            {" "}
            <Link to="/privacy" className="transition hover:text-[#082744]">Privacy</Link>{" "}
            <Link to="/terms" className="transition hover:text-[#082744]">Terms</Link>{" "}
            <Link to="/disclaimer" className="transition hover:text-[#082744]">Disclaimer</Link>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
