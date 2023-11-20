import PropTypes from "prop-types";
import "../styles/Preview.css";

function Year({ start, end }) {
  if (start.length > 0 && end.length > 0) {
    return (
      <p>
        {start} - {end}
      </p>
    );
  } else if (start.length > 0) {
    return <p>{start}</p>;
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
            <Year start={exp.start} end={exp.end} />
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
            <Year start={edu.start} end={edu.end} />
          </li>
        );
      })}
    </ul>
  );
}

export default function Preview({ person, className }) {
  return (
    <div className={className}>
      <section>
        <h2>Preview</h2>
        <div className="cv">
          <h3>
            {person.firstName} {person.lastName}
          </h3>
          <p>{person.title}</p>
          <div className="contact">
            <p>{person.phone}</p>
            <p>{person.address}</p>
            <p>{person.email}</p>
          </div>
          <div className="summary">
            <h4>Summary</h4>
            <p>{person.summary}</p>
          </div>
          <div className="experience">
            <h4>Experience</h4>
            <ListExperience experience={person.experience} />
          </div>
          <div className="education">
            <h4>Education</h4>
            <ListEducation education={person.education} />
          </div>
        </div>
      </section>
    </div>
  );
}

Preview.propTypes = {
  person: PropTypes.object,
  className: PropTypes.string,
};

ListExperience.propTypes = {
  experience: PropTypes.array,
};

ListEducation.propTypes = {
  education: PropTypes.array,
};

Year.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
};
