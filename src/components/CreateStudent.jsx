// components/CreateStudent.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../studentSlice';

const CreateStudent = ({ history }) => {
  const dispatch = useDispatch();
  const [studentData, setStudentData] = useState({ name: '', email: '', gender: '', age: '' });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    dispatch(addStudent(studentData));
    history.push('/read');
  };

  return (
    <div>
      <h2>Create Student</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={studentData.name}
          onChange={(e) => setStudentData({ ...studentData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={studentData.email}
          onChange={(e) => setStudentData({ ...studentData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Gender"
          value={studentData.gender}
          onChange={(e) => setStudentData({ ...studentData, gender: e.target.value })}
        />
        <input
          type="text"
          placeholder="Age"
          value={studentData.age}
          onChange={(e) => setStudentData({ ...studentData, age: e.target.value })}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateStudent;
