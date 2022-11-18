import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Box } from "@mui/system";

const Projects = ({ callback }) => {
  let [projects, setProjects] = useState([{ id: 1, name: "" }]);

  useEffect(() => {
    callback("http://127.0.0.1:8000/api/projects", setProjects).catch(
      console.error
    );
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Projects">
      <Box sx={{ p: 2 }}></Box>
    </div>
  );
};

export default Projects;
