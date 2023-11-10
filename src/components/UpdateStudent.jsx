// components/UpdateStudent.jsx
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editStudent } from '../studentSlice';
import { Link } from 'react-router-dom';

const UpdateStudent = ({ match, history }) => {
  const studentId = match.params.id;
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const [studentData, setStudentData] = useState({ name: '', email: '', gender: '', age: '' });

  useEffect(() => {
    const selectedStudent = students.find((student) => student.id === parseInt(studentId));
    if (selectedStudent) {
      setStudentData(selectedStudent);
    }
  }, [studentId, students]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    dispatch(editStudent({ id: parseInt(studentId), updatedStudent: studentData }));
    history.push('/read');
  };

  return (
    <div>
      <h2>Edit Student</h2>
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
        <button type="submit">Update</button>
        <Link to="/read">Cancel</Link>
      </form>
    </div>
  );
};

export default UpdateStudent;
