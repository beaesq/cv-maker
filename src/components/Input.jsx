import PropTypes from "prop-types";

export default function Input({ label, value, onChange, className = "" }) {
  return (
    <label className={className}>
      {label} <input value={value} onChange={onChange} />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};
