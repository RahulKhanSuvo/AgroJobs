import ContactLinks from "./ContactLinks";
import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";

export default function CandidateProfilePage() {
  return (
    <div className="space-y-7">
      <PersonalInfo />
      <WorkExperience />
      <Education />
      <ContactLinks />
    </div>
  );
}
