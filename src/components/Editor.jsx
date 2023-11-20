import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import PersonalInfoSection from "./PersonalInfoSection";
import PropTypes from "prop-types";
import "../styles/Editor.css";

export default function Editor({ person, setPerson, className }) {
  return (
    <div className={className}>
      <h2>Editor</h2>
      <form>
        <PersonalInfoSection
          legend="Personal Information"
          person={person}
          setPerson={setPerson}
        />
        <ExperienceSection
          legend="Experience"
          person={person}
          setPerson={setPerson}
        />
        <EducationSection
          legend="Education"
          person={person}
          setPerson={setPerson}
        />
      </form>
    </div>
  );
}

Editor.propTypes = {
  setPerson: PropTypes.func,
  person: PropTypes.object,
  className: PropTypes.string,
};
