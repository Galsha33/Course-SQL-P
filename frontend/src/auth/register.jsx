import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

async function registerUser(credentials) {
  return fetch("http://localhost:8000/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Register() {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp=await registerUser({
      fullName,
      email,
      password,
    });
    const token = "";
    // setToken(token);
    if(resp.name == fullName){      
          navigate('/auth/login', { replace: true });      
    }

  };

  return (
    <Container className="my-5">
      <Row>
      <Col md="8">
        <h1 className="display-1">Register to the Courses Project</h1>
        </Col>
        <Col md="4">
        <h2>Please Register</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup className="mb-3">
          <FormLabel>Full Name</FormLabel>
          <input
            className="form-control"
            type="text"
            onChange={(e) => setFullName(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Email</FormLabel>
          <input
            className="form-control"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Password</FormLabel>
          <input
            className="form-control"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button type="submit" className="btn-success mt-2 btn-block w-100">
          Register
        </Button>
      </form>

        </Col>
      </Row>
     
    </Container>
  );
}

// Register.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
