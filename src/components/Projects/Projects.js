import { Button, Card, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import StickyTable from "../StickyTable/StickyTable";
import "./Projects.css";

const columns = [
  { id: "name", label: "Project Name", minWidth: 170 },
  { id: "employees_names", label: "Employees", minWidth: 300 },
  { id: "actions", label: "", minWidth: 30 },
];

const Projects = ({ get, post, put, patch, del }) => {
  const [projects, setProjects] = useState([
    { id: 1, name: "", employees_names: "" },
  ]);

  const [newProject, setNewProject] = useState("");

  useEffect(() => {
    get("http://127.0.0.1:8000/api/project-employee", setProjects).catch(
      console.error
    );

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addProjectHandler = async (event) => {
    event.preventDefault();

    console.log({
      name: newProject,
    });

    await post("http://127.0.0.1:8000/api/projects", {
      name: newProject,
    }).catch(console.error);

    await get("http://127.0.0.1:8000/api/project-employee", setProjects).catch(
      console.error
    );

    setNewProject("");
  };

  const changeHandler = (event) => {
    setNewProject(event.target.value);
  };

  return (
    <div className="Projects">
      <StickyTable
        {...{
          columns: columns,
          rows: projects,
        }}
      />

      <form onSubmit={addProjectHandler}>
        <Card
          sx={{ p: 2, m: 1, display: "flex", alignItems: "center", gap: 5 }}
        >
          <TextField
            id="outlined-basic"
            label="New Project"
            variant="outlined"
            value={newProject}
            onChange={changeHandler}
          />
          <Button variant="outlined" type="submit" sx={{}}>
            Submit
          </Button>
        </Card>
      </form>
    </div>
  );
};

export default Projects;
