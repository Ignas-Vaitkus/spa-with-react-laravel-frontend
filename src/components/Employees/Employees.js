import React, { useEffect, useState } from "react";
import StickyTable from "../StickyTable/StickyTable";
import "./Employees.css";

const columns = [
  { id: "first_name", label: "First Name", minWidth: 170 },
  { id: "last_name", label: "Last Name", minWidth: 300 },
  { id: "actions", label: "", minWidth: 30 },
];

const Employees = ({ callback }) => {
  const [projects, setProjects] = useState([{ id: 1, name: "" }]);

  useEffect(() => {
    callback("http://127.0.0.1:8000/api/employees", setProjects).catch(
      console.error
    );

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(projects);

  return (
    <div className="Projects">
      <StickyTable
        {...{
          columns: columns,
          rows: projects,
        }}
      />
    </div>
  );
};

export default Employees;
