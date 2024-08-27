import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Calendar.css';
import RequestTurn from './RequestTurn';
import Navigation from './Navigation';
import Diary from './Diary';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

const Calendar = () => {
    const [openDiary, setOpenDiary] = useState(false);
    const [openRequestTurn, setOpenRequestTurn] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);
    const [occupiedTimes, setOccupiedTimes] = useState({});
    const [lastTimeSlots, setLastTimeSlots] = useState({});
    const [currentDate, setCurrentDate] = useState(dayjs());
    const [disabledDays, setDisabledDays] = useState({});
    const { dniProfesional } = useParams();
    const { nombreApellidoProfesional } = useParams();

    useEffect(() => {
        const fetchTurnos = async () => {
            try {
                const response = await fetch(`http://localhost:5292/api/Turnos/ListarTurnos/${dniProfesional}`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                );
                const data = await response.json();

                const occupied = {};
                const lastSlots = {};

                data.forEach(turno => {
                    const startTime = dayjs(turno.fechaTurno);
                    const slotCount = turno.duracionTratamiento / 15;

                    for (let i = 0; i < slotCount; i++) {
                        const timeSlot = startTime.add(i * 15, 'minute').format('YYYY-MM-DD HH:mm');
                        occupied[timeSlot] = true;

                        // Marcar el último slot del turno
                        if (i === slotCount - 1) {
                            lastSlots[timeSlot] = true;
                        }
                    }
                });

                setOccupiedTimes(occupied);
                setLastTimeSlots(lastSlots);
            } catch (error) {
                console.error('Error fetching turnos:', error);
            }
        };

        fetchTurnos();
    }, [dniProfesional, openDiary]);


    const handlePrevNext = (type) => {
        setCurrentDate(currentDate.add(type === 'prev' ? -1 : 1, 'week'));
    };

    const handleToday = () => {
        setCurrentDate(dayjs());
    };

    const handleDayClick = (date) => {
        setSelectedDate(date);
        setSelectedTime(date.format('HH:mm'));
        setSelectedDay(date.format('YYYY-MM-DD'));
        setOpenRequestTurn(true);
    };

    const confirmTurn = (duration) => {
        const timesToBlock = [];
        const startTime = selectedDate;

        for (let i = 0; i < duration / 15; i++) {
            const timeSlot = startTime.add(i * 15, 'minute');
            timesToBlock.push(timeSlot.format('YYYY-MM-DD HH:mm'));
        }

        setOccupiedTimes((prev) => {
            const newOccupiedTimes = { ...prev };
            timesToBlock.forEach((time) => (newOccupiedTimes[time] = true));
            return newOccupiedTimes;
        });

        setOpenRequestTurn(false);
    };

    const isToday = (date) => {
        return date.isSame(dayjs(), 'day');
    };

    const handleOpenDiary = () => {
        setOpenDiary(!openDiary);
    };

    const convertDateToDayNumber = (date) => {
        const day = typeof date === 'string' ? dayjs(date) : dayjs(date);
        return (day.day() === 0 ? 7 : day.day());
    };

    const dayjsToCustomDayNumber = (day) => {
        return (day + 6) % 7 + 1;
    };

    const disableButtonsDayTime = (day, startHour = 0, endHour = 24) => {
        setDisabledDays((prev) => ({
            ...prev,
            [dayjsToCustomDayNumber(day)]: { startHour, endHour },
        }));
    };

    const generateTimeSlots = (start, end, interval) => {
        const slots = [];
        let current = start;
        while (current < end) {
            slots.push(current);
            current = current.add(interval, 'minute');
        }
        return slots;
    };

    const timeSlots = generateTimeSlots(dayjs().hour(9).minute(0), dayjs().hour(21).minute(0), 15);

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
                        {nombreApellidoProfesional}
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

                    {/* <div className="hours">
                        {timeSlots.map((slot, i) => (
                            <div key={i} className="hour">
                                {slot.format('HH:mm')}
                            </div>
                        ))}
                    </div> */}
                    <div className="days-slots">
                        {Array.from({ length: 7 }, (_, i) => {
                            const dayOfWeek = dayjsToCustomDayNumber(currentDate.startOf('week').add(i, 'day').day());
                            const disabledDay = disabledDays[dayOfWeek];

                            return (
                                <div key={i} className="day-slot">
                                    {timeSlots.map((slot, j) => {
                                        const date = currentDate.startOf('week').add(i, 'day').set('hour', slot.hour()).set('minute', slot.minute());
                                        const formattedDate = date.format('YYYY-MM-DD HH:mm');
                                        const isOccupied = occupiedTimes[formattedDate];
                                        const isSelected = selectedDate && selectedDate.isSame(date);
                                        const isDisabled = disabledDay && slot.hour() >= disabledDay.startHour && slot.hour() < disabledDay.endHour;
                                        const isLastSlot = lastTimeSlots[formattedDate];

                                        return (
                                            <button
                                                key={j}
                                                className={`time-slot ${isOccupied ? 'occupied' : ''} ${isSelected ? 'selected' : ''}`}
                                                onClick={() => handleDayClick(date)}
                                                disabled={isOccupied || isDisabled}
                                                style={isLastSlot ? { borderBottom: '2px solid white' } : {}}
                                            >
                                                {slot.format('HH:mm')}
                                            </button>
                                        );
                                    })}

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {openRequestTurn && (
                <RequestTurn
                    day={convertDateToDayNumber(selectedDay)}
                    time={selectedTime}
                    datetime={selectedDay}
                    onConfirmTurn={confirmTurn}
                    onClose={() => {
                        setOpenRequestTurn(false);
                    
                    }}
                    dniProfesional={dniProfesional}
                />
            )}
        </div>
    );
};

export default Calendar;
