import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css"; // import CSS file

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
  };

  return (
    <div className="login-form-container">
      {" "}
      {/* add container div */}
      <div className="login-form-bg" /> {/* add background image div */}
      <Form className="login-form" onSubmit={handleSubmit}>
        {" "}
        {/* add class name and onSubmit */}
        <h1 className="text-center">Login</h1>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
