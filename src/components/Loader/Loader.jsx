import React from 'react';
import Logo from '../../img/Logo.png'; // Импортируем изображение логотипа
import './Loader.css'; // Файл со стилями для анимации

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-logo">
        {/* Используем импортированное изображение */}
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
}

export default Loader;
