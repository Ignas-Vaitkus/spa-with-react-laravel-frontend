import React, { useEffect, useState } from "react";
import StickyTable from "../StickyTable/StickyTable";
import "./Projects.css";

const columns = [
  { id: "name", label: "Project Name", minWidth: 170 },
  { id: "employees_names", label: "Employees", minWidth: 300 },
  { id: "actions", label: "", minWidth: 30 },
];

const Projects = ({ callback }) => {
  const [projects, setProjects] = useState([{ id: 1, name: "" }]);

  useEffect(() => {
    callback("http://127.0.0.1:8000/api/project-employee", setProjects).catch(
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

export default Projects;
