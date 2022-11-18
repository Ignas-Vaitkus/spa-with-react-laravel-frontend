import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Box } from "@mui/system";

const Projects = ({ callback }) => {
  let [projects, setProjects] = useState([{ id: 1, name: "" }]);

  useEffect((callback) => {
    callback("http://127.0.0.1:8000/api/projects", setProjects).catch(
      console.error
    );
  }, []);

  return (
    <div className="Projects">
      <Box sx={{ p: 2 }}></Box>
    </div>
  );
};

export default Projects;
