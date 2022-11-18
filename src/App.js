import "./App.css";
import * as React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { Box, Tab, Tabs } from "@mui/material";
import Projects from "./components/Projects/Projects";
import Employees from "./components/Employees/Employees";

const fetchData = async (url, setValue) => {
  const response = await fetch(url);

  const objects = await response.json();

  setValue(objects);
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
          <Route path="/projects" element={<Projects callback={fetchData} />} />
          <Route
            path="/employees"
            element={<Employees callback={fetchData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
