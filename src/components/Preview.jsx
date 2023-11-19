import PropTypes from "prop-types";

function Year({ begin, end }) {
  if (begin.length > 0 && end.length > 0) {
    return (
      <p>
        {begin} - {end}
      </p>
    );
  } else if (begin.length > 0) {
    return <p>{begin}</p>;
  } else {
    return <p>{end}</p>;
  }
}

function ListExperience({ experience }) {
  return (
    <ul className="experience">
      {experience.map((exp) => {
        return (
          <li key={exp.id}>
            <p>{exp.title}</p>
            <p>{exp.company}</p>
            {exp.location.length > 0 && <p>{exp.location}</p>}
            <Year begin={exp.begin} end={exp.end} />
            <p>{exp.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

function ListEducation({ education }) {
  return (
    <ul className="education">
      {education.map((edu) => {
        return (
          <li key={edu.id}>
            <p>{edu.degree}</p>
            <p>{edu.school}</p>
            {edu.location.length > 0 && <p>{edu.location}</p>}
            <Year begin={edu.begin} end={edu.end} />
          </li>
        );
      })}
    </ul>
  );
}

export default function Preview({ person }) {
  return (
    <div id="preview">
      <h2>Preview</h2>
      <p>
        {person.firstName} {person.lastName}
      </p>
      <p>{person.title}</p>
      <p>{person.phone}</p>
      <p>{person.address}</p>
      <p>{person.email}</p>
      <p>Summary</p>
      <p>{person.summary}</p>
      <p>Experience</p>
      <ListExperience experience={person.experience} />
      <p>Education</p>
      <ListEducation education={person.education} />
    </div>
  );
}

Preview.propTypes = {
  person: PropTypes.object,
};

ListExperience.propTypes = {
  experience: PropTypes.array,
};

ListEducation.propTypes = {
  education: PropTypes.array,
};

Year.propTypes = {
  begin: PropTypes.string,
  end: PropTypes.string,
};
