import React, { useState } from "react";
import { useNavigate, withRouter } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  FormLabel,
  Row,
  Nav,
} from "react-bootstrap";

async function loginUser(credentials) {
  

  return fetch("http://localhost:8000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
  
}

function setToken(userToken) {
  localStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginUser({
      email,
      password,
    }).then(userandToken=>{
      setToken(userandToken.token);
      localStorage.setItem("userid", userandToken.user.user_id)
  
      navigate("/home", { replace: true });
    });    
  };

  return (
    <React.Fragment>
      <Container className="my-5">
        <Row>
          <Col md="4">
            <h2 className="fw-normal">Please Login</h2>
            <Form id="loginForm" onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                <FormLabel htmlFor={"login-username"}>Email</FormLabel>
                <input
                  type={"email"}
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  name="username"
                  required
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel htmlFor={"login-password"}>Password</FormLabel>
                <input
                  type={"password"}
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  required
                />
              </FormGroup>
              <Button type="submit" className="btn-success mt-2 mb-4 w-100">
                Login
              </Button>

              <Nav.Link href="/reset-password">Reset Password</Nav.Link>
            </Form>
          </Col>
          <Col md="8">
            <h1 className="display-1">Login to the Courses Project</h1>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

