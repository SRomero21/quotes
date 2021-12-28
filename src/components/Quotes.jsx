import React from "react";
//components
import Button from "./Button";
//Styles
import "../styles/quotes.css";

const QuoteBox = ({ phrase, author, handleQuote, background }) => {
  return (
    <div className="card">
      <div className="phrase-container">
        <div className="quotes-anchor">
          <i
            className="quote"
            class="fas fa-quote-left"
            style={{ color: background }}
          ></i>
        </div>
        <p className="phrase" style={{ color: background }}>
          {phrase}
        </p>
      </div>
      <div className="author">
        <p style={{ color: background }}>{author}</p>
      </div>
      <Button handleQuote={handleQuote} background={background} />
    </div>
  );
};

export default QuoteBox;
