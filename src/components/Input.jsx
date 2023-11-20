import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

export default function Input({ label, value, onChange, className = "" }) {
  const id = uuidv4();

  return (
    <>
      <label htmlFor={id} className={className}>
        {label}
      </label>
      <input type="text" id={id} value={value} onChange={onChange} />
    </>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};
