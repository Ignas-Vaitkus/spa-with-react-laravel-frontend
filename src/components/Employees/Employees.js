import { Button, Card, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import StickyTable from "../StickyTable/StickyTable";
import "./Employees.css";

const columns = [
  { id: "first_name", label: "First Name", minWidth: 170 },
  { id: "last_name", label: "Last Name", minWidth: 300 },
];

const Employees = ({ get, post, del }) => {
  const [employees, setEmployees] = useState([{ id: 1, name: "" }]);

  const [newEmployee, setNewEmployee] = useState({
    first_name: "",
    last_name: "",
  });
  useEffect(() => {
    get("http://127.0.0.1:8000/api/employees", setEmployees).catch(
      console.error
    );

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addEmployeeHandler = async (event) => {
    event.preventDefault();

    await post("http://127.0.0.1:8000/api/employees", {
      first_name: newEmployee.first_name,
      last_name: newEmployee.last_name,
    }).catch(console.error);

    setNewEmployee({
      first_name: "",
      last_name: "",
    });

    await get("http://127.0.0.1:8000/api/employees", setEmployees).catch(
      console.error
    );
  };

  const deleteEmployeeHandler = async (id) => {
    await del("http://127.0.0.1:8000/api/employees/" + id).catch(console.error);

    await get("http://127.0.0.1:8000/api/employees", setEmployees).catch(
      console.error
    );
  };

  return (
    <div className="Projects">
      <StickyTable
        {...{
          columns: columns,
          rows: employees,
          del: deleteEmployeeHandler,
        }}
      />
      <form onSubmit={addEmployeeHandler}>
        <Card
          sx={{ p: 2, m: 1, display: "flex", alignItems: "center", gap: 5 }}
        >
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            value={newEmployee.first_name}
            onChange={(e) =>
              setNewEmployee({
                first_name: e.target.value,
                last_name: newEmployee.last_name,
              })
            }
          />
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            value={newEmployee.last_name}
            onChange={(e) =>
              setNewEmployee({
                first_name: newEmployee.first_name,
                last_name: e.target.value,
              })
            }
          />
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </Card>
      </form>
    </div>
  );
};

export default Employees;
