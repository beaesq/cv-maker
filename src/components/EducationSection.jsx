import PropTypes from "prop-types";
import Input from "./Input";
import { v4 as uuidv4 } from "uuid";

function Education({ edu, index, setEdu }) {
  function handleDegreeChange(e) {
    setEdu({ ...edu, degree: e.target.value }, index);
  }

  function handleSchoolChange(e) {
    setEdu({ ...edu, school: e.target.value }, index);
  }

  function handleLocationChange(e) {
    setEdu({ ...edu, location: e.target.value }, index);
  }

  function handleStartChange(e) {
    setEdu({ ...edu, start: e.target.value }, index);
  }

  function handleEndChange(e) {
    setEdu({ ...edu, end: e.target.value }, index);
  }

  return (
    <>
      <Input label="Degree" value={edu.degree} onChange={handleDegreeChange} />
      <Input label="School" value={edu.school} onChange={handleSchoolChange} />
      <Input
        label="Location (optional)"
        value={edu.location}
        onChange={handleLocationChange}
      />
      <Input
        label="Start Date (optional)"
        value={edu.start}
        onChange={handleStartChange}
      />
      <Input
        label="End Date (optional)"
        value={edu.end}
        onChange={handleEndChange}
      />
    </>
  );
}

export default function EducationSection({ person, setPerson }) {
  function setEdu(newEdu, index) {
    const newEducation = person.education.slice();
    newEducation[index] = newEdu;
    setPerson({ ...person, education: newEducation });
  }

  function addEdu() {
    const id = uuidv4();
    const newEdu = {
      id: id,
      degree: "B.S. Underwater Basket Weaving",
      school: "New University",
      location: "Location",
      start: "Year",
      end: "Year",
    };

    const newEducation = person.education.slice();
    newEducation.push(newEdu);
    setPerson({ ...person, education: newEducation });
  }

  function removeEdu(index) {
    const newEducation = person.education.slice();
    newEducation.splice(index, 1);
    setPerson({ ...person, education: newEducation });
  }

  return (
    <form className="education">
      {person.education.map((edu, index) => (
        <section key={edu.id}>
          <button type="button" onClick={() => removeEdu(index)}>
            Delete
          </button>
          <Education edu={edu} index={index} setEdu={setEdu} />
        </section>
      ))}
      <button type="button" onClick={addEdu}>
        Add
      </button>
    </form>
  );
}

EducationSection.propTypes = {
  person: PropTypes.object,
  setPerson: PropTypes.func,
};

Education.propTypes = {
  edu: PropTypes.object,
  index: PropTypes.number,
  setEdu: PropTypes.func,
};
