import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const GenerateCode = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [summary, setSummary] = useState([]);
  const [delay, setDelay] = useState(false);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      if (description === "") {
        return toast.error("Please enter some text....");
      }
      setDelay(true);
      setSummary("");
      let language = "";
      if (id === "js") {
        language = "js-converter";
      } else if (id === "c") {
        language = "c-converter";
      } else if (id === "cpp") {
        language = "cpp-converter";
      } else if (id === "python") {
        language = "python-converter";
      } else language = "java-converter";
      const { data } = await axios.post(
        `http://localhost:8000/api/v1/openai/${language}`,
        {
          text: description,
        }
      );
      setDescription("");
      console.log(data);
      let d = data.split(";");
      console.log(d);
      setSummary(d);
      setDelay(false);
    } catch (error) {
      setError("Server Error Can't Generate Code now");
      console.log(error);
    }
  };
  return (
    <div className="container">
      {delay && (
        <h3 className="text-danger">
          Wait our robots are working for generating response
        </h3>
      )}
      {error && <p>{error}</p>}
      <Card className="d-flex justify-content-center align-items-center gencard">
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label className="mt-4">
              <h3 className="text-center text-dark">
                Welcome to Code Genrator{" "}
              </h3>
              <h3 className="text-center mb-3">
                You are currently selected to generate code in{" "}
                {id.toUpperCase()} Programming language ...
              </h3>
              <span>Enter function name or enter the problem..</span>
            </Form.Label>
            <Form.Control
              type="text"
              style={{ width: "60vw" }}
              placeholder="add your text...."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="d-flex justify-content-between">
              <Button disabled={delay} type="submit" className="mt-2  w-40">
                Generate Code
              </Button>
              <Button
                className="mt-2 w-30 bg-dark text-white "
                style={{ marginLeft: "4px" }}
                onClick={() => navigate("/home")}
              >
                Go Back....
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Card>

      {summary.length > 0 && (
        <Card className="p-5 gencode mt-3">
          <Card.Title
            className="h2 text-dark link"
            style={{ fontSize: "2rem" }}
          >
            Generated Code
          </Card.Title>
          {id === "image" ? (
            <img
              className="img-fluid"
              style={{ height: "20vh" }}
              src={summary}
              alt="summary"
            />
          ) : (
            <Card.Text style={{ width: "70vw" }}>
              {summary &&
                summary.map((s) => {
                  return <p>{s}</p>;
                })}
            </Card.Text>
          )}
        </Card>
      )}
    </div>
  );
};

export default GenerateCode;
