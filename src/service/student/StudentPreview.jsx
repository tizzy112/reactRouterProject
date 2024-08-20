import React from "react";
import { useParams } from "react-router-dom";

const StudentPreview = () => {
  const params = useParams();

  console.log(params, "params");
  return <div>StudentPreview</div>;
};

export default StudentPreview;
