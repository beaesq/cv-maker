import PropTypes from "prop-types";

export default function TextArea({ label, value, onChange, className = "" }) {
  return (
    <label className={className}>
      {label}{" "}
      <textarea value={value} onChange={onChange} cols="30" rows="6"></textarea>
    </label>
  );
}

TextArea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};
