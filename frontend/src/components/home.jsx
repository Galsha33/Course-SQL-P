import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

async function enrollUser(credentials) {
  return fetch("http://localhost:8000/enrollemnt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Home = () => {
  const [courseChoice, setCoursesChoice] = useState([]);
  const [courses, setCourses] = useState([]);
  const [enrollment, setEnrollment] = useState([]);
  const userid = localStorage.getItem("userid");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ subjectName: courseChoice, userid })
    if(courseChoice !=""){
      enrollUser({ subjectName: courseChoice, userid });
      fetchData();
    }    
  };

  const fetchData = () => {
    fetch("http://localhost:8000/subjects?id=" + userid)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCourses(data.subjects);
        setEnrollment(data.userEnrollment);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Container className="py-5">
        <div>
          <Row>
            <Col md="4">
              <h4>All Courses</h4>
              {courses.length > 0 && (
                <ul>
                  {courses.map((course) => (
                    <li key={course.subject_id}>{course.subject}</li>
                  ))}
                </ul>
              )}
            </Col>
            <Col md="4">
              <h4>My Enrollments</h4>
              {enrollment.length > 0 && (
                <ul>
                  {enrollment.map((course) => (
                    <li key={course.course_id}>{course.name}</li>
                  ))}
                </ul>
              )}
            </Col>
            <Col md="4">
              <h4>Enroll to course</h4>
              <form onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                  <FormLabel>Course Name</FormLabel>
                  {courses.length > 0 && (
                    <select
                      className="form-control"
                      onChange={(e) => setCoursesChoice(e.target.value)}
                    >
                      <option value="">...</option>
                      {courses.map((course) => (
                        <option
                          key={course.subject_id}
                          value={course.subject}
                        >
                          {course.subject}
                        </option>
                      ))}
                    </select>
                  )}
                </FormGroup>
                <Button
                  type="submit"
                  className="btn-success mt-2 btn-block w-100"
                >
                  Enroll to course
                </Button>
              </form>
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
};
export default Home;
