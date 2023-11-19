import PropTypes from "prop-types";
import Input from "./Input";
import TextArea from "./TextArea";

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

  function handleBeginChange(e) {
    setExp({ ...exp, begin: e.target.value }, index);
  }

  function handleEndChange(e) {
    setExp({ ...exp, end: e.target.value }, index);
  }

  function handleDescriptionChange(e) {
    setExp({ ...exp, description: e.target.value }, index);
  }

  return (
    <section>
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
        value={exp.begin}
        onChange={handleBeginChange}
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
    </section>
  );
}

export default function ExperienceSection({ person, setPerson }) {
  function setExp(newExp, index) {
    const newExperience = person.experience.slice();
    newExperience[index] = newExp;

    setPerson({ ...person, experience: newExperience });
  }

  return (
    <form className="experience">
      {person.experience.map((exp, index) => (
        <Experience key={exp.id} exp={exp} index={index} setExp={setExp} />
      ))}
    </form>
  );
}

ExperienceSection.propTypes = {
  person: PropTypes.object,
  setPerson: PropTypes.func,
};

Experience.propTypes = {
  exp: PropTypes.object,
  setExp: PropTypes.func,
  index: PropTypes.number,
};
