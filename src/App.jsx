import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import RecoverAccount from './pages/RecoverAccount.jsx';
import CreateAccount from './pages/CreateAccount.jsx';
import RegisterProduct from './components/RegisterProduct.jsx';
import CalendarMonthly from './components/CalendarMonthly.jsx';
import CalendarWeekly from './components/CalendarWeekly.jsx';
import RequestTurn from './components/RequestTurn.jsx';
import RegisterTurn from './components/RegisterTurn.jsx';
import Prueba from './components/Prueba.jsx';
import Calendar from './pages/Calendar.jsx';
import Diary from './components/Diary.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recoverAccount" element={<RecoverAccount />} />
        <Route path="/calendarWeekly" element={<CalendarWeekly />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/registerProduct" element={<RegisterProduct />} />
        <Route path="/calendarMonthly" element={<CalendarMonthly />} />
        <Route path="/requestTurn" element={<RequestTurn />} />
        <Route path="/registerTurn" element={<RegisterTurn />} />
        <Route path="/prueba" element={<Prueba />} />
        <Route path="/calendar/:dniProfesional/:nombreApellidoProfesional" element={<Calendar />} />
        <Route path="/diary" element={<Diary />} />
        
      </Routes>
    </Router>
  );
}

export default App;
