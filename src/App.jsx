import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
/*Pages*/ 
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import RecoverAccount from './Pages/RecoverAccount.jsx';
import CreateAccount from './Pages/CreateAccount.jsx';
import RegisterProduct from './components/RegisterProduct.jsx';
import Calendar from './Pages/Calendar.jsx';
 import ManageProfessionals from './Pages/ManageProfessionals.jsx';
import ManagePatients from './Pages/ManagePatients.jsx';
import ManageServices from './Pages/ManageServices.jsx';
import ManageBenefits from './Pages/ManageBenefits.jsx'
import CRUPatient from './Pages/CRUPatient.jsx';
import CRUProfessional from './Pages/CRUProfessional.jsx';
// import CalendarMonthly from './components/CalendarMonthly.jsx';
// import CalendarWeekly from './components/CalendarWeekly.jsx';

/*Components*/
import ModalRequestTurn from './components/ModalRequestTurn.jsx';

import Prueba from './components/Prueba.jsx';
import Diary from './components/Diary.jsx';
import { Search } from './components/Search.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recoverAccount" element={<RecoverAccount />} />
        {/* <Route path="/calendarWeekly" element={<CalendarWeekly />} /> */}
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/registerProduct" element={<RegisterProduct />} />
        {/* <Route path="/calendarMonthly" element={<CalendarMonthly />} /> */}
        <Route path="/modalRequestTurn" element={<ModalRequestTurn />} />
        {/* <Route path="/registerTurn" element={<RegisterTurn />} /> */}
        <Route path="/prueba" element={<Prueba />} />
        <Route path="/calendar/:dniProfesional/:nombreApellidoProfesional" element={<Calendar />} />
        <Route path="/diary" element={<Diary />} />
        {/* <Route path="/manageProfessionals" element={<ManageProfessionals />} /> */}
        <Route path="/managePatients" element={<ManagePatients />} />
        <Route path="/manageServices" element={<ManageServices />} />
        <Route path="/manageProfessionals" element={<ManageProfessionals />} />
        {/* <Route path="/manageProfessions" element={<ManageServices />} /> */}
        <Route path="/manageBenefits" element={<ManageBenefits />} />
        <Route path="/CRUPatient" element={<CRUPatient />} />
        <Route path="/CRUProfessional" element={<CRUProfessional />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
