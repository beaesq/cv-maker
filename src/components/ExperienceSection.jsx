import PropTypes from "prop-types";
import Input from "./Input";
import TextArea from "./TextArea";
import { v4 as uuidv4 } from "uuid";

function Experience({ exp, setExp, index }) {
  function handleTitleChange(e) {
    setExp({ ...exp, title: e.target.value }, index);
  }

  function handleCompanyChange(e) {
    setExp({ ...exp, company: e.target.value }, index);
  }

  function handleLocationChange(e) {
    setExp({ ...exp, location: e.target.value }, index);
  }

  function handleStartChange(e) {
    setExp({ ...exp, start: e.target.value }, index);
  }

  function handleEndChange(e) {
    setExp({ ...exp, end: e.target.value }, index);
  }

  function handleDescriptionChange(e) {
    setExp({ ...exp, description: e.target.value }, index);
  }

  return (
    <>
      <Input label="Position" value={exp.title} onChange={handleTitleChange} />
      <Input
        label="Company"
        value={exp.company}
        onChange={handleCompanyChange}
      />
      <Input
        label="Location (optional)"
        value={exp.location}
        onChange={handleLocationChange}
      />
      <Input
        label="Start Date (optional)"
        value={exp.start}
        onChange={handleStartChange}
      />
      <Input
        label="End Date (optional)"
        value={exp.end}
        onChange={handleEndChange}
      />
      <TextArea
        label="Description"
        value={exp.description}
        onChange={handleDescriptionChange}
      />
    </>
  );
}

export default function ExperienceSection({ person, setPerson, legend }) {
  function setExp(newExp, index) {
    const newExperience = person.experience.slice();
    newExperience[index] = newExp;

    setPerson({ ...person, experience: newExperience });
  }

  function addExp() {
    const id = uuidv4();
    const newExp = {
      id: id,
      title: "Title",
      company: "Company",
      location: "Location",
      start: "Year",
      end: "Year",
      description: "Job description",
    };

    const newExperience = person.experience.slice();
    newExperience.push(newExp);
    setPerson({ ...person, experience: newExperience });
  }

  function removeExp(index) {
    const newExperience = person.experience.slice();
    newExperience.splice(index, 1);

    setPerson({ ...person, experience: newExperience });
  }

  return (
    <fieldset className="experience">
      <legend>{legend}</legend>
      {person.experience.map((exp, index) => (
        <section key={exp.id}>
          <button type="button" onClick={() => removeExp(index)}>
            Delete
          </button>
          <Experience exp={exp} index={index} setExp={setExp} />
        </section>
      ))}
      <button type="button" onClick={addExp}>
        Add
      </button>
    </fieldset>
  );
}

ExperienceSection.propTypes = {
  person: PropTypes.object,
  setPerson: PropTypes.func,
  legend: PropTypes.string,
};

Experience.propTypes = {
  exp: PropTypes.object,
  setExp: PropTypes.func,
  index: PropTypes.number,
};
