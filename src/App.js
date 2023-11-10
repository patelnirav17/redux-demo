// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateStudent from './components/CreateStudent';
import ReadStudent from './components/ReadStudent';
import UpdateStudent from './components/UpdateStudent';

function App() {
  return (
    <Router>
      <div>
        <h1>Student CRUD Application</h1>
        <Routes>
          <Route path="/" element={<CreateStudent/>} />
          <Route path="/read" element={<ReadStudent/>} />
          <Route path="/update/:id" element={<UpdateStudent/>} />
          {/* <Route path="/" element={<ReadStudent/>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
