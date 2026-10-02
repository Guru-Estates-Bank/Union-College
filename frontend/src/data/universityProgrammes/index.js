import indraGroupProgrammes from "./indraGroup";
import sikkimSkillUniversityProgrammes from "./sikkimSkillUniversity";

// Programme datasets are keyed by the exact institution slug used by
// institutionData.js. Sikkim Skill University contains all 112 programme
// rows traced from the Union College Programme & Fee Structure PDF.
const universityProgrammes = {
  "indra-institute-of-management-studies": indraGroupProgrammes,
  "indra-group": indraGroupProgrammes,
  "sikkim-skill-university": sikkimSkillUniversityProgrammes,
};

export default universityProgrammes;
