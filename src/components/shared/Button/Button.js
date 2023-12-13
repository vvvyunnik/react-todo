import PropTypes from "prop-types";
import "./Button.scss";

function Button({ onClick, className, children }) {
  return (
    <button
      type="button"
      className={`no-style-btn ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: "",
};

export default Button;
