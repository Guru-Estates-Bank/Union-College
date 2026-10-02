import React from "react";
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => (
  <main className="min-h-screen bg-[#F8F6F1] text-[#082744]">
    <section className="bg-[#082744] pt-36 pb-20 text-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"><ArrowLeft size={16} /> Back to Home</Link>
        <div className="flex items-center gap-3 text-[#B68A3A]"><FileText size={20} /><span className="text-xs font-semibold uppercase tracking-[0.2em]">Legal</span></div>
        <h1 className="mt-5 font-serif text-5xl font-semibold md:text-6xl">Terms & Conditions</h1>
        <p className="mt-5 max-w-2xl text-white/65">The basic terms governing use of the Union College website and its enquiry services.</p>
      </div>
    </section>
    <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <div className="space-y-10 rounded-3xl border border-[#082744]/10 bg-white p-7 shadow-sm md:p-10">
        <div><h2 className="text-2xl font-semibold">1. Website Use</h2><p className="mt-3 leading-8 text-[#082744]/65">You may use this website for lawful purposes, including exploring programmes, institutions and admission information. You must not misuse the website, interfere with its operation, or attempt unauthorised access.</p></div>
        <div><h2 className="text-2xl font-semibold">2. Programme Information</h2><p className="mt-3 leading-8 text-[#082744]/65">Programme names, fees, eligibility, duration, availability and admission requirements may change. Information shown on this website should be confirmed with the relevant institution before making an application or payment.</p></div>
        <div><h2 className="text-2xl font-semibold">3. Enquiries and Guidance</h2><p className="mt-3 leading-8 text-[#082744]/65">Submitting an enquiry does not guarantee admission, a scholarship, a seat, a particular fee, or acceptance by any institution. Final decisions remain with the relevant institution and applicant.</p></div>
        <div><h2 className="text-2xl font-semibold">4. Third-Party Websites</h2><p className="mt-3 leading-8 text-[#082744]/65">The website may link to external institutions, services or communication platforms. Union College is not responsible for the content, availability or policies of external websites.</p></div>
        <div><h2 className="text-2xl font-semibold">5. Intellectual Property</h2><p className="mt-3 leading-8 text-[#082744]/65">Unless otherwise stated, website text, branding, graphics and other original materials are intended for Union College's use and should not be copied or reproduced without permission.</p></div>
        <div><h2 className="text-2xl font-semibold">6. Availability</h2><p className="mt-3 leading-8 text-[#082744]/65">We may update, suspend or modify website features, content or services from time to time without prior notice.</p></div>
        <div><h2 className="text-2xl font-semibold">7. Contact</h2><p className="mt-3 leading-8 text-[#082744]/65">Questions about these terms can be submitted through the <Link className="font-semibold text-[#B68A3A]" to="/contact">Contact</Link> page.</p></div>
        <p className="border-t border-[#082744]/10 pt-6 text-xs leading-6 text-[#082744]/45">This page is a general website terms draft and should be reviewed and approved by the organisation's legal or compliance adviser before publication.</p>
      </div>
    </section>
  </main>
);

export default Terms;
