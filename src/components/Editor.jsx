import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import PersonalInfoSection from "./PersonalInfoSection";
import PropTypes from "prop-types";
import Button from "./Button";
import "../styles/Editor.css";
import { useState } from "react";
import { defaultPerson } from "../assets/defaults";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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

    // todo: add layout change
  }

  function handleAccentChange(e) {
    setStyle({ ...style, accent: e.target.value });
    updateStyle({ ...style, accent: e.target.value });
  }

  function handleFontChange(value) {
    setStyle({ ...style, font: value });
    updateStyle({ ...style, font: value });
  }

  function handleLayoutChange(value) {
    setStyle({ ...style, layout: value });
    updateStyle({ ...style, layout: value });
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
      <p>Layout</p>
      <div>
        <Button
          onClick={() => handleLayoutChange(0)}
          text="Minimalist"
          className="layout"
          title="Minimalist layout"
          isActive={style.layout === 0}
        />
      </div>
    </>
  );
}

function LoadTab({ setPerson }) {
  return (
    <Button
      onClick={() => setPerson(defaultPerson)}
      text="Load Default Data"
      title="Load Default Data"
    />
  );
}

function ExportTab() {
  function getPDF() {
    const cv = document.querySelector(".cv");

    var HTML_Width = cv.clientWidth;
    var HTML_Height = cv.clientHeight;
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + top_left_margin * 2;
    var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas(cv, { allowTaint: true }).then(function (canvas) {
      canvas.getContext("2d");

      console.log(canvas.height + "  " + canvas.width);

      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
      pdf.addImage(
        imgData,
        "JPG",
        top_left_margin,
        top_left_margin,
        canvas_image_width,
        canvas_image_height,
      );

      for (var i = 1; i <= totalPDFPages; i++) {
        pdf.addPage(PDF_Width, PDF_Height);
        pdf.addImage(
          imgData,
          "JPG",
          top_left_margin,
          -(PDF_Height * i) + top_left_margin * 4,
          canvas_image_width,
          canvas_image_height,
        );
      }

      pdf.save("HTML-Document.pdf");
    });
  }

  return (
    <Button
      onClick={() => getPDF()}
      text="Export to PDF"
      title="Export to PDF"
    />
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

      case 2:
        return (
          <form className="tab">
            <LoadTab setPerson={setPerson} />
          </form>
        );
      case 3:
        return (
          <form className="tab">
            <ExportTab />
          </form>
        );
      default:
        break;
    }
  }

  let heading = "";
  switch (activeIndex) {
    case 0:
      heading = "Editor";
      break;
    case 1:
      heading = "Customize";
      break;
    case 2:
      heading = "Load";
      break;
    case 3:
      heading = "Export";
      break;
    default:
      heading = "Editor";
      break;
  }

  return (
    <div className={className}>
      <h2>{heading}</h2>
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

LoadTab.propTypes = {
  setPerson: PropTypes.func,
};
