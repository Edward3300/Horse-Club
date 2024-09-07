  import React, { useState } from 'react';
  import './Home.css';

  function Home() {
    return (
      <div>
        <Header />
        <ImageSlider />
      </div>
    );
  }


  function Header() {
    return (
      <header>
        <h1>Конный клуб</h1>
        <p>Конный клуб – не только самый крупный, но и один из самых популярных в Московской области.</p>
        <p>Сегодня в хозяйстве 40 лошадей русской рысистой, тяжеловозной и вятской пород. Так же имеются козы, овцы, кролики, индюки, курицы, собаки.</p>
        <p>Для особо искушенных туристов есть русская баня, родниковая купель и веревочный троллей.</p>
        <p>Верховая езда – это настоящая панацея для современного общества, в жизни которого преобладает сидячий образ жизни, повышенные умственные нагрузки, работа с гаджетами. А еще – это профилактика и лечение многих болезней, снятие стресса, чувства тревоги, психологическая разгрузка.</p>
      </header>
    );
  }

  function ImageSlider() {
    const images = ['images (1).jpg', 'images (2).jpg', 'images (3).jpg'];
    const messages = [
      'VIII Всероссийская выставка лошадей вятской породы "Золотая Вятка - 2024"', 
      'Эко-продукты', 'Светлая Масленица', 'Праздник Ивана Купала'];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const showNextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const showPrevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className="slider">
        <button className="prev" onClick={showPrevImage}>‹</button>
        <img src={images[currentIndex]} alt="Конный клуб" className="slider-image" />
        <p></p>
        <button className="next" onClick={showNextImage}>›</button>
        <h1>Анонсы</h1>
        {messages.map(message => (
          <p>{message}</p>
        ))}
      </div>
    );
  }

  export default Home;
