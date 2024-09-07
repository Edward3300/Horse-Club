import React, { useState, useEffect } from 'react';

function Events() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/events')
      .then(response => response.json())
      .then(data => {
        console.log("DATA=", data);
        setEvents(data)
      })
      .catch(err => setError('Ошибка при загрузке данных.'));
  }, []);

  const handleRegister = (eventId) => {
    fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ eventId }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Вы успешно зарегистрировались на мероприятие!');
      } else {
        alert('Ошибка при регистрации на мероприятие.');
      }
    })
    .catch(err => {
      alert('Ошибка при регистрации на мероприятие.');
    });
  };

  return (
    <div>
      <h1>Предстоящие мероприятия</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {events.map(event => (
          <div key={event.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <p>{event.date}</p>
            <p>{event.description}</p>
            <button onClick={() => handleRegister(event.id)}>Записаться</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
