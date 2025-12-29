import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const StudentForm = ({data}) => {
  const [input, setInput] = useState({
    grid: 0,
    name: "",
    course: "",
    number: 0,
    address: "",
  });

  const handleInputData = (e, field) => {
    setInput((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    data(input);
    // console.log("Student Data", input);
    setInput({ grid: "", name: "", course: "", number: "", address: "" });
  };

  return (
    <>
      <Container className="border border-black mt-5 p-5 mb-5">
        <Form onSubmit={handleSubmitData}>
          <h1 className="text-center  mb-4 text-dark">Student Data</h1>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>GR_ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Your GRID"
              required
              value={input.grid}
              onChange={(e) => handleInputData(e, "grid")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Full Name"
              required
              value={input.name}
              onChange={(e) => handleInputData(e, "name")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Course Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Course Name"
              required
              value={input.course}
              onChange={(e) => handleInputData(e, "course")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="+91"
              required
              value={input.number}
              onChange={(e) => handleInputData(e, "number")}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Address"
              required
              value={input.address}
              onChange={(e) => handleInputData(e, "address")}
            />
          </Form.Group>
          <Button className="w-100" type="submit" variant="success">
            Add
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default StudentForm;
