import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const StudentList = ({ listData }) => {
  return (
    <>
      <Container className="border border-black p-4">
        <Table striped bordered hover responsive>
          <thead>
            <tr className="text-center">
              <th>GR_ID</th>
              <th>Full Name</th>
              <th>Course</th>
              <th>Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {listData.length === 0 ? (
              <h5 className="text-center">Data is Empty</h5>
            ) : (
              listData.map((item) => {
                return (
                  <tr className="text-center">
                    <td>{item.grid}</td>
                    <td>{item.name}</td>
                    <td>{item.course}</td>
                    <td>{item.number}</td>
                    <td>{item.address}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default StudentList;
