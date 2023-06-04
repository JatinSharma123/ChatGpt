import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { Button } from "react-bootstrap";

function Header() {
  const navigate = useNavigate();
  const user = localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "";

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          {" "}
          <Link className="link text-white" to="/home">
            Chat Gpt:Artificial Intelligence Chatbot
          </Link>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user ? (
              <>
                <h3 className="text-success m-2">{user && user}</h3>
                <Button
                  onClick={logout}
                  style={{ width: "50px", height: "50px" }}
                >
                  {" "}
                  <MdLogout />
                </Button>
              </>
            ) : (
              <>
                <Link className={"link"} to={"/login"}>
                  Login
                </Link>
                <Link className="link" to="/register">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
