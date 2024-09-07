import React, { useState, useEffect } from 'react';

function UserCabinet({ userId }) {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [events, setEvents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8080/api/user/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setUpdatedName(data.name);
        setUpdatedEmail(data.email);
      })
      .catch(err => console.error('Ошибка при загрузке данных пользователя:', err));

    fetch(`http://localhost:8080/api/user/${userId}/bookings`)
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(err => console.error('Ошибка при загрузке записей:', err));

    fetch(`http://localhost:8080/api/user/${userId}/events`)
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(err => console.error('Ошибка при загрузке мероприятий:', err));
  }, [userId]);

  const handleUpdateUser = (e) => {
    e.preventDefault();

    const updatedUserData = {
      name: updatedName,
      email: updatedEmail
    };

    fetch(`http://localhost:8080/api/user/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUserData),
    })
      .then(response => {
        if (response.ok) {
          setUser(prevUser => ({
            ...prevUser,
            name: updatedName,
            email: updatedEmail
          }));
          setEditMode(false);
          setStatusMessage('Данные успешно обновлены.');
        } else {
          setStatusMessage('Ошибка при обновлении данных.');
        }
      })
      .catch(err => {
        console.error('Ошибка:', err);
        setStatusMessage('Ошибка при обновлении данных.');
      });
  };

  return (
    <div>
      {user && (
        <div>
          <h1>Добро пожаловать, {user.name}</h1>
          <h2>Ваши записи</h2>
          <ul>
            {bookings.map(booking => (
              <li key={booking.id}>
                {booking.date} в {booking.time} - {booking.service}
              </li>
            ))}
          </ul>

          <h2>Ваши мероприятия</h2>
          <ul>
            {events.map(event => (
              <li key={event.id}>
                {event.title} - {event.date} в {event.time}
              </li>
            ))}
          </ul>

          {editMode ? (
            <form onSubmit={handleUpdateUser}>
              <h2>Изменить личные данные</h2>
              <label>
                Имя:
                <input
                  type="text"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                Электронная почта:
                <input
                  type="email"
                  value={updatedEmail}
                  onChange={(e) => setUpdatedEmail(e.target.value)}
                  required
                />
              </label>
              <br />
              <button type="submit">Сохранить</button>
              <button type="button" onClick={() => setEditMode(false)}>Отмена</button>
            </form>
          ) : (
            <button onClick={() => setEditMode(true)}>Изменить личные данные</button>
          )}

          {statusMessage && <p>{statusMessage}</p>}
        </div>
      )}
    </div>
  );
}

export default UserCabinet;
