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
      const showStudentCard = studentData.find();
      setShowDetails(props.showStudentDetails);
    };
    return (
      <button className="btn btn-primary" onClick={showDetails}>
        Details
      </button>
    );
  };

  /* const TableRow = () => {
    return (
      
    );
  };*/

  return (
    <div>
      <TableHader />
      <TableAction />
    </div>
  );
};

export default DataTable;
