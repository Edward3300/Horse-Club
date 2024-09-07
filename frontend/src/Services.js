import React, { useState, useEffect } from 'react';

function Services() {
  const [services, setServices] = useState([]);
  const [filterPrice, setFilterPrice] = useState(0);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetch('http://localhost:8080/api/services')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setServices(data)
      })
      .catch(err => console.error('Ошибка при загрузке услуг:', err));
  }, []);

  function getFilteredServices() {
    return services.filter(service => service.price >= filterPrice);
  }

  function getSortedServices(filteredServices) {
    return filteredServices.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  const filteredServices = getFilteredServices();
  const sortedServices = getSortedServices(filteredServices);

  return (
    <div>
      <h1>Наши услуги</h1>

      <label>
        Фильтр по минимальной цене:
        <input
          type="number"
          value={filterPrice}
          onChange={e => setFilterPrice(Number(e.target.value))}
        />
      </label>

      <label>
        Сортировка по цене:
        <select onChange={e => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="asc">По возрастанию</option>
          <option value="desc">По убыванию</option>
        </select>
      </label>

      <div>
        {sortedServices.map(service => (
          <div key={service.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{service.name}</h3>
            <img src={service.image} alt={service.name} style={{ width: '100px', height: '100px' }} />
            <p>{service.description}</p>
            <p>Цена: {service.price} руб.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
