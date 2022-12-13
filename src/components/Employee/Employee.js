import React, { useEffect, useState } from "react";
import "./Employee.css";
import { useNavigate, useParams } from "react-router-dom";
import { Card, TextField, Button } from "@mui/material";

const Employee = ({ values }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newEmployee, setNewEmployee] = useState({
    first_name: "",
    last_name: "",
  });

  useEffect(() => {
    const get = async () => {
      if (id) {
        const response = await fetch(
          "http://127.0.0.1:8000/api/employees/" + id,
          {
            method: "GET",
          }
        );

        const data = await response.json();

        setNewEmployee(data);
      }
    };

    get();
  }, [id]);

  const firstNameChangehandler = (event) => {
    setNewEmployee({ ...newEmployee, first_name: event.target.value });
  };

  const lastNameChangeHandler = (event) => {
    setNewEmployee({ ...newEmployee, last_name: event.target.value });
  };

  //This function can be passed as a prop and added parameters of data and data object (project/employee)

  const submitProjectHandler = () => {
    let [url, method] = ["http://127.0.0.1:8000/api", ""];

    if (id) {
      [url, method] = [url + "/employees/" + id, "PUT"];
    } else {
      [url, method] = [url + "/employees", "POST"];
    }

    const callback = async (event) => {
      event.preventDefault();

      console.log(JSON.stringify(newEmployee));

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      });

      console.log(response);

      navigate("/employees");
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
            label={"First Name"}
            variant="outlined"
            value={newEmployee.first_name}
            onChange={firstNameChangehandler}
          />
          <TextField
            id="outlined-basic"
            label={"Last Name"}
            variant="outlined"
            value={newEmployee.last_name}
            onChange={lastNameChangeHandler}
          />
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </Card>
      </form>
    </div>
  );
};

export default Employee;
