// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import '../styles/CalendarAlternativo.css';
// import RequestTurn from './RequestTurn';
// import Navigation from './Navigation';

// const BotonAbrirVentana = ({ toggleVentana, content, disabled }) => {
//     return (
//         <button onClick={toggleVentana} disabled={disabled}>
//             {content}
//         </button>
//     );
// };

// const CalendarWeekly = () => {
//     const [ventanaAbierta, setVentanaAbierta] = useState(false);
//     const [openRequestTurn, setOpenRequestTurn] = useState(false);
//     const ventanaRef = useRef(null);
//     const calendarRef = useRef(null);

//     const [currentDate, setCurrentDate] = useState(new Date());
//     const [week, setWeek] = useState([]);
//     const [fecha, setFecha] = useState("");
//     const [hora, setHora] = useState("");
//     const [occupiedTimes, setOccupiedTimes] = useState({});

//     const daysOfWeek = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
//     const months = [
//         "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
//         "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
//     ];

//     useEffect(() => {
//         renderWeek();
//         window.addEventListener('resize', handleResize);
//         handleResize();

//         return () => window.removeEventListener('resize', handleResize);
//     }, [currentDate]);

//     // Días de la semana
//     const renderWeek = useCallback(() => {
//         const startOfWeek = new Date(currentDate);
//         const dayOfWeek = currentDate.getDay();
//         const diff = (dayOfWeek === 0 ? 6 : dayOfWeek - 1);

//         startOfWeek.setDate(currentDate.getDate() - diff);

//         const weekDays = Array.from({ length: 7 }, (_, i) => {
//             const date = new Date(startOfWeek);
//             date.setDate(startOfWeek.getDate() + i);
//             return {
//                 day: daysOfWeek[i],
//                 date: date.getDate(),
//                 month: date.getMonth(),
//                 year: date.getFullYear(),
//                 isToday: date.toDateString() === new Date().toDateString()
//             };
//         });

//         setWeek(weekDays);
//     }, [currentDate]);

//     // Abrir y cerrar ventana
//     const toggleVentana = useCallback(() => {
//         setVentanaAbierta(prevState => !prevState);
//     }, []);

//     const handleClickOutside = useCallback((event) => {
//         if (ventanaRef.current && !ventanaRef.current.contains(event.target)) {
//             setVentanaAbierta(false);
//         }
//     }, []);

//     useEffect(() => {
//         if (ventanaAbierta) {
//             document.addEventListener('mousedown', handleClickOutside);
//         } else {
//             document.removeEventListener('mousedown', handleClickOutside);
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [ventanaAbierta, handleClickOutside]);

//     // Dirección sobre la semana
//     const handlePrevNext = (direction) => {
//         const newDate = new Date(currentDate);
//         newDate.setDate(currentDate.getDate() + (direction === 'prev' ? -7 : 7));
//         setCurrentDate(newDate);
//     };

//     // Manejar el redimensionamiento
//     const handleResize = () => {
//         if (calendarRef.current) {
//             const containerWidth = calendarRef.current.parentNode.offsetWidth;
//             const containerHeight = calendarRef.current.parentNode.offsetHeight;
//             const calendarWidth = calendarRef.current.offsetWidth;
//             const calendarHeight = calendarRef.current.offsetHeight;

//             const scaleWidth = containerWidth / calendarWidth;
//             const scaleHeight = containerHeight / calendarHeight;
//             const scale = Math.min(scaleWidth, scaleHeight);
//         }
//     };

//     // Abre "RequestTurn" y le asigna la fecha y hora
//     const conocerFechaHora = useCallback((day, hour) => {
//         setOpenRequestTurn(true);
//         setFecha(`${day.day}, ${day.date} ${months[day.month]} ${day.year}`);
//         setHora(hour); // Mantener el formato 'hora:minuto'
//         toggleVentana();
//     }, [months, toggleVentana]);

