import "./App.css";
import * as React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { Box, Tab, Tabs } from "@mui/material";
import Projects from "./components/Projects/Projects";
import Employees from "./components/Employees/Employees";
import Project from "./components/Project/Project";

const fetchData = async (url, setValue) => {
  const response = await fetch(url);

  const objects = await response.json();

  setValue(objects);
};

const postData = async (url, data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const putData = async (url, data = {}) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const patchData = async (url) => {
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

const deleteData = async (url) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

function App() {
  const [tabValue, steTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    steTabValue(newValue);
  };

  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={tabValue} onChange={handleTabChange}>
              <Tab label="Projects" component={Link} to="/projects" />
              <Tab label="Employees" component={Link} to="/employees" />
            </Tabs>
          </Box>
        </Box>
        <Routes>
          <Route path="" element={<Navigate to="/projects" />} />
          <Route path="/" element={<Navigate to="/projects" />} />
          <Route
            path="/projects"
            element={
              <Projects get={fetchData} post={postData} del={deleteData} />
            }
          />
          <Route path="/project/:id" element={<Project />} />
          <Route
            path="/employees"
            element={
              <Employees get={fetchData} post={postData} del={deleteData} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//
// patch={patchData}

export default App;
