import React, { useState } from 'react';
import styles from './GalaryCard.module.scss';

export default function GalaryCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = ['/images/activeImg.png', '/images/images1.png', '/images/activeImg.png', '/images/activeImg.png'];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.galaryCard}>
      <div className={styles.title}>
        <h2>Galeri</h2>
        <div className={styles.plus}>
          <img src="/images/icons/plus.png" alt="plus" />
        </div>
      </div>
      <div className={styles.activeImg}>
        <img src={images[activeIndex]} alt="gallery" />
      </div>
      <div className={styles.passiveImg}>
        <div className={styles.previous} onClick={handlePrevious}>
          <img src="/images/icons/pre.png" alt="previous" />
        </div>

        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="gallery"
            className={index === activeIndex ? styles.activeThumbnail : ''}
            onClick={() => handleImageClick(index)}
          />
        ))}

        <div className={styles.next} onClick={handleNext}>
          <img src="/images/icons/next.png" alt="next" />
        </div>
      </div>
    </div>
  );
}
