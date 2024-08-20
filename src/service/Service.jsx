import { Outlet } from "react-router-dom";

const Service = () => {
  return (
    <div style={{ background: "red" }}>
      Service
      <Outlet />
    </div>
  );
};

export default Service;
