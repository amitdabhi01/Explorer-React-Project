import React from "react";
import { useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

const StudentContainer = () => {
  const [listData, setListData] = useState([]);

  const studentData = (data) => {
    setListData((prev) => [...prev, data])
  }
  return (
    <>
      <StudentForm data={studentData} />
      <StudentList listData={listData}/>
    </>
  );
};

export default StudentContainer;
