import React, { useState, useCallback } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import '../styles/Calendar.css';
import Navigation from './Navigation';
import RequestTurn from './RequestTurn';


// Configurar localizador para dayjs con idioma español
dayjs.locale('es');
const localizer = dayjsLocalizer(dayjs);

const Calendario = () => {
    const [ventanaAbierta, setVentanaAbierta] = useState(false);
    const [openRequestTurn, setOpenRequestTurn] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [events, setEvents] = useState([]);
    const [occupiedTimes, setOccupiedTimes] = useState({});
    const [view, setView] = useState('week');
    const [currentDate, setCurrentDate] = useState(new Date());

    const handleSelectSlot = useCallback(({ start }) => {
        const isoDate = start.toISOString();
        if (!occupiedTimes[isoDate]) {
            setSelectedEvent(start);
            setOpenRequestTurn(true);
            setVentanaAbierta(true);
        }
    }, [occupiedTimes]);

    const confirmTurn = (duration) => {
        const timesToBlock = [];
        const startTime = new Date(selectedEvent);

        for (let i = 0; i < duration / 15; i++) {
            const timeSlot = new Date(startTime);
            timeSlot.setMinutes(startTime.getMinutes() + (i * 15));
            timesToBlock.push(timeSlot.toISOString());
        }

        const newEvents = timesToBlock.map(time => ({
            start: new Date(time),
            end: new Date(new Date(time).setMinutes(new Date(time).getMinutes() + 15)),
            title: 'Reservado'
        }));

        setEvents(prev => [...prev, ...newEvents]);

        setOccupiedTimes(prev => {
            const newOccupiedTimes = { ...prev };
            timesToBlock.forEach(time => newOccupiedTimes[time] = true);
            return newOccupiedTimes;
        });

        setVentanaAbierta(false);
        setOpenRequestTurn(false);
    };

    const handleNavigate = (date) => {
        setCurrentDate(date);
    };

    const handlePrevNext = (direction) => {
        const newDate = new Date(currentDate);
        if (view === 'week') {
            newDate.setDate(currentDate.getDate() + (direction === 'prev' ? -7 : 7));
        } else if (view === 'month') {
            newDate.setMonth(currentDate.getMonth() + (direction === 'prev' ? -1 : 1));
        }
        setCurrentDate(newDate);
    };

    const handleToday = () => {
        setCurrentDate(new Date());
    };

    return (
        <div className="calendar-container">
            <Navigation />
            <div className="calendar-weekly">
                <header>
                    <div className="icons">
                        <span id="prev" className="material-symbols-rounded" onClick={() => handlePrevNext('prev')}>
                            {"<"}
                        </span>
                        <h3 className="current-date" onClick={() => setView(view === 'week' ? 'month' : 'week')}>
                            {dayjs(currentDate).format('MMMM YYYY').toUpperCase()}
                        </h3>
                        <span id="next" className="material-symbols-rounded" onClick={() => handlePrevNext('next')}>
                            {">"}
                        </span>
                    </div>
                    <button className="today-button" onClick={handleToday}>Hoy</button>
                </header>
                <Calendar
                    localizer={localizer}
                    events={events}
                    selectable
                    onSelectSlot={handleSelectSlot}
                    view={view}
                    onView={() => {}}
                    step={15}
                    timeslots={1}
                    date={currentDate}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height:"calc(100vh - 60px)" }}
                    messages={{
                        month: 'Mes',
                        week: 'Semana',
                        day: 'Día',
                        today: 'Hoy',
                        previous: 'Atrás',
                        next: 'Siguiente',
                        showMore: (total) => `+${total} más`
                    }}
                    min={new Date(2023, 0, 1, 9, 0)} // Configuración de la hora mínima a las 9:00
                    max={new Date(2023, 0, 1, 17, 0)} // Configuración de la hora máxima a las 17:00
                    formats={{
                        dayFormat: (date, culture, localizer) =>
                            localizer.format(date, 'ddd DD', culture).toUpperCase(), // Formato de los días de la semana
                        dayHeaderFormat: (date, culture, localizer) =>
                            localizer.format(date, 'dddd DD', culture).toUpperCase(), // Formato del encabezado del día
                    }}
                    culture='es' // Asegurar que los días se muestren en español
                    onNavigate={handleNavigate}
                />
            </div>
            {ventanaAbierta && openRequestTurn && (
                <RequestTurn
                    dateTime={selectedEvent}
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
