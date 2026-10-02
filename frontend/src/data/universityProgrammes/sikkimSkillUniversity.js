const source = "Union College Programme & Fee Structure";
const academicYear = "2026-27";
const institutionName = "Sikkim Skill University";
const location = "South Sikkim, India";

const splitProgrammeName = (value) => {
  const dashIndex = value.indexOf(" — ");

  if (dashIndex > 0) {
    return {
      programme: value.slice(0, dashIndex).trim(),
      specialisation: value.slice(dashIndex + 3).trim(),
    };
  }

  // Only split "in" when the text before it is clearly a degree/title
  // or when the remainder is a list. This keeps titles such as
  // "Bachelor in Public Health" intact.
  const inIndex = value.indexOf(" in ");
  if (inIndex > 0) {
    const base = value.slice(0, inIndex).trim();
    const remainder = value.slice(inIndex + 4).trim();

    if (
      base.endsWith(")") ||
      remainder.includes(",") ||
      base === "Diploma" ||
      base === "Advanced Diploma" ||
      base === "Post Graduate Diploma" ||
      base === "Certificate Course" ||
      base === "M.Tech" ||
      base === "BA/B.Sc" ||
      base === "MA/M.Sc"
    ) {
      return {
        programme: base,
        specialisation: remainder,
      };
    }
  }

  // BBA-style records contain the specialisations inside one parenthesis.
  const parentheticalList = value.match(/^(.+?)\\s+\\(([^)]+\\/[^)]+)\\)$/);
  if (parentheticalList) {
    return {
      programme: parentheticalList[1].trim(),
      specialisation: parentheticalList[2].trim(),
    };
  }

  return {
    programme: value.trim(),
    specialisation: "",
  };
};

const makeProgramme = (
  id,
  faculty,
  programme,
  duration,
  studyPattern,
  eligibility,
  tuitionFeeYearly,
  totalStudentFee,
) => {
  const parsed = splitProgrammeName(programme);

  return {
    id: `ssu-${id}`,
    institutionSlug: "sikkim-skill-university",
    institutionName,
    location,
    faculty,
    programme: parsed.programme,
    specialisation: parsed.specialisation,
    sourceProgramme: programme,
    duration: String(duration),
    studyPattern,
    eligibility,
    tuitionFeeYearly,
    totalStudentFee,
    academicYear,
    source,
  };
};

