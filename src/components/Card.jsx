import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./Card.css";
import { AiFillFileText } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function HomeCard({ name, title, icon, description }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (title === "Text Generation") navigate("/genpara/text");
    else if (title === "Paragraph Generation") {
      navigate("/genpara/para");
    } else if (name === "js") {
      navigate("/gencode/js");
    } else if (name === "Python") {
      navigate("/gencode/python");
    } else if (name === "C") {
      navigate("/gencode/c");
    } else if (name === "Java") {
      navigate("/gencode/java");
    } else if (name === "CPP ") {
      navigate("/gencode/cpp");
    } else if (title === "Scifi Images") {
      navigate("/genimage");
    }
  };
  return (
    <>
      <Card className="card-with-bg-image homecard" onClick={handleClick}>
        <div className="card-bg-image"></div>
        <Card.Body>
          <Card.Title className="text-dark h3" style={{ fontSize: "2rem" }}>
            {" "}
            {title}
          </Card.Title>
          {icon}
          <Card.Text style={{ fontSize: "1.3rem" }}>{description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default HomeCard;
