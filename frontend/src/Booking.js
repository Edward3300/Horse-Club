import React, { useState } from 'react';

function Booking() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      date,
      time,
      name,
      email
    };

    try {
      const response = await fetch('http://localhost:8080/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setStatusMessage('Запись успешно создана!');
      } else {
        setStatusMessage('Ошибка при создании записи.');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      setStatusMessage('Ошибка при создании записи.');
    }
  };

  return (
    <div>
      <h1>Запись на занятие</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Дата:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Время:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Имя:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Электронная почта:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Записаться</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}

export default Booking;