import { Link } from 'react-router-dom';
import styles from './SideLink.module.scss';
import React from 'react';
import { FaChevronRight  } from 'react-icons/fa';

export default function SideLink({ slug, title,image,isActive,submenu }) {
  return (
    <Link to={slug} 
      className={`${styles.sideLink} ${isActive ? styles.active : ''}`}
      >
        <div className={styles.menüGroup}>
          <img src={image} alt={title} />
          {title}
        </div>
        {submenu && 
        <FaChevronRight className={isActive ? styles.rotate : ''} />
        }
    </Link>
  );
}
