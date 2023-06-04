import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // handle login logic here

    try {
      let username = name;
      const { resp } = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        { username, email, password }
      );

      navigate("/");
    } catch (error) {
      console.log(error);
      setLoggedIn(false);
    }

    setLoggedIn(true);
  };

  return (
    <div className="login-form-container">
      <div className="background-image"></div>
      <Form onSubmit={handleSubmit} className="login-form">
        <h1 className="login-form-header">Register</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="login-form-button">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default RegisterForm;