const sikkimSkillUniversityProgrammes = [
  // FACULTY OF COMMERCE AND MANAGEMENT
  makeProgramme("commerce-01","Commerce & Management","Bachelor of Commerce",3,"6 Semester","XII from recognized",17000,51000),
  makeProgramme("commerce-02","Commerce & Management","B.Com. (Honors), B.Com. (Honors with Research) Commerce",4,"8 Semester","10+2 (Higher Secondary) from a recognized board",20000,80000),
  makeProgramme("commerce-03","Commerce & Management","Master of Commerce (M.Com)",2,"4 Semester","Graduation with minimum 45% marks in Economics/Statistics/Mathematics/Commerce/Accounts as a subject",20000,40000),
  makeProgramme("commerce-04","Commerce & Management","Master of Commerce (M.Com) Commerce",1,"2 Semester","NHEQF Level 6 Certification in Commerce or equivalent",25000,25000),
  makeProgramme("commerce-05","Commerce & Management","Master of Business Administration (MBA) — Supply Chain Management, Event Management, Fire And Safety Management, Hospital and Health Care Management, Hotel Management, Agribusiness Management, Aviation Management, Advertising Management, Banking & Finance, E-Commerce Management, Finance, Human Resources Management, Information Technology, International Business, Marketing Management, Operations Management, Production Management, Project Management, Digital",2,"4 Semester","Bachelor Degree in any discipline with 45% or equivalent grades",45000,90000),
  makeProgramme("commerce-06","Commerce & Management","Master of Business Administration (MBA) — Marketing, Finance, Human Resource Management",1,"2 Semester","NHEQF Level 6 Certification in Management, PGDBM or equivalent",60000,60000),
  makeProgramme("commerce-07","Commerce & Management","Executive – Master of Business Administration (E-MBA) – Marketing, Finance, Human Resource Management, International Business, Digital Marketing, Supply Chain Management, E-Commerce, Retail Management, Hospitality Management, Tourism Management, Event Management, Healthcare Management, Operations Management, Banking and Insurance, Information Technology, Sports Management, Aviation Management, Agri-Business Management, Real Estate Management, Banking and Finance, Pharmaceutical Management, Project Management, Strategic Management, Quality Management, Rural Management, Transport Management, Media and Entertainment Management, Taxation, Risk Management, Production Management, Disaster Management, Sustainability Management, Fire and…",1,"2 Semester","Bachelor Degree",70000,70000),
  makeProgramme("commerce-08","Commerce & Management","Bachelor of Business Administration (General/Advertising & Marketing, Banking and Finance, Aviation Management, Tourism & Event Management, Human Resources Management, Finance Management, Marketing Management, Hospital & Health Care Management)",3,"6 Semester","XII from recognized board",33000,99000),
  makeProgramme("commerce-09","Commerce & Management","Bachelor of Business Administration (BBA) (NEP) General",4,"8 Semester","XII from recognized",35000,140000),
  makeProgramme("commerce-10","Commerce & Management","B.B.A. (Honors), B.B.A. (Honors with Research) General",3,"6 Semester","XII from recognized",30000,90000),
  makeProgramme("commerce-11","Commerce & Management","Post Graduation Diploma in Supply Chain Management, Event Management, Hospital and Health Care Management, Agribusiness Management, Aviation Management, Advertising Management, Finance, Human Resources Management, Information Technology, International Business, Marketing Management, Operations Management, Pharmaceutical Management, Production Management, Project Management, Retail Management, Digital Marketing Management",1,"2 Semester","Bachelor Degree with minimum 45% marks or equivalent grades",45000,45000),
  makeProgramme("commerce-12","Commerce & Management","Diploma in Supply Chain Management, Hospital Management, Event Management, Fire And Safety Management, Taxation, Accounting & Finance, Cost Accounting, Finance, Human Resource, Insurance & Risk Management, International Business, Marketing Management, Operations Management, Hotel",2,"4 Semester","XII from recognized board",30000,60000),

  // FACULTY OF HOSPITALITY AND TOURISM MANAGEMENT
  makeProgramme("hospitality-01","Hospitality & Tourism Management","Bachelor of Hotel Management and Catering Technology (BHMCT)",4,"8 Semester","XII from recognized board",38000,152000),
  makeProgramme("hospitality-02","Hospitality & Tourism Management","Bachelor of Science (Hotel and Hospitality Management)",3,"6 Semester","XII from recognized board",30000,90000),
  makeProgramme("hospitality-03","Hospitality & Tourism Management","Master of Business Administration (MBA) Tourism And Hospitality Management / Tourism And Travel Management",2,"4 Semester","Bachelor degree in any discipline with atleast 45% marks in aggregate from recognised University/Institution",40000,80000),
  makeProgramme("hospitality-04","Hospitality & Tourism Management","Post Graduate Diploma in Hotel Management",1,"2 Semester","Bachelor degree in any discipline with atleast 45% marks in aggregate from recognised University/Institution",22000,22000),
  makeProgramme("hospitality-05","Hospitality & Tourism Management","Diploma in Hotel Management & Catering Technology",1,"2 Semester","XII from recognized",20000,20000),
  makeProgramme("hospitality-06","Hospitality & Tourism Management","Diploma in Hotel Management & Catering Technology",3,"6 Semester","Xth from recognized board",24000,72000),

  // FACULTY OF SCIENCE
  makeProgramme("science-01","Science","Master of Science (M.Sc.) in Physics, Chemistry - Organic, Chemistry - inorganic, Chemistry - Physical, Chemistry - Analytical, Mathematics, Zoology, Botany",2,"4 Semester","Bachelor Degree in Relevant Field / B.Sc(Hons) in Relevant Stream / B.Sc - PCM, PCB / B.E/ B.Tech",28000,56000),
  makeProgramme("science-02","Science","M.Sc. Physics, Chemistry, Mathematics, Zoology, Botany, Microbiology, Environmental Science, Yoga, Computer Science, Information Technology, Home Science, Food and Nutrition, Biotechnology, Biochemistry, Biological Science, Statistics",1,"2 Semester","NHEQF Level 6 Certification in relevant stream or equivalent",30000,30000),
  makeProgramme("science-03","Science","Bachelor of Science (B.Sc.) in Physics, Chemistry & Math’s (PCM): Physics, Chemistry & Biology (PCB): Zoology, Botany, Chemistry (ZBC)",3,"6 Semester","XII (Science) from recognized board",22000,66000),
  makeProgramme("science-04","Science","B.Sc. (Honours), B.Sc. (Honours with Research) Statistics, Electronics, Fire Safety & Hazard Management (FSHM), Automobile, Physics, Mathematics, Environmental Science, Food & Nutrition, Chemistry, Microbiology, Bio Science, Biochemistry, Geology, Botany, Zoology, Bio-Science",4,"8 Semester","12th with Science- Relevant from recognized board",25000,100000),
  makeProgramme("science-05","Science","Bachelor of Science (Hons) in Microbiology, Biological Science, Biochemistry, Food & Nutrition, Environmental Science, Statistics, Electronic Science, and Home Science.",3,"6 Semester","XII (Science) from recognized board",25000,75000),

  // FACULTY OF FINE ARTS
  makeProgramme("fine-arts-01","Fine Arts","Bachelor of Arts (B.A) Fine Arts, Music, Dance",3,"6 Semester","XII from recognized",18000,54000),
  makeProgramme("fine-arts-02","Fine Arts","Master of Arts (M.A) Fine Arts, Music, Dance",2,"4 Semester","Bachelor Degree in relevant Stream with minimum 45% marks or equivalent grades",20000,40000),
  makeProgramme("fine-arts-03","Fine Arts","Bachelor of Fine Arts (BFA) in Painting, Textile Design, Interior Design",4,"8 Semester","XII from recognized board",25000,100000),
  makeProgramme("fine-arts-04","Fine Arts","Master of Fine Arts (MFA) in Painting, Textile Design, Interior Design",2,"4 Semester","BFA in Relevant Stream",35000,70000),

  // FACULTY OF ARTS, HUMANITIES AND SOCIAL SCIENCES
  makeProgramme("arts-01","Arts, Humanities & Social Sciences","Bachelor of Arts (B.A) General",3,"6 Semester","XII from recognized",17000,51000),
  makeProgramme("arts-02","Arts, Humanities & Social Sciences","Bachelor in Arts (Hons.) BA (Hons. With Research) in Philosophy, Psychology, Sanskrit, Public Administration, Political Science, Mathematics, Social Science, Sociology, Political Science, Economics, English, Geography, Hindi, History, Home Science, ..etc",4,"8 Semester","XII from recognized board",17000,68000),
  makeProgramme("arts-03","Arts, Humanities & Social Sciences","Master of Arts (M.A) in Philosophy, Psychology, Sanskrit, Public Administration, Political Science, Mathematics, Social Science, Sociology, Political Science, Economics, English, Geography, Hindi, History, Home Science, ..etc",2,"4 Semester","Bachelor Degree in relevant stream with minimum 45% marks or equivalent grades",17000,34000),
  makeProgramme("arts-04","Arts, Humanities & Social Sciences","MA (Master of Arts) English, Hindi, Sanskrit, Sociology, History, Political Science, Philosophy, Psychology, Economics, Public Administration, Geography, Rural Development, Visual Arts, Fine Arts, Home",1,"2 Semester","NHEQF Level 6 Certification in relevant stream or equivalent",17000,17000),
  makeProgramme("arts-05","Arts, Humanities & Social Sciences","Bachelor of Social Work (BSW)",3,"6 Semester","XII from recognized",19000,57000),
  makeProgramme("arts-06","Arts, Humanities & Social Sciences","B.S.W. (Honors), B.S.W. (Honors with Research) Social Work",4,"8 Semester","10+2 (Higher Secondary) from a recognized board",19000,76000),
  makeProgramme("arts-07","Arts, Humanities & Social Sciences","Master of Social Work (MSW)",2,"4 Semester","BSW / B.A. - Sociology",20000,40000),
  makeProgramme("arts-08","Arts, Humanities & Social Sciences","MSW Social Work",1,"2 Semester","NHEQF Level 6 Certification in relevant stream or equivalent",20000,20000),

  // FACULTY OF LIBRARY AND INFORMATION SCIENCE
  makeProgramme("library-01","Library & Information Science","Diploma in Library & Information Sciences (D. Lis.I.Sc)",1,"2 Semester","XIIth from recognized board",20000,20000),
  makeProgramme("library-02","Library & Information Science","Bachelor of Library & Information Sciences (B. Lis.I.Sc)",1,"2 Semester","Any Bachelor Degree with minimum 45% marks or equivalent grades",30000,30000),
  makeProgramme("library-03","Library & Information Science","Master of Library & Information Sciences (M. Lis.I.Sc)",1,"2 Semester","B. Lib.I.Sc / B.Lis.I.Sc",30000,30000),

  // FACULTY OF COMPUTING AND INFORMATION TECHNOLOGY
  makeProgramme("computing-01","Computing & Information Technology","Master of Computer Application (MCA)",2,"4 Semester","A Candidate shall have passed the qualifying exam of B.C./B.Sc (computer science) / B.Sc (I.T) / B.E (CSE) / B.Tech (CSE) / B.E (I.T) / B.Tech (IT) or equivalent Degree or passed any graduation degree (e.g.: B.E / B.Tech / B.Sc / B.Com / B.A / B.Voc etc), preferably with maths, business-maths or statistics at 10+2 level or…",40000,80000),
  makeProgramme("computing-02","Computing & Information Technology","M.C.A. General",1,"2 Semester","NHEQF Level 6 Certification in Computer Science or equivalent",40000,40000),
  makeProgramme("computing-03","Computing & Information Technology","Master of Science (M.Sc.) in IT, Computer Science",2,"4 Semester","B. Tech, B.Sc. (I.T, CS), PGDCA, BCA",34000,68000),
  makeProgramme("computing-04","Computing & Information Technology","Bachelor of Computer Application (BCA)",3,"6 Semester","XII from recognized",30000,90000),
  makeProgramme("computing-05","Computing & Information Technology","B.C.A. (Honors), B.C.A. (Honors with Research) General",4,"8 Semester","12th with Maths or Equivalent",34000,136000),
  makeProgramme("computing-06","Computing & Information Technology","Bachelor of Science (Hons.) in Computer Science, Information Technology, and Artificial Intelligence.",3,"6 Semester","XII with min. 45% marks or equivalent grades",28000,84000),
  makeProgramme("computing-07","Computing & Information Technology","PG Diploma in Computer Science, Technology, Computer Application, and Artificial",1,"2 Semester","Bachelor Degree in relevant stream",35000,35000),
  makeProgramme("computing-08","Computing & Information Technology","Diploma in Computer Application, Web Designing, Hardware & Networking, Software Testing, Radio Mechanic, Wireless Operator...etc",1,"2 Semester","XII from recognized board",25000,25000),

  // FACULTY OF ENGINEERING AND TECHNOLOGY
  makeProgramme("engineering-01","Engineering & Technology","M.Tech in Civil Engineering with specialization in Structural Engineering and Construction Management. M.Tech. (CSE-Networking & Cyber Security, Software Engineering, Data Science) M.Tech. (Electronics & Communication Engineering)- Digital Communication, Industrial Automation. M.Tech. (M.E)- Machine Design, Production & Industrial Engineering. Master of Technology (Biotechnology)",2,"4 Semester","B. Tech/ B.E or M. Sc. In relevant field",80000,160000),
  makeProgramme("engineering-02","Engineering & Technology","Bachelor of Technology (B. Tech) in Bio-Technology, Civil, Mechanical, Computer Science Engineering, Electricals & Electronics, Electronics & Communication, Agricultural",4,"8 Semester","ITI OR XII OR Diploma In Engineering In Relevant Stream.",65000,260000),
  makeProgramme("engineering-03","Engineering & Technology","Bachelor of Technology (B. Tech) LE in Bio-Technology, Civil, Mechanical, Computer Science Engineering, Electricals & Electronics, Electronics & Communication, Agricultural ,..etc",3,"6 Semester","D.voc/ Diploma (3 year after 10/ 2 year after 12)/ B.Sc (Mathematics as a Subject in 12th)/ Any other qualification as per AICTE.",65000,195000),
  makeProgramme("engineering-04","Engineering & Technology","Diploma in Biotechnology, Civil, Chemical Engineering, Civil Engineering, Electrical Engineering, Electricals & Electronics Engineering, Electronics & Communication Engineering, Mechanical Engineering, Mining",3,"6 Semester","Xth from recognized board",35000,105000),
  makeProgramme("engineering-05","Engineering & Technology","Diploma (Lateral entry to III Semester) in Biotechnology, Civil, Chemical Engineering, Civil Engineering, Electrical Engineering, Electrical & Electronics Engineering, Electronics & Communication Engineering, Mechanical Engineering, Mining Engineering...etc",2,"4 Semester","XII (PCM) OR 2 Years ITI From NCVT Recognized Institution.",35000,70000),
  makeProgramme("engineering-06","Engineering & Technology","Certificate Course in Mechanic - Diesel, Electrician, Fitter, Radio...etc",1,"2 Semester","Xth from recognized board",20000,20000),

  // FACULTY OF PHARMACEUTICAL SCIENCES
  makeProgramme("pharma-01","Pharmaceutical Sciences","Diploma in Pharmacy (D.Pharmacy)",2,"2 Years","XII with PCM/ PCB With 45% equivalent grades.",120000,240000),
  makeProgramme("pharma-02","Pharmaceutical Sciences","Bachelor in Pharmacy (B.Pharmacy)*",4,"8 Semester","XII with Science from recognized board",100000,400000),

  // FACULTY OF PARAMEDICAL SCIENCES
  makeProgramme("paramedical-01","Paramedical Sciences","Bachelor in Public Health (BPH)",4,"4 Years","XII with Science from recognized board",48000,192000),
  makeProgramme("paramedical-02","Paramedical Sciences","Master in Public Health (MPH)",2,"4 Semester","BPH/ BDS/ BPT/ MBBS/ BNYS/ BAMS/ BHMS/ BSMS/ BUMS or any other equivalent",58000,116000),
  makeProgramme("paramedical-03","Paramedical Sciences","Bachelor in Medical Lab Technology (BMLT)",3,"6 Semester","XII with Biology from recognized board",40000,120000),
  makeProgramme("paramedical-04","Paramedical Sciences","Multipurpose Health Workers (MPHW)",2,"4 Semester","XII with Biology from recognized board",58000,116000),
  makeProgramme("paramedical-05","Paramedical Sciences","Bachelor of Physiotherapy (BPT)",4.5,"8 Semester + 6 months Internship","XII with Biology from recognized board",60000,270000),
  makeProgramme("paramedical-06","Paramedical Sciences","Bachelor of Physiotherapy- LE (BPT-LE)",3.5,"6 Semester + 6 months Internship","XII with 2 Years DPT",58000,203000),
  makeProgramme("paramedical-07","Paramedical Sciences","Diploma in Community Medical Service and Essential Drugs (CMS & ED)",1.5,"18 months (3 semester)","Xth from recognized board",60000,null),
  makeProgramme("paramedical-08","Paramedical Sciences","Master of Science in Dialysis Technician, ECG Technician, Medical Lab Technology (MLT), Multipurpose Health Worker, Operation Theater Technology (OTT), X-Ray Technician, CT Scan Technician, Radiology & Imaginary Technology (RIT), Cardiac Care Technology",2,"4 Semester","B.Sc. in relevant stream.",40000,80000),
  makeProgramme("paramedical-09","Paramedical Sciences","Bachelor of Science in Dialysis Technician, ECG Technician, Medical Lab Technology (MLT), Multipurpose Health Worker, Operation Theater Technology (OTT), X-Ray Technician, CT Scan Technician, Radiology & Imaginary Technology (RIT), Cardiac Care Technology",3,"6 Semester","XII with Biology from recognized board",40000,120000),
  makeProgramme("paramedical-10","Paramedical Sciences","PG Diploma in Dialysis Technician, ECG Technician, Medical Lab Technology (MLT), Multipurpose Health Worker, Operation Theater Technology (OTT), X-Ray Technician, CT Scan Technician, Radiology & Imaginary Technology (RIT), Cardiac Care Technology, Maternal And…",1,"2 Semester","Graduation in relevant stream",65000,65000),
  makeProgramme("paramedical-11","Paramedical Sciences","Diploma in Dental Technician & Hygiene, Dialysis Technician, ECG Technician, Medical Lab Technology (MLT), Multipurpose Health Worker, Operation Theater Technology (OTT), X-Ray Technician, CT Scan Technician, Radiology & Imaginary Technology (RIT), Cardiac Care Technology, Physiotherapy, EEG Technician, Medical…",2,"4 Semester","XII with Science from recognized board",35000,70000),
  makeProgramme("paramedical-12","Paramedical Sciences","Certificate Courses in Dental Technician & Hygiene, Dialysis Technician, ECG Technician, Medical Lab Technology (MLT), Multipurpose Health Worker, Operation Theater Technology (OTT), X-Ray Technician, CT Scan Technician, Radiology & Imaginary Technology (RIT), Cardiac Care Technology, Physiotherapy, EEG Technician, Pharmacy Assistant, Medical Dresser, Naturopathy And…",1,"2 Semester","Xth from recognized board",30000,30000),

  // FACULTY OF YOGA
  makeProgramme("yoga-01","Yoga","Bachelor of Naturopathy and Yogic Sciences (BNYS)",4.5,"4.5 Years + 1 Year Internship","XII with Biology from recognized board",50000,225000),
  makeProgramme("yoga-02","Yoga","Bachelor of Naturopathy and Yogic Sciences (BNYS-LE)",3,"3 Years + 1 Year Internship","XII with 2 Years DNYS",50000,150000),
  makeProgramme("yoga-03","Yoga","Diploma in Naturopathy & Yogic Sciences (DNYS)",2,"4 Semester","XII from recognized",32000,64000),
  makeProgramme("yoga-04","Yoga","BA/B.Sc in Yoga",3,"6 Semester","XII from recognized",22000,66000),
  makeProgramme("yoga-05","Yoga","MA/M.Sc in Yoga",2,"4 Semester","Bachelor Degree in any discipline with minimum 45% or equivalent",22000,44000),
  makeProgramme("yoga-06","Yoga","Post Graduate Diploma in - Yoga",1,"2 Semester","Bachelor Degree in any discipline with minimum 45% or equivalent",35000,35000),

  // FACULTY OF AGRICULTURAL SCIENCES AND ALLIED INDUSTRIES
  makeProgramme("agri-01","Agricultural Sciences & Allied Industries","Master of Science (M.Sc.- Agriculture) in Agronomy, Horticulture",2,"4 Semester","B.SC (Agri) With relevant degree.",38000,76000),
  makeProgramme("agri-02","Agricultural Sciences & Allied Industries","Bachelor of Science (B.Sc.) in Agronomy, Horticulture, Agriculture, Food Science",4,"8 Semester","XII (Science) from recognized board",35000,140000),
  makeProgramme("agri-03","Agricultural Sciences & Allied Industries","Diploma in Agronomy, Horticulture, Dairy Technology, Food Science",2,"4 Semester","XII with PCB from recognized board",30000,60000),

  // FACULTY OF JOURNALISM AND MASS COMMUNICATION
  makeProgramme("journalism-01","Journalism & Mass Communication","Master of Arts (M.A) in Journalism and Mass Communication",2,"4 Semester","Bachelor Degree in any discipline with minimum 45% or equivalent",28000,56000),
  makeProgramme("journalism-02","Journalism & Mass Communication","MA { Master of Arts } Journalism and Mass Communication",1,"2 Semester","NHEQF Level 6 Certification in Journalism or equivalent",30000,30000),
  makeProgramme("journalism-03","Journalism & Mass Communication","Bachelor of Arts (B.A) in Journalism and Mass Communication",3,"6 Semester","XII from recognized",26000,78000),
  makeProgramme("journalism-04","Journalism & Mass Communication","B.A. (Honors), B.A. (Honors with Research) Journalism and Mass Communication",4,"8 Semester","10+2 (Higher Secondary) from a recognized board",30000,120000),
  makeProgramme("journalism-05","Journalism & Mass Communication","Post Graduate Diploma in Journalism and Mass Communication",1,"2 Semester","Bachelor Degree in any discipline with minimum 45% or…",28000,28000),

  // FACULTY OF ANIMATION, DESIGN AND PERFORMANCE
  makeProgramme("animation-01","Animation, Design & Performance","Diploma in Animation, Graphics and Web Designing, Fashion & Apparel Design",2,"4 Semester","XII from recognized board",20000,40000),
  makeProgramme("animation-02","Animation, Design & Performance","Bachelor of Science in Animation, Graphics and Web Designing",3,"6 Semester","XII from recognized board",26000,78000),
  makeProgramme("animation-03","Animation, Design & Performance","Master of Science in Animation, Graphics and Web Designing",2,"4 Semester","Bachelor Degree in relevant stream",40000,80000),
  makeProgramme("animation-04","Animation, Design & Performance","Post Graduate Diploma in Animation, Graphics and Web Designing",1,"2 Semester","Bachelor Degree in relevant stream",35000,35000),
  makeProgramme("animation-05","Animation, Design & Performance","Bachelor of Design (B.Des) in Animation",4,"8 Semester","XII from recognized",45000,180000),
  makeProgramme("animation-06","Animation, Design & Performance","Master of Design (M.Des) in Animation",2,"4 Semester","Bachelor Degree in relevant stream",55000,110000),

  // FACULTY OF EDUCATION
  makeProgramme("education-01","Education","Master of Arts (M.A) in Education",2,"4 Semester","Bachelor Degree in Education (B.A - Education/ B.Ed/ B.Sc-B.Ed) any other relevant degree 3-5 Years degree in education with minimum 45% or",30000,60000),
  makeProgramme("education-02","Education","MA (Master of Arts) Education",1,"2 Semesters","NHEQF Level 6 Certification in Education or equivalent",35000,35000),
  makeProgramme("education-03","Education","B.A. (Honors), B.A. (Honors with Research) Education",4,"8 Semester","10+2 (Higher Secondary) from a recognized board",25000,100000),
  makeProgramme("education-04","Education","Bachelor of Arts (B.A) in Physical Education",3,"6 Semester","XII from recognized",30000,90000),
  makeProgramme("education-05","Education","Master of Arts (M.A) in Physical Education",2,"4 Semester","BP.ED/BAPE/BPES/ or any graduation in relevant stream",40000,80000),
  makeProgramme("education-06","Education","Bachelor of Physical Education & Sports (BPES)",3,"6 Semester","XII from recognized",30000,90000),
  makeProgramme("education-07","Education","B.P.E.S. (Honors), B.P.E.S. (Honors with Research) Physical Education and SPORTS",4,"8 Semester","10+2 (Higher Secondary) from a recognized board",30000,120000),
  makeProgramme("education-08","Education","Master of Physical Education & Sports (MPES)",2,"4 Semester","BP.ED/BAPE/BPES/ or any graduation in relevant stream",40000,80000),
  makeProgramme("education-09","Education","M.P.E.S. Physical Education and Sports",1,"2 Semesters","NHEQF Level 6 Certification in Physical Education or equivalent",40000,40000),
  makeProgramme("education-10","Education","Post Graduation Diploma - Guidance & Counselling",1,"2 Semesters","Any Bachelor Degree with minimum 45% marks or equivalent grades",40000,40000),

  // FACULTY OF VOCATIONAL EDUCATION
  makeProgramme("vocational-01","Vocational Education","Diploma in Vocation (D.Voc) in Multi-Purpose Health Workers, Operation Management, Manufacturing, Logistics, Facilities and Hygiene Management, Digital Media & Design, Data Analytics, Computer Applications, Aviation, Culling arts, Beauty & Wellness, Export and Import Management, Interior Designing, Fashion Designing, Textile Designing, Retail Management, Printing Technology, Organic Agriculture, Web Technologies, Automobile, Food Processing and Quality Management, Data Analytics, Tea Husbandry & Technology, Animation, Applied Computer Technology, Health Care, Library Science, Web Designing, Hair Stylist and Hair Care, Nutrition and Health Management, Garment Construction and Embroidery, Hotel Management, Editing and Sound Recording, Health Quality Management Skill, Tourist Guide Skill, Nutrition and Dietetics, Rural Development, Laboratory Skills for Science, Industrial Electronics, Mechanical-Manufacturing, Footwear Production, Hospitality- Ethnic Foods and Sweets Processing, Piping Technology, Cosmetology & Wellness, Applied Arts, Sanitary, Health…",3,"6 Semester","Xth from recognized board",30000,90000),
  makeProgramme("vocational-02","Vocational Education","Diploma in Vocation (D.Voc) in Pharmacy Assistant, Radiology Technician, X-ray Technician, Dialysis Technician, Ayurveda Dietetics, Sports Nutrition and Physiotherapy, Voice Over Artist, VFX Editor, Unit Production Manager, Storyboard Artist, Texturing Artist, Sound Engineer, Sound Editor, Make-up artist, Line Producer, Editor, Director of Photography, Camera Operator, Art Director/Set Designer, Art Director, Anaesthesia Technician, Assistant Physiotherapist, Cardiac Care Technician, Dental Technician, Dento Oral Hygienist, Medical Equipment Technician, Medical Laboratory Technician, Medical Records & Health Information…",3,"6 Semester","Xth from recognized board",34000,102000),
  makeProgramme("vocational-03","Vocational Education","Diploma in Vocation (D.Voc) in Multi-Purpose Health Workers, Operation Management, Manufacturing, Logistics, Facilities and Hygiene Management, Digital Media & Design, Data Analytics, Computer Applications, Aviation, Culling arts, Beauty & Wellness, Export and Import Management, Interior Designing, Fashion Designing, Textile Designing, Retail Management, Printing Technology, Organic Agriculture, Web Technologies, Automobile, Food Processing and Quality Management, Data Analytics, Tea Husbandry & Technology, Animation, Applied Computer Technology, Health Care, Library Science, Web Designing, Hair Stylist and Hair Care, Nutrition and Health Management, Garment Construction and Embroidery, Hotel Management, Editing and Sound Recording, Health Quality Management Skill, Tourist Guide Skill, Nutrition and Dietetics, Rural Development, Laboratory Skills for Science, Industrial Electronics, Mechanical-Manufacturing, Footwear Production, Hospitality- Ethnic Foods and Sweets Processing, Piping Technology, Cosmetology…",1,"2 Semester","XII from recognized board",30000,30000),
  makeProgramme("vocational-04","Vocational Education","Diploma in Vocation (D.Voc) in Pharmacy Assistant, Radiology Technician, X-Ray Technician, Dialysis Technician, Ayurveda Dietetics, Sports Nutrition and Physiotherapy, Voice Over Artist, VFX Editor, Unit Production Manager, Storyboard Artist, Texturing Artist, Sound Engineer, Sound Editor, Make-up artist, Line Producer, Editor, Director of Photography, Camera Operator, Art Director/Set Designer, Art Director, Anaesthesia Technician, Assistant Physiotherapist, Cardiac Care Technician, Dental Technician, Dento Oral Hygienist, Medical Equipment Technician, Medical Laboratory Technician, Medical Records & Health Information Technician, Operation Theatre…",1,"2 Semester","XII from recognized board",35000,35000),
  makeProgramme("vocational-05","Vocational Education","Advanced Diploma in Multi-Purpose Health Workers, Operation Management, Manufacturing, Logistics, Facilities and Hygiene Management, Digital Media & Design, Data Analytics, Computer Applications, Aviation, Culling arts, Beauty & Wellness, Export and Import Management, Interior Designing, Fashion Designing, Textile Designing, Retail Management, Printing Technology, Organic Agriculture, Web Technologies, Automobile, Food Processing and Quality Management, Data Analytics, Tea Husbandry & Technology, Animation, Applied Computer Technology, Health Care, Library Science, Web Designing, Hair Stylist and Hair Care, Nutrition and Health Management, Garment Construction and Embroidery, Hotel Management, Editing and Sound Recording, Health Quality Management Skill, Tourist Guide Skill, Nutrition and Dietetics, Rural Development, Laboratory Skills for Science, Industrial Electronics, Mechanical-Manufacturing, Footwear Production, Hospitality- Ethnic Foods and Sweets Processing, Piping Technology, Cosmetology & Wellness, Applied Arts, Sanitary, Health…",2,"4 Semester","XII from recognized board",35000,70000),
  makeProgramme("vocational-06","Vocational Education","Advanced Diploma in Pharmacy Assistant, Radiology Technician, X-Ray Technician, Dialysis Technician, Ayurveda Dietetics, Sports Nutrition and Physiotherapy, Voice Over Artist, VFX Editor, Unit Production Manager, Storyboard Artist, Texturing Artist, Sound Engineer, Sound Editor, Make-up artist, Line Producer, Editor, Director of Photography, Camera Operator, Art Director/Set Designer, Art Director, Anaesthesia Technician, Assistant Physiotherapist, Cardiac Care Technician, Dental Technician, Dento Oral Hygienist, Medical Equipment Technician, Medical Laboratory Technician, Medical Records & Health Information Technician, Operating Theatre Technician",2,"4 Semester","XII from recognized board",35000,70000),
  makeProgramme("vocational-07","Vocational Education","Bachelor of Vocation (B.Voc) in Multi-Purpose Health Workers, Operation Management, Manufacturing, Logistics, Facilities and Hygiene Management, Digital Media & Design, Data Analytics, Computer Applications, Aviation, Culling arts, Beauty & Wellness, Export and Import Management, Interior Designing, Fashion Designing, Textile Designing, Retail Management, Printing Technology, Organic Agriculture, Web Technologies, Automobile, Food Processing and Quality Management, Data Analytics, Tea Husbandry & Technology, Animation, Applied Computer Technology, Health Care, Library Science, Web Designing, Hair Stylist and Hair Care, Nutrition and Health Management, Garment Construction and Embroidery, Hotel Management, Editing and Sound Recording, Health Quality Management Skill, Tourist Guide Skill, Nutrition…",3,"6 Semester","XII from recognized board",32000,96000),
  makeProgramme("vocational-08","Vocational Education","Bachelor of Vocation (B.Voc) in Pharmacy Assistant, Radiology Technician, X-ray Technician, Dialysis Technician, Ayurveda Dietetics, Sports Nutrition and Physiotherapy, Voice Over Artist, VFX Editor, Unit Production Manager, Storyboard Artist, Texturing Artist, Sound Engineer, Sound Editor, Make-up artist, Line Producer, Editor, Director of Photography, Camera Operator, Art Director/Set Designer, Art Director, Anaesthesia Technician, Assistant Physiotherapist, Cardiac Care Technician, Dental Technician, Dento Oral Hygienist, Medical Equipment Technician, Medical Laboratory Technician, Medical Records & Health Information…",3,"6 Semester","12th from recognized board",35000,105000),
  makeProgramme("vocational-09","Vocational Education","Post Graduate Diploma (PG Diploma) in Multi-Purpose Health Workers, Operation Management, Manufacturing, Logistics, Facilities and Hygiene Management, Digital Media & Design, Data Analytics, Computer Applications, Aviation, Culling arts, Beauty & Wellness, Export and Import Management, Interior Designing, Fashion Designing, Textile Designing, Retail Management, Printing Technology, Organic Agriculture, Web Technologies, Automobile, Food Processing and Quality Management, Data Analytics, Tea Husbandry & Technology, Animation, Applied Computer Technology, Health Care, Library Science, Web Designing, Hair Stylist and Hair Care, Nutrition and Health Management, Garment Construction and Embroidery, Hotel Management, Editing and Sound Recording, Health Quality Management Skill, Tourist Guide Skill, Nutrition and Dietetics, Rural Development, Laboratory Skills for Science, Industrial Electronics, Mechanical-Manufacturing, Footwear Production, Hospitality- Ethnic Foods and Sweets Processing, Piping Technology, Cosmetology…",1,"2 Semester","Bachelor Degree or B.Voc from Recognized university",45000,45000),
  makeProgramme("vocational-10","Vocational Education","Post Graduate Diploma PG Diploma in Pharmacy Assistant, Radiology Technician, X-ray Technician, Dialysis Technician, Ayurveda Dietetics, Sports Nutrition and Physiotherapy, Voice Over Artist, VFX Editor, Unit Production Manager, Storyboard Artist, Texturing Artist, Sound Engineer, Sound Editor, Make-up artist, Line Producer, Editor, Director of Photography, Camera Operator, Art Director/Set Designer, Art Director, Anaesthesia Technician, Assistant Physiotherapist, Cardiac Care Technician, Dental Technician, Dento Oral Hygienist, Medical Equipment Technician, Medical Laboratory Technician, Medical Records & Health Information Technician",1,"2 Semester","Bachelor Degree or B.Voc from Recognized university",65000,65000),
  makeProgramme("vocational-11","Vocational Education","Master of Vocation (M.Voc) in Multi-Purpose Health Workers, Operation Management, Manufacturing, Logistics, Facilities and Hygiene Management, Digital Media & Design, Data Analytics, Computer Applications, Aviation, Culling arts, Beauty & Wellness, Export and Import Management, Interior Designing, Fashion Designing, Textile Designing, Retail Management, Printing Technology, Organic Agriculture, Web Technologies, Automobile, Food Processing and Quality Management, Data Analytics, Tea Husbandry & Technology, Animation, Applied Computer Technology, Health Care, Library Science, Web Designing, Hair Stylist and Hair Care, Nutrition and Health Management, Garment Construction and Embroidery, Hotel Management, Editing and Sound Recording, Health Quality Management Skill, Tourist Guide Skill, Nutrition and Dietetics, Rural Development, Laboratory Skills for Science, Industrial Electronics, Mechanical-Manufacturing, Footwear Production, Hospitality- Ethnic Foods and Sweets Processing, Piping Technology, Cosmetology & Wellness, Applied Arts, Sanitary, Health…",2,"4 Semester","B.Voc or Graduation with relevant stream",45000,90000),
  makeProgramme("vocational-12","Vocational Education","Master of Vocation (M.Voc) in Pharmacy Assistant, Radiology Technician, X-ray Technician, Dialysis Technician, Ayurveda Dietetics, Sports Nutrition and Physiotherapy, Voice Over Artist, VFX Editor, Unit Production Manager, Storyboard Artist, Texturing Artist, Sound Engineer, Sound Editor, Make-up artist, Line Producer, Editor, Director of Photography, Camera Operator, Art Director/Set Designer, Art Director, Anaesthesia Technician, Assistant Physiotherapist, Cardiac Care Technician, Dental Technician, Dento Oral Hygienist, Medical Equipment Technician, Medical Laboratory Technician, Medical Records & Health Information Technician, Operating Theatre Technician, etc.",2,"4 Semester","B.Voc or Graduation with relevant stream",45000,90000),

  // FACULTY OF LAW
  makeProgramme("law-01","Law","Master of Law (LLM) in Criminal Law, Environmental Law, Human Rights Law, Intellectual Property Rights, Taxation Law, Cyber Law, International Law, Civil Law, Corporate Law, etc.",2,"4 Semester","LLB/BA-LLB/or any other degree in Law as per BCI.",80000,160000),
  makeProgramme("law-02","Law","Bachelor of Law (LLB)",3,"6 Semester","Graduation with minimum 45% marks or equivalent grades",60000,180000),
  makeProgramme("law-03","Law","Bachelor of Arts - Bachelor of Law (B.A LLB)",5,"10 Semester","XII from recognized",60000,300000),

  // FACULTY OF RESEARCH
  makeProgramme("research-01","Research","Ph.D. (All Running Faculties in the University)",3,"Yearly","Master Degree in relevant stream from Recognized University with minimum 55%",120000,360000),
];

export default sikkimSkillUniversityProgrammes;
