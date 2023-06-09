import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    // handlre login logic here
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        { email, password }
      );
      localStorage.setItem("userName",JSON.stringify( data.user));
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-form-container">
      <div className="background-image"></div>
      <Form onSubmit={handleSubmit} className="login-form">
        <h1 className="login-form-header">Login</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          Submit
        </Button>
      </Form>
      {loggedIn && (
        <p className="login-form-success">Logged in successfully!</p>
      )}
    </div>
  );
}

export default LoginForm;
