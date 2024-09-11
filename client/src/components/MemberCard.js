import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MemberCard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/employees');
        setEmployees(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {employees.map((employee) => (
        <div key={employee._id} className="card bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">{employee.name}</h3>
          <p>{employee.email}</p>
          <p>Joined: {new Date(employee.joiningDate).toDateString()}</p>
          <p>Designation: {employee.designation}</p>
          <p>Contact: {employee.contact}</p>
          <a
            href={employee.workProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Work Profile
          </a>
        </div>
      ))}
    </div>
  );
};

export default MemberCard;
