const services = [
  { id: 1, name: 'Конные прогулки по живописному лесу', price: 1200, description: 'Персональное занятие с тренером.', image: '1000032518.jpg' },
  { id: 2, name: 'Обучение верховой езде для взрослых и детей от 2-х лет', price: 1500, description: 'Занятие в группе.', image: '33ff5023-0de1-4da0-b52a-1b957448c2ba.jpg' },
  { id: 3, name: 'Фотосессии с лошадьми', price: 1000, description: 'Аренда коня для верховой езды.', image: '98645.png' },
  { id: 4, name: 'Экскурсии на конюшню', price: 800, description: 'Интересная экскурсия для детей и взрослых.', image: '5416.jpg' },
  { id: 5, name: 'Подарочные сертификаты', price: 1000, description: 'Интересная экскурсия для детей и взрослых.', image: '12130.jpg' },
];

exports.getServices = (req, res) => {
  res.json(services);
};
