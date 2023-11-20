import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

export default function TextArea({ label, value, onChange, className = "" }) {
  const id = uuidv4();

  return (
    <>
      <label htmlFor={id} className={className}>
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        cols="30"
        rows="6"
      ></textarea>
    </>
  );
}

TextArea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};
