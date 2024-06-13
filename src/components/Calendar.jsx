import React, { useState, useEffect } from 'react';
import '../styles/Calendar.css';
import RequestTurn from './RequestTurn';
import Navigation from './Navigation';
import Diary from './Diary';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

const Calendario = () => {
    const [openDiary, setOpenDiary] = useState(false);
    const [ventanaAbierta, setVentanaAbierta] = useState(false);
    const [openRequestTurn, setOpenRequestTurn] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [occupiedTimes, setOccupiedTimes] = useState({});
    const [currentDate, setCurrentDate] = useState(dayjs());

    useEffect(() => {
        // Fetch data from the database and set occupiedTimes
        // Example: setOccupiedTimes({ '2024-06-11T09:00:00': true });
    }, []);

    const handlePrevNext = (type) => {
        setCurrentDate(currentDate.add(type === 'prev' ? -1 : 1, 'week'));
    };

    const handleToday = () => {
        setCurrentDate(dayjs());
    };

    const handleDayClick = (date) => {
        setSelectedDate(date);
        console.log(currentDate.$H);
        setVentanaAbierta(true);
        setOpenRequestTurn(true);
    };

    const confirmTurn = (duration) => {
        const timesToBlock = [];
        const startTime = selectedDate;

        for (let i = 0; i < duration / 15; i++) {
            const timeSlot = startTime.add(i * 15, 'minute');
            timesToBlock.push(timeSlot.format());
        }

        setOccupiedTimes((prev) => {
            const newOccupiedTimes = { ...prev };
            timesToBlock.forEach((time) => (newOccupiedTimes[time] = true));
            return newOccupiedTimes;
        });

        setVentanaAbierta(false);
        setOpenRequestTurn(false);
    };

    const isToday = (date) => {
        return date.isSame(dayjs(), 'day');
    };


    const handleOpenDiary = () => {
        setOpenDiary(!openDiary);
        console.log(openDiary);
    };
    return (
        <div className="calendar-container">
            <Navigation />
            {openDiary && <Diary onOpen={handleOpenDiary} />}
            <div className={openDiary ? "calendar-weekly reduced" : "calendar-weekly"}>
                <div className='nav'>
                    <span className="btn-today" onClick={handleOpenDiary}>
                        Agenda
                    </span>
                    <h3>
                        ODONTOLOGIA
                    </h3>
                    <span className="btn-today" onClick={handleToday}>
                        Hoy
                    </span>

                </div>
                <header>
                    <div className="icons">
                        <span className="material-symbols-rounded" onClick={() => handlePrevNext('prev')}>
                            {"<"}
                        </span>

                        <h3 className="current-date">
                            {currentDate.format('MMMM YYYY').toUpperCase()}
                        </h3>

                        <span className="material-symbols-rounded" onClick={() => handlePrevNext('next')}>
                            {">"}
                        </span>
                    </div>
                </header>

                <div className="calendar-body">
                    <div className="days">
                        {Array.from({ length: 7 }, (_, i) => (
                            <div key={i} className={`day-slot ${isToday(currentDate.startOf('week').add(i, 'day')) ? 'day-today' : ''}`}>
                                {currentDate.startOf('week').add(i, 'day').format('ddd D').toUpperCase()}
                            </div>
                        ))}
                    </div>

                    <div className="hours">
                        {Array.from({ length: 33 }, (_, i) => (
                            <div key={i} className="hour">
                                {Math.floor(i / 4) + 9}:{(i % 4) * 15 === 0 ? '00' : (i % 4) * 15}
                            </div>
                        ))}
                    </div>
                    <div className="days-slots">
                        {Array.from({ length: 7 }, (_, i) => (
                            <div key={i} className="day-slot">
                                {Array.from({ length: 33 }, (_, j) => (
                                    <button
                                        key={j}
                                        className={`time-slot ${occupiedTimes[currentDate.startOf('week').add(i, 'day').set('hour', Math.floor(j / 4) + 6).set('minute', (j % 4) * 15).format()]
                                            ? 'occupied'
                                            : ''
                                            }`}
                                        onClick={() => handleDayClick(currentDate.startOf('week').add(i, 'day').set('hour', Math.floor(j / 4) + 6).set('minute', (j % 4) * 15))}
                                    >
                                        {Math.floor(j / 4) + 9}:{(j % 4) * 15 === 0 ? '00' : (j % 4) * 15}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {ventanaAbierta && openRequestTurn && (
                <RequestTurn
                    dateTime={selectedDate}
                    onConfirmTurn={confirmTurn}
                    onClose={() => {
                        setVentanaAbierta(false);
                        setOpenRequestTurn(false);
                    }}
                />
            )}
        </div>
    );
};

export default Calendario;
