const events = [
  {
    id: 1,
    date: '01 сентября 2024',
    description: 'Всероссийские физкультурные соревнования по конкуру для всадников на лошадях буденовской и донской породы "Золотой пьедистал" : мужчины/женщины (LL); мужчины/женщины на лошади до 6 лет; юноши/девушки 14-18 лет (LL).',
  },
  {
    id: 2,
    date: '06 сентября 2024',
    description: 'Кубок Республики Татарстан по выездке',
  },
  {
    id: 3,
    date: '21 сентября 2024',
    description: 'Осенний Кубок КСК «Дивный» по конкуру',
  }
];

exports.getEvents = (req, res) => {
  res.json(events);
};

exports.registerEvent = (req, res) => {
  const { eventId } = req.body;
  console.log(`Регистрация на мероприятие с id ${eventId}`);
  res.json({ success: true });
};
