import ExperienceSection from "./ExperienceSection";
import PersonalInfoSection from "./PersonalInfoSection";
import PropTypes from "prop-types";

export default function Editor({ person, setPerson }) {
  return (
    <div id="editor">
      <h2>Editor</h2>
      <h3>Personal Information</h3>
      <PersonalInfoSection person={person} setPerson={setPerson} />
      <h3>Experience</h3>
      <ExperienceSection person={person} setPerson={setPerson} />
    </div>
  );
}

Editor.propTypes = {
  setPerson: PropTypes.func,
  person: PropTypes.object,
};
