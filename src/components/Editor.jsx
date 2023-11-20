import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import PersonalInfoSection from "./PersonalInfoSection";
import PropTypes from "prop-types";
import Button from "./Button";
import "../styles/Editor.css";
import { useState } from "react";

const defaultStyle = {
  accent: "#E10E27",
  font: 0,
  layout: 0,
};

function EditTab({ person, setPerson }) {
  return (
    <>
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
    </>
  );
}

function CustomizeTab({ style, setStyle }) {
  function updateStyle(newStyle) {
    const root = document.getElementById("root");
    root.style.setProperty("--accent-color", newStyle.accent);

    const cv = document.querySelector(".cv");
    switch (newStyle.font) {
      case 0:
        cv.style.setProperty("font-family", "var(--sans-serif-font)");
        break;
      case 1:
        cv.style.setProperty("font-family", "var(--serif-font)");
        break;
      case 2:
        cv.style.setProperty("font-family", "var(--mono-font)");
        break;
      default:
        break;
    }
  }

  function handleAccentChange(e) {
    setStyle({ ...style, accent: e.target.value });
    updateStyle({ ...style, accent: e.target.value });
  }

  function handleFontChange(value) {
    setStyle({ ...style, font: value });
    updateStyle({ ...style, font: value });
  }

  return (
    <>
      <label htmlFor="accent">Accent color</label>
      <input
        onChange={handleAccentChange}
        type="color"
        id="accent"
        value={style.accent}
      />
      <p>Font style</p>
      <div>
        <Button
          onClick={() => handleFontChange(0)}
          text="Sans Serif"
          className="sans"
          title="Sans Serif"
          isActive={style.font === 0}
        />
        <Button
          onClick={() => handleFontChange(1)}
          text="Serif"
          className="serif"
          title="Serif"
          isActive={style.font === 1}
        />
        <Button
          onClick={() => handleFontChange(2)}
          text="Mono"
          className="mono"
          title="Mono"
          isActive={style.font === 2}
        />
      </div>
    </>
  );
}

export default function Editor({ person, setPerson, className }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [style, setStyle] = useState(defaultStyle);

  function showTab() {
    switch (activeIndex) {
      case 0:
        return (
          <form className="tab">
            <EditTab person={person} setPerson={setPerson} />
          </form>
        );
      case 1:
        return (
          <form className="tab">
            <CustomizeTab style={style} setStyle={setStyle} />
          </form>
        );
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

EditTab.propTypes = {
  setPerson: PropTypes.func,
  person: PropTypes.object,
};

CustomizeTab.propTypes = {
  style: PropTypes.object,
  setStyle: PropTypes.func,
};
