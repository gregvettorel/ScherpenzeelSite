import React, { useState } from 'react';
import '../styles/calendar.css';
import { motion } from 'framer-motion';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = () => {
  const today = new Date();
  const [date, setDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDayIndex = new Date(year, month, 1).getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();

  const handleMonthChange = (offset) => {
    const newDate = new Date(year, month + offset, 1);
    setDate(newDate);
  };

  const daysArray = [];
  for (let i = 0; i < firstDayIndex; i++) {
    daysArray.push(null);
  }
  for (let i = 1; i <= lastDay; i++) {
    daysArray.push(i);
  }

  return (
    <div className="calendar-page">
      <motion.div
        className="calendar-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button onClick={() => handleMonthChange(-1)}>&lt;</button>
        <h2>{date.toLocaleString('default', { month: 'long' })} {year}</h2>
        <button onClick={() => handleMonthChange(1)}>&gt;</button>
      </motion.div>

      <motion.div
        className="calendar-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {days.map((d) => (
          <div key={d} className="calendar-day-name">{d}</div>
        ))}

        {daysArray.map((day, idx) => (
          <motion.div
            key={idx}
            className={`calendar-day ${day === today.getDate() &&
              date.getMonth() === today.getMonth() &&
              date.getFullYear() === today.getFullYear() ? 'today' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {day || ''}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Calendar;
