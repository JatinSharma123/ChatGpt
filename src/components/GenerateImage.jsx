import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const GenerateImage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [summary, setSummary] = useState("");
  const [delay, setDelay] = useState(false);
  const [description, setDescription] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    if (description === "") {
      return toast.error("Please enter some text....");
    }
    setDelay(true);
    setSummary("");
  

    const { data } = await axios.post(
      "http://localhost:8000/api/v1/openai/scifi-image",
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
  };
  return (
    <div className="container">
      {delay && (
        <h3 className="text-danger">
          Wait our robots are working for generating a beautiful image for you..
        </h3>
      )}
      <Card className="d-flex justify-content-center align-items-center gencard">
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label className="mt-4">
              <span>Enter some text or keywords for generating image</span>
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
                Generate Image
              </Button>
              <Button
                className="mt-2 w-30 bg-dark text-white"
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
        <div className="imgContainer mt-4 d-flex justify-content-center">
          {" "}
          <img src={summary} alt={id} />{" "}
        </div>
      )}
    </div>
  );
};

export default GenerateImage;
