import React, { useState } from "react";

const DataTable = () => {
  const studentData = [
    {
      id: 1,
      firstName: "Liljana",
      lastName: "Ristevska",
      age: 38,
      birthdate: "1984-11-20",
      country: "Sweden",
      city: "Växjö",
    },
    {
      id: 2,
      firstName: "Klara",
      lastName: "Klarsson",
      age: 50,
      birthdate: "1973-05-05",
      country: "Sweden",
      city: "Stockholm",
    },
    {
      id: 3,
      firstName: "Mira",
      lastName: "Mirsson",
      age: 67,
      birthdate: "1956-06-26",
      country: "Sweden",
      city: "Växjö",
    },
    {
      id: 4,
      firstName: "Tommy",
      lastName: "Tomsson",
      age: 40,
      birthdate: "1982-10-20",
      country: "Sweden",
      city: "Stockholm",
    },
  ];

  const [studentList, setStudentList] = useState(studentData);

  const [showDetails, setShowDetails] = useState(false);

  const [students, setStudents] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    age: 0,
    birthdate: "",
    country: "",
    city: "",
  });

  const TableHader = () => {
    return (
      <thead>
        <tr>
          <th>Id</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Age</th>
          <th>Birthdate</th>
          <th>Country</th>
          <th>City</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  };

  const TableAction = (props) => {
    const showStudentDetails = () => {
      setStudents(props.showStudentsInfo);
      setShowDetails(true);
    };

    return (
      <button className="btn btn-primary" onClick={showStudentDetails}>
        Details
      </button>
    );
  };

  const TableRow = (props) => {
    const tableRows = props.info;

    return (
      <tbody>
        {tableRows.map((students) => {
          const rows = (
            <tr key={students.id}>
              <td>{students.id}</td>
              <td>{students.firstName}</td>
              <td>{students.lastName}</td>
              <td>{students.age}</td>
              <td>{students.birthdate}</td>
              <td>{students.country}</td>
              <td>{students.city}</td>
              <td>
                <TableAction showStudentsInfo={students} />
              </td>
            </tr>
          );
          return rows;
        })}
      </tbody>
    );
  };

  const ShowStudentDetails = () => {
    if (showDetails === true) {
      return (
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h3>Student Information</h3>
          </div>
          <div className="card-body">
            <p>Student Id: {students.id}</p>
            <p>First Name: {students.firstName}</p>
            <p>Last Name: {students.lastName} </p>
            <p>Age: {students.age}</p>
            <p>Birthdate: {students.birthdate}</p>
            <p>Country: {students.country}</p>
            <p>City: {students.city}</p>
            <button
              className="btn btn-success"
              onClick={() => {
                setStudents({});
                setShowDetails(false);
              }}
            >
              Hide
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container mt-4">
      <h2>Student Data</h2>
      <table class="table table-dark table-striped">
        <TableHader />

        <TableRow info={studentData} />
      </table>
      <ShowStudentDetails students={students} />
    </div>
  );
};

export default DataTable;
