import React, { useState } from 'react';
import axios from 'axios';

const InputForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    joiningDate: '',
    designation: '',
    contact: '',
    workProfile: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/employees', formData);
      alert('Employee added successfully!');
    } catch (error) {
      console.error(error);
      alert('Error adding employee.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-semibold">Add Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          className="input"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Employee Email"
          className="input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="joiningDate"
          className="input"
          value={formData.joiningDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="designation"
          placeholder="Designation"
          className="input"
          value={formData.designation}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          className="input"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="workProfile"
          placeholder="Work Profile Link"
          className="input"
          value={formData.workProfile}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn">
          Add Member
        </button>
      </form>
    </div>
  );
};

export default InputForm;
