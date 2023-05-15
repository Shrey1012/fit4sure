import React from "react";
import "./ToolCard.css";
import { Link } from "react-router-dom";

const ToolCard = ({ img, Tool_name, link }) => {
  return (
    <div className="Tool-card">
      <Link to={link} className="Tool-link">
        <img src={img} alt="Track here" />
        {Tool_name}
      </Link>
    </div>
  );
};

export default ToolCard;
