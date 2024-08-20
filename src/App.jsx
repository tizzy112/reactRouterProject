import React from "react";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./service/Service";
import ErrorPage from "./ErrorPage";
import Student from "./service/student/Student";
import CarHire from "./service/CarHire";
import CarRepair from "./service/CarRepair";
import StudentPreview from "./service/student/StudentPreview";
import Blog from "../src/blog/Blog";
import BlogCard from "./blog/BlogCard";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/*nested route */}
        <Route path="/service" element={<Service />}>
          <Route path="carhire" element={<CarHire />} />
          <Route path="carrepair" element={<CarRepair />} />
        </Route>

        {/*nested route */}
        <Route path="/student" element={<Student />}>
          <Route path=":id" element={<StudentPreview />} />
        </Route>

        {/*nested route */}

        <Route path="/blog" element={<Blog />}>
          <Route path=":id" element={<BlogCard />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
