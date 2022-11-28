import React, { useEffect, useState } from "react";
import "./Project.css";
import { useNavigate, useParams } from "react-router-dom";
import { Card, TextField, Button } from "@mui/material";

const Project = ({ values }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newProject, setNewProject] = useState("");

  useEffect(() => {
    const get = async () => {
      if (id) {
        const response = await fetch(
          "http://127.0.0.1:8000/api/projects/" + id,
          {
            method: "GET",
          }
        );

        const data = await response.json();

        setNewProject(data.name);
      }
    };

    get();
  }, []);

  const changeHandler = (event) => {
    setNewProject(event.target.value);
  };

  const submitProjectHandler = () => {
    let [url, method] = ["http://127.0.0.1:8000/api", ""];

    if (id) {
      [url, method] = [url + "/projects/" + id, "PUT"];
    } else {
      [url, method] = [url + "/projects", "POST"];
    }

    const callback = async (event) => {
      event.preventDefault();

      const response = await fetch(url, {
        method: method,
        body: JSON.stringify({ name: newProject }),
      });

      console.log(response);

      // navigate("/projects");
    };
    return callback;
  };

  return (
    <div className="Project">
      <form onSubmit={submitProjectHandler()}>
        <Card
          sx={{ p: 2, m: 1, display: "flex", alignItems: "center", gap: 5 }}
        >
          <TextField
            id="outlined-basic"
            label={id ? "Project Name" : "New Project"}
            variant="outlined"
            value={newProject}
            onChange={changeHandler}
          />
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </Card>
      </form>
    </div>
  );
};

export default Project;
