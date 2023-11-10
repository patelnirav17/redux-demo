// components/ReadStudent.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent } from '../studentSlice';
import { Link } from 'react-router-dom';

const ReadStudent = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.gender}</td>
              <td>{student.age}</td>
              <td>
                <button onClick={() => handleDelete(student.id)}>Delete</button>
                <Link to={`/update/${student.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadStudent;
