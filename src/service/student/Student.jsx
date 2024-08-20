import React from "react";
import { Outlet } from "react-router-dom";

const Student = () => {
  return (
    <div style={{ background: "red" }}>
      Student
      <Outlet />
    </div>
  );
};

export default Student;
