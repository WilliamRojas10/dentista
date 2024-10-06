// import React, { useState, useEffect } from 'react';
// import '../styles/CalendarMonthly.css';

// const CalendarMonthly= () => {
//     const [date, setDate] = useState(new Date());
//     const [currYear, setCurrYear] = useState(date.getFullYear());
//     const [currMonth, setCurrMonth] = useState(date.getMonth());
//     const [days, setDays] = useState([]);
//     const months = [
//         "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
//         "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
//     ];

//     useEffect(() => {
//         renderCalendar();
//     }, [currYear, currMonth]);

//     const renderCalendar = () => {
//         const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
//         const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
//         const lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
//         const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

//         const liTag = [];

//         for (let i = firstDayofMonth; i > 0; i--) {
//             liTag.push(<li key={`prev-${i}`} className="inactive">{lastDateofLastMonth - i + 1}</li>);
//         }

//         for (let i = 1; i <= lastDateofMonth; i++) {
//             const isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
//             liTag.push(<li key={`curr-${i}`} className={isToday}>{i}</li>);
//         }

//         for (let i = lastDayofMonth; i < 6; i++) {
//             liTag.push(<li key={`next-${i}`} className="inactive">{i - lastDayofMonth + 1}</li>);
//         }

//         setDays(liTag);
//     };

//     const handlePrevNext = (direction) => {
//         let newMonth = currMonth + (direction === 'prev' ? -1 : 1);

//         if (newMonth < 0 || newMonth > 11) {
//             const newDate = new Date(currYear, newMonth, new Date().getDate());
//             setDate(newDate);
//             setCurrYear(newDate.getFullYear());
//             setCurrMonth(newDate.getMonth());
//         } else {
//             setDate(new Date());
//             setCurrMonth(newMonth);
//         }
//     };

//     return (
//         <div className="calendar-weekly">
//             <div className="calendar">
//                 <header>
//                     <p className="current-date">{`${months[currMonth]} ${currYear}`}</p>
//                     <div className="icons">
//                         <span id="prev" className="material-symbols-rounded" onClick={() => handlePrevNext('prev')}>{"<"}</span>
//                         <span id="next" className="material-symbols-rounded" onClick={() => handlePrevNext('next')}>{">"}</span>
//                     </div>
//                 </header>
//                 <div className="calendar-body">
//                     <ul className="weeks">
//                         <li>Dom</li>
//                         <li>Lun</li>
//                         <li>Mar</li>
//                         <li>Mié</li>
//                         <li>Jue</li>
//                         <li>Vie</li>
//                         <li>Sáb</li>
//                     </ul>
//                     <ul className="days">
//                         {days}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CalendarMonthly;
