import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const GeneratePar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [summary, setSummary] = useState("");
  const [delay, setDelay] = useState(false);
  const [description, setDescription] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    if (description === "") {
      return toast.error("please enter some text");
    }
    setDelay(true);

    if (id === "summary") {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/openai/summary",
        {
          text: description,
        }
      );
      console.log(data);
      setSummary(data);
      setDelay(false);
    } else if (id === "para") {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/openai/paragraph",
        {
          text: description,
        }
      );
      console.log(data);
      setSummary(data);
      setDelay(false);
    }
  };
  return (
    <div className="container">
      {delay && (
        <h3 className="text-danger">
          Wait our robots are working for generating response
        </h3>
      )}
      <Card className="d-flex justify-content-center align-items-center gencard">
        <Form onSubmit={submitHandler}>
          <h3 className="text-center text-dark">
            Welcome to Text Generator or Text Summarizer{" "}
          </h3>

          <Form.Group>
            <Form.Label className="mt-4">
              {id === "para" ? (
                <span>
                  Enter some keywords or text for generating paragraph
                </span>
              ) : (
                <span>Enter some keywords or text for summrazing</span>
              )}
            </Form.Label>
            <Form.Control
              type="text"
              style={{ width: "60vw" }}
              placeholder="enter some text"
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="d-flex justify-content-between">
              <Button disabled={delay} type="submit" className="mt-2  w-40">
                {id === "para" ? (
                  <span>Generating paragraph</span>
                ) : (
                  <span> Summraze Paragraph</span>
                )}
              </Button>
              <Button
                className="mt-2 w-30 bg-dark "
                style={{ marginLeft: "4px" }}
                onClick={() => navigate("/home")}
              >
                Go Back....
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Card>

      {summary && (
        <Card className="p-5 gencard mt-3">
          <Card.Title className="h2 text-dark link">
            Generate Response
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
              {summary && summary}
            </Card.Text>
          )}
        </Card>
      )}
    </div>
  );
};

export default GeneratePar;
