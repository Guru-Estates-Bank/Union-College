import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    qualification: "",
    programme: "",
    institution: "",
    cityState: "",
    message: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919088966666";

    const message = `
🎓 *New Student Enquiry*

Hello! I’m interested in exploring education opportunities and would like to speak with an advisor.

*Student Details*
━━━━━━━━━━━━━━━━
👤 Name: ${formData.name}
📱 Mobile: ${formData.mobile}
📧 Email: ${formData.email}
📍 Location: ${formData.cityState || "Not specified"}

*Academic Interests*
━━━━━━━━━━━━━━━━
🎓 Qualification: ${formData.qualification}
📚 Programme: ${formData.programme}
🏫 Preferred Institution: ${formData.institution || "Not specified"}

*Message*
━━━━━━━━━━━━━━━━
${formData.message || "I would like to know more about the available education options and admission process."}

I have agreed to be contacted regarding my enquiry and education options.

Thank you. I look forward to hearing from your admissions team. 🙏
  `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
  };
  return (
    <main className="bg-[#F8F6F1] text-[#082744] min-h-screen">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-[-150px] w-[450px] h-[450px] rounded-full bg-[#B68A3A]/10 blur-3xl" />

        <div className="absolute bottom-0 left-[-120px] w-[350px] h-[350px] rounded-full bg-[#082744]/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 items-start">
            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-32"
            >
              {/* Label */}
              <div className="flex items-center gap-3 mb-7">
                <span className="w-10 h-[1px] bg-[#B68A3A]" />

                <span className="text-xs tracking-[0.25em] uppercase font-semibold text-[#B68A3A]">
                  Talk to an Advisor
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] mb-8">
                Let's Find
                <br />
                Your <span className="text-[#B68A3A]">Next Step.</span>
              </h1>

              {/* Intro */}
              <p className="text-lg md:text-xl leading-relaxed text-[#082744]/65 max-w-xl mb-10">
                Share a few details about your academic interests and our team
                can guide you through relevant options.
              </p>

              {/* Contact info */}
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#082744] text-white flex items-center justify-center">
                    <Phone size={19} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#082744]/50 mb-1">
                      Speak with us
                    </p>

                    <p className="font-semibold">+91 9088966666</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#B68A3A]/10 text-[#B68A3A] flex items-center justify-center">
                    <Mail size={19} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#082744]/50 mb-1">
                      Your enquiry
                    </p>

                    <p className="font-semibold">
                      info@unioncollege.in
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =====================================================
                FORM
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-white rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-[0_20px_70px_rgba(8,39,68,0.08)] border border-[#082744]/5">
                {!submitted ? (
                  <form onSubmit={handleSubmit}>
                    {/* Form heading */}
                    <div className="mb-8">
                      <p className="text-xs tracking-[0.2em] uppercase text-[#B68A3A] font-semibold mb-3">
                        Your Details
                      </p>

                      <h2 className="font-serif text-3xl md:text-4xl">
                        Tell us a little about yourself
                      </h2>
                    </div>

                    {/* =================================================
                        NAME + MOBILE
                    ================================================= */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label">Name</label>

                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="form-input"
                        />
                      </div>

                      <div>
                        <label className="form-label">Mobile Number</label>

                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="Your mobile number"
                          required
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* =================================================
                        EMAIL
                    ================================================= */}
                    <div className="mt-5">
                      <label className="form-label">Email</label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="form-input"
                      />
                    </div>

                    {/* =================================================
                        QUALIFICATION + PROGRAMME
                    ================================================= */}
                    <div className="grid sm:grid-cols-2 gap-5 mt-5">
                      <div>
                        <label className="form-label">
                          Highest Qualification
                        </label>

                        <select
                          name="qualification"
                          value={formData.qualification}
                          onChange={handleChange}
                          required
                          className="form-input"
                        >
                          <option value="">Select qualification</option>

                          <option value="school">School / Class 12</option>

                          <option value="undergraduate">Undergraduate</option>

                          <option value="postgraduate">Postgraduate</option>

                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="form-label">Programme Interest</label>

                        <select
                          name="programme"
                          value={formData.programme}
                          onChange={handleChange}
                          required
                          className="form-input"
                        >
                          <option value="">Select programme</option>

                          <option value="business">
                            Business & Management
                          </option>

                          <option value="computer-science">
                            Computer Science
                          </option>

                          <option value="data-analytics">
                            Data & Analytics
                          </option>

                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* =================================================
                        INSTITUTION
                    ================================================= */}
                    <div className="mt-5">
                      <label className="form-label">
                        Preferred Institution
                      </label>

                      <select
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Select institution</option>

                        <option value="union-college">Union College</option>

                        <option value="partner-institution">
                          Partner Institution
                        </option>

                        <option value="academic-partner">
                          Academic Partner
                        </option>

                        <option value="global-institution">
                          Global Institution
                        </option>
                      </select>
                    </div>

                    {/* =================================================
                        CITY / STATE
                    ================================================= */}
                    <div className="mt-5">
                      <label className="form-label">City / State</label>

                      <input
                        type="text"
                        name="cityState"
                        value={formData.cityState}
                        onChange={handleChange}
                        placeholder="e.g. Delhi, India"
                        className="form-input"
                      />
                    </div>

                    {/* =================================================
                        MESSAGE
                    ================================================= */}
                    <div className="mt-5">
                      <label className="form-label">Message</label>

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us anything you'd like help with..."
                        rows={5}
                        className="form-input resize-none"
                      />
                    </div>

                    {/* =================================================
                        CONSENT
                    ================================================= */}
                    <div className="mt-6">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          required
                          className="mt-1 w-4 h-4 accent-[#B68A3A]"
                        />

                        <span className="text-sm leading-relaxed text-[#082744]/55">
                          I agree to be contacted regarding my enquiry and
                          education options.
                        </span>
                      </label>
                    </div>

                    {/* =================================================
                        SUBMIT
                    ================================================= */}
                    <button
                      type="submit"
                      className="
                        mt-8
                        w-full
                        flex
                        items-center
                        justify-center
                        gap-3
                        bg-[#B68A3A]
                        hover:bg-[#9F752E]
                        text-white
                        py-4
                        rounded-full
                        font-semibold
                        transition
                        shadow-lg
                        shadow-[#B68A3A]/20
                      "
                    >
                      Submit Enquiry
                      <ArrowRight size={18} />
                    </button>
                  </form>
                ) : (
                  /* =================================================
                     SUCCESS STATE
                  ================================================= */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center"
                  >
                    <div
                      className="
                      mx-auto
                      w-16
                      h-16
                      rounded-full
                      bg-[#B68A3A]/10
                      text-[#B68A3A]
                      flex
                      items-center
                      justify-center
                      mb-6
                    "
                    >
                      <Check size={30} />
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl mb-4">
                      Thank You.
                    </h2>

                    <p className="text-[#082744]/60 max-w-md mx-auto leading-relaxed">
                      Your enquiry has been received. Our team can review your
                      details and guide you through relevant options.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM TRUST SECTION
      ========================================================= */}
      <section className="border-t border-[#082744]/10 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3 text-[#082744]/60">
              <MapPin size={18} className="text-[#B68A3A]" />

              <span className="text-sm">
                Education options, guidance and next steps
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-[#082744]/45">
              <Send size={15} />

              <span>Submit your enquiry to get started</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TAILWIND CUSTOM CLASSES
      ========================================================= */}
      <style>{`
        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: #082744;
          margin-bottom: 0.5rem;
        }

        .form-input {
          width: 100%;
          border: 1px solid rgba(8, 39, 68, 0.12);
          background: #FAF9F6;
          border-radius: 0.85rem;
          padding: 0.85rem 1rem;
          color: #082744;
          outline: none;
          transition: all 0.2s ease;
        }

        .form-input::placeholder {
          color: rgba(8, 39, 68, 0.35);
        }

        .form-input:focus {
          border-color: #B68A3A;
          box-shadow: 0 0 0 3px rgba(182, 138, 58, 0.10);
          background: white;
        }
      `}</style>
    </main>
  );
};

export default Contact;
