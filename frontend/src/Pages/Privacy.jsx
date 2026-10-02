import React from "react";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => (
  <main className="min-h-screen bg-[#F8F6F1] text-[#082744]">
    <section className="bg-[#082744] pt-36 pb-20 text-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <div className="flex items-center gap-3 text-[#B68A3A]">
          <ShieldCheck size={20} />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">Legal</span>
        </div>
        <h1 className="mt-5 font-serif text-5xl font-semibold md:text-6xl">Privacy Policy</h1>
        <p className="mt-5 max-w-2xl text-white/65">How Union College may collect, use and protect information provided through this website.</p>
      </div>
    </section>
    <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      <div className="space-y-10 rounded-3xl border border-[#082744]/10 bg-white p-7 shadow-sm md:p-10">
        <div><h2 className="text-2xl font-semibold">1. Information We Collect</h2><p className="mt-3 leading-8 text-[#082744]/65">When you contact Union College, enquire about a programme, or otherwise use our website, you may provide information such as your name, phone number, email address, city, educational background, programme interests and other details you choose to submit.</p></div>
        <div><h2 className="text-2xl font-semibold">2. How We Use Information</h2><p className="mt-3 leading-8 text-[#082744]/65">Information may be used to respond to enquiries, provide programme and admission guidance, communicate about relevant opportunities, improve our website and maintain enquiry records.</p></div>
        <div><h2 className="text-2xl font-semibold">3. Sharing of Information</h2><p className="mt-3 leading-8 text-[#082744]/65">We may share enquiry information with relevant educational institutions, service providers or partners where necessary to respond to your request or provide an admission-related service. We do not state that every enquiry will be shared; the scope depends on the service requested.</p></div>
        <div><h2 className="text-2xl font-semibold">4. Communications</h2><p className="mt-3 leading-8 text-[#082744]/65">By submitting an enquiry, you may be contacted by phone, email, WhatsApp or other communication channels regarding your request. You can ask us to stop non-essential communications.</p></div>
        <div><h2 className="text-2xl font-semibold">5. Cookies and Analytics</h2><p className="mt-3 leading-8 text-[#082744]/65">The website may use cookies or similar technologies for functionality, security, analytics and performance. Specific third-party tools, if enabled, may have their own privacy policies.</p></div>
        <div><h2 className="text-2xl font-semibold">6. Data Security</h2><p className="mt-3 leading-8 text-[#082744]/65">We take reasonable measures to protect information submitted through the website. No internet transmission or storage system can be guaranteed to be completely secure.</p></div>
        <div><h2 className="text-2xl font-semibold">7. Your Requests</h2><p className="mt-3 leading-8 text-[#082744]/65">You may contact us to request clarification about information you have submitted, correction of inaccurate information, or withdrawal from non-essential communications.</p></div>
        <div><h2 className="text-2xl font-semibold">8. Contact</h2><p className="mt-3 leading-8 text-[#082744]/65">For privacy-related questions, please use the <Link className="font-semibold text-[#B68A3A]" to="/contact">Contact</Link> page.</p></div>
        <p className="border-t border-[#082744]/10 pt-6 text-xs leading-6 text-[#082744]/45">This page is general website information and should be reviewed and approved by the organisation's legal or compliance adviser before publication.</p>
      </div>
    </section>
  </main>
);

export default Privacy;
