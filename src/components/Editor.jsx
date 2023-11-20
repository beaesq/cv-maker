import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import PersonalInfoSection from "./PersonalInfoSection";
import PropTypes from "prop-types";
import Button from "./Button";
import "../styles/Editor.css";
import { useState } from "react";

export default function Editor({ person, setPerson, className }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function showTab() {
    switch (activeIndex) {
      case 0:
        return (
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
        );
      case 1:
        return <p>1</p>;

      default:
        break;
    }
  }

  return (
    <div className={className}>
      <h2>Editor</h2>
      <div className="panel">
        <Button
          onClick={() => setActiveIndex(0)}
          isActive={activeIndex === 0}
          icon="mdi-pencil"
          title="Edit"
        />
        <Button
          onClick={() => setActiveIndex(1)}
          isActive={activeIndex === 1}
          icon="mdi-cog"
          title="Customize"
        />
        <Button
          onClick={() => setActiveIndex(2)}
          isActive={activeIndex === 2}
          icon="mdi-account-question"
          title="Load Default"
        />
        <Button
          onClick={() => setActiveIndex(3)}
          isActive={activeIndex === 3}
          icon="mdi-download-box"
          title="Export PDF"
        />
      </div>
      {showTab()}
    </div>
  );
}

Editor.propTypes = {
  setPerson: PropTypes.func,
  person: PropTypes.object,
  className: PropTypes.string,
};
