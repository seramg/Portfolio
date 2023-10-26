import React from "react";
const Button = ({ text: text, icon: IconComponent }) => {
  return (
    <div className="button-container">
      <a href="#" className="button">
        {text}
      </a>
      <IconComponent className="button-icon" />
    </div>
  );
};
export default Button;