//     // Confirma los turnos
//     const confirmTurn = (duration) => {
//         const [hourPart, minutePart] = hora.split(':').map(Number);
//         const [selectedDay] = fecha.split(',')[1].trim().split(' ');
//         const day = week.find(d => d.date === parseInt(selectedDay));

//         if (day) {
//             const startTime = new Date(day.year, day.month, day.date, hourPart, minutePart);
//             const timesToBlock = [];
//             for (let i = 0; i < duration / 15; i++) {
//                 const timeSlot = new Date(startTime);
//                 timeSlot.setMinutes(startTime.getMinutes() + (i * 15));
//                 timesToBlock.push(timeSlot.toISOString());
//             }

//             // Actualizar el estado de occupiedTimes
//             setOccupiedTimes((prev) => {
//                 const newOccupiedTimes = { ...prev };
//                 timesToBlock.forEach(time => newOccupiedTimes[time] = true);
//                 return newOccupiedTimes;
//             });

//             setVentanaAbierta(false); // Cerrar la ventana de confirmación
//             setOpenRequestTurn(false); // Resetear estado del modal
//         }
//     };

//     const currentMonth = months[currentDate.getMonth()];
//     const currentYear = currentDate.getFullYear();

//     // Completa la columna de horas
//     const hours = Array.from({ length: 32 }, (_, i) => {
//         const hour = Math.floor(i / 4) + 9;
//         const minute = (i % 4) * 15;
//         return `${hour}:${minute === 0 ? '00' : minute}`;
//     });

//     // Comprueba si el turno se encuentra ocupado
//     const isTimeSlotOccupied = (day, hour) => {
//         const [hourPart, minutePart] = hour.split(':').map(Number);
//         const timeSlot = new Date(day.year, day.month, day.date, hourPart, minutePart);
//         return occupiedTimes[timeSlot.toISOString()];
//     };

//     return (
//         <div>
//             <Navigation />
//             <div className="calendar-container">
//                 <div className="calendar-weekly" ref={calendarRef}>
//                     <header>
//                         <div className="icons">
//                             <span id="prev" className="material-symbols-rounded" onClick={() => handlePrevNext('prev')}>{"<"}</span>
//                             <h3 className="current-date">{`${currentMonth} ${currentYear}`}</h3>
//                             <span id="next" className="material-symbols-rounded" onClick={() => handlePrevNext('next')}>{">"}</span>
//                         </div>
//                     </header>
//                     <table className="calendar-body">
//                         <thead>
//                             <tr>
//                                 <th></th>
//                                 {week.map((day, index) => (
//                                     <th key={index} className={day.isToday ? 'active' : ''}>
//                                         {day.day} {day.date} {/*/ {day.month + 1}*/}
//                                     </th>
//                                 ))}
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {hours.map((hour, hourIndex) => (
//                                 <tr className='container-time-slot' key={hourIndex}>
//                                     <td>{hour}</td>
//                                     {week.map((day, dayIndex) => (
//                                         <td key={dayIndex} className={isTimeSlotOccupied(day, hour) ? 'occupied' : ''}>
//                                             <BotonAbrirVentana
//                                                 className="time-slot"
//                                                 toggleVentana={() => {
//                                                     if (!isTimeSlotOccupied(day, hour)) {
//                                                         conocerFechaHora(day, hour);
//                                                     }
//                                                 }}
//                                                 content={`${hour}`}
//                                                 disabled={isTimeSlotOccupied(day, hour)}
                                                
//                                             />
//                                             {ventanaAbierta && openRequestTurn && (
//                                                 <RequestTurn
//                                                     dateTime={fecha}
//                                                     hour={hora}
//                                                     ref={ventanaRef}
//                                                     onClose={toggleVentana}
//                                                     onConfirmTurn={confirmTurn}
//                                                 />
//                                             )}
//                                         </td>
//                                     ))}
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CalendarWeekly;
