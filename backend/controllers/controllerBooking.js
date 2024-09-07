const bookings = [];

exports.createBooking = (req, res) => {
  const { date, time, name, email } = req.body;
  const newBooking = {
    id: bookings.length + 1,
    date,
    time,
    name,
    email
  };
  bookings.push(newBooking);
  res.status(201).json(newBooking);
};
