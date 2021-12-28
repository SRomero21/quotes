import React from "react";

//Styles
import "../styles/button.css";

const Button = ({ handleQuote, background }) => {
  return (
    <div className="button-container">
      <button style={{ background }} onClick={handleQuote}>
      
        <i style={{ fontSize: "1rem" }} class="fas fa-arrow-circle-right"></i>
      </button>
    </div>
  );
};

export default Button;
