import PropTypes from "prop-types";

export default function Button({
  icon = "",
  onClick,
  text = "",
  className = "",
  title = "",
  isActive = false,
}) {
  const activeClass = isActive ? "active" : "";

  return (
    <button
      title={title}
      type="button"
      className={className + " " + activeClass}
      onClick={onClick}
    >
      {icon.length > 0 && <span className="iconify" data-icon={icon}></span>}
      {text.length > 0 && text}
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  isActive: PropTypes.bool,
};
