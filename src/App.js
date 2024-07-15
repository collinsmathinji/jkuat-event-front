import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Login from './components/login';
import EventCalendar from './components/EventCalendar';
import AdminPanel from './components/AdminPanel';
import SignUp from './components/signUp';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<EventCalendar />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/calendar" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;