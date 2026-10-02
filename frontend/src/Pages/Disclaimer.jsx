import React from "react";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Disclaimer = () => (
  <main className="min-h-screen bg-[#F8F6F1] text-[#082744]">
    <section className="bg-[#082744] pt-36 pb-20 text-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"><ArrowLeft size={16} /> Back to Home</Link>
        <div className="flex items-center gap-3 text-[#B68A3A]"><AlertCircle size={20} /><span className="text-xs font-semibold uppercase tracking-[0.2em]">Legal</span></div>
        <h1 className="mt-5 font-serif text-5xl font-semibold md:text-6xl">Disclaimer</h1>
        <p className="mt-5 max-w-2xl text-white/65">Important information about programme listings, fees, admissions and third-party information.</p>
      </div>
    </section>
    <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <div className="space-y-10 rounded-3xl border border-[#082744]/10 bg-white p-7 shadow-sm md:p-10">
        <div><h2 className="text-2xl font-semibold">1. General Information</h2><p className="mt-3 leading-8 text-[#082744]/65">Union College provides educational information and guidance through this website. Content is intended for general informational purposes and does not constitute a guarantee of admission, employment, academic recognition or any particular outcome.</p></div>
        <div><h2 className="text-2xl font-semibold">2. Fees and Programme Details</h2><p className="mt-3 leading-8 text-[#082744]/65">Fees, programme structures, eligibility, duration, intakes and availability can change. The programme and fee material published by Union College should be treated as reference information and verified with the relevant institution before enrolment or payment.</p></div>
        <div><h2 className="text-2xl font-semibold">3. Institutional Decisions</h2><p className="mt-3 leading-8 text-[#082744]/65">The relevant educational institution determines admissions, eligibility, programme availability, academic requirements, fees and other institutional decisions. Union College does not control those final decisions.</p></div>
        <div><h2 className="text-2xl font-semibold">4. Third-Party Information</h2><p className="mt-3 leading-8 text-[#082744]/65">Links, names, logos and information relating to third-party institutions or services may appear on the website. Their inclusion does not by itself constitute a guarantee or endorsement of their services, and users should consult the relevant official source.</p></div>
        <div><h2 className="text-2xl font-semibold">5. Accuracy and Updates</h2><p className="mt-3 leading-8 text-[#082744]/65">Reasonable care may be taken to maintain website information, but errors, omissions or outdated information can occur. If you identify information that needs correction, please contact Union College.</p></div>
        <div><h2 className="text-2xl font-semibold">6. Contact</h2><p className="mt-3 leading-8 text-[#082744]/65">For clarification about information on the website, please use the <Link className="font-semibold text-[#B68A3A]" to="/contact">Contact</Link> page.</p></div>
        <p className="border-t border-[#082744]/10 pt-6 text-xs leading-6 text-[#082744]/45">This page is a general disclaimer draft and should be reviewed and approved by the organisation's legal or compliance adviser before publication.</p>
      </div>
    </section>
  </main>
);

export default Disclaimer;
