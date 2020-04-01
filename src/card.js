import React from "react";
import PropTypes from "prop-types";
import "./App.css";

const Card = ({ color, title, content, image, style = "" }) => {
  const styleClassNames = `card ${style}`;
  console.log(styleClassNames);
  return (
    <div className={styleClassNames}>
      <div className="cardColor" style={{ backgroundColor: color }}></div>
      <div className="cardTitle">
        <h2>{title}</h2>
      </div>
      <div className="cardContent">
        <p>{content}</p>
      </div>
      <div className="cardIcon">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

Card.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  style: PropTypes.string
};

Card.defaultProps = {
  color: "",
  title: "",
  content: "",
  image: "",
  style: ""
};

export default Card;
