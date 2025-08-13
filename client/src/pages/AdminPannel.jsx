import React, { useEffect, useState } from "react";
 
import { useNavigate } from "react-router-dom";
 
import Overview from "../components/Admin/Overview";
import AddSubAddmin from "../components/Admin/AddSubAddmin";
import Sidebar from "../components/Admin/sidebar";
 

const AdminPannel = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("overview");
  

 

  return (
    <>
      <div className="flex">
        <Sidebar active={active} setActive={setActive}  />
        <div className="w-full">
          {active === "overview" && <Overview />}
          {active === "addsubadmin" && <AddSubAddmin />}
           
        </div>
      </div>
    </>
  );
};

export default AdminPannel;