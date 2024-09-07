const users = [
  { id: 1, name: 'Иван Иванов', email: 'ivanov@example.com' }
];

const bookings = [
  { id: 1, date: '2024-09-15', time: '10:00', service: 'Конные прогулки по живописному лесу' }
];

const events = [
  { id: 1, title: 'Осенний Кубок КСК «Дивный» по конкуру', date: '2024-09-21', time: '15:00' }
];

exports.getUser = (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Пользователь не найден' });
  }
};

exports.getBookings = (req, res) => {
  res.json(bookings);
};

exports.getEvents = (req, res) => {
  res.json(events);
};

exports.updateUser = (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const { name, email } = req.body;
  const user = users.find(u => u.id === userId);
  if (user) {
    user.name = name;
    user.email = email;
    res.json(user);
  } else {
    res.status(404).json({ message: 'Пользователь не найден' });
  }
};