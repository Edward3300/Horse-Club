import React, { useState } from 'react';

const contactInfo = {
  address: 'Московская область, село Зеленое, ул. Первомайская, 77',
  phone: '+7 922 525 07 07',
  email: 'info@horses-club.ru'
};

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactData = {
      name,
      email,
      message
    };

  };

  return (
    <div>
      <h1>Контактная информация</h1>
      <section>
        <h2>Наши контакты</h2>
        <p>Адрес: {contactInfo.address}</p>
        <p>Телефон: {contactInfo.phone}</p>
      </section>

      <section>
        <h2>Интерактивная карта</h2>
        <iframe
          title="Карта"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.123456789!2d37.615560!3d55.755817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54f2b5d85479b%3A0x3c7b8b7e05ebeb9d!2z0J_Rg9C70YzQvdCw0L3QvtCz0LDRgNGW0YLQsNCy0L7QutCw!5e0!3m2!1sru!2sru!4v1630544156485"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      <section>
        <h2>Форма обратной связи</h2>
        {(
          <form onSubmit={handleSubmit}>
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
            <label>
              Сообщение:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </label>
            <br />
            <button type="submit">Отправить</button>
          </form>
        )}
      </section>
    </div>
  );
}

export default Contact;