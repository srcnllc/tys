import { CgMenuLeftAlt } from 'react-icons/cg';
import Container from '../../Tools/Container/Container';
import styles from './Header.module.scss';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';


export default function Header({onHamburgerClick }) {
  const navItems = [
    {
      activeImage: "/images/icons/flag.png",
      passiveImage: "/images/icons/flag.png",
    },
    {
      activeImage: "/images/icons/shape.png",
      passiveImage: "/images/icons/shape.png",
    },
    {
      activeImage: "/images/icons/light.png",
      passiveImage: "/images/icons/light.png",
    },
    {
      activeImage: "/images/icons/bx-bell.png",
      passiveImage: "/images/icons/bx-bell.png",
    }
  ];
  return (
      <header className={styles.header}>
        <Container large>
          <div className={styles.topbar}>
            <div className={styles.leftContent}>
            <CgMenuLeftAlt className={styles.hamburger} onClick={onHamburgerClick}/>
            <div className={styles.project}>
              <div className={styles.image}>
                <img src="/images/project.png" alt="romanya" />
              </div>
              <div className={styles.desc}>
                <h3>Romanya Demo Projesi</h3>
                <span>ROM-001</span>
              </div>
              <FaChevronDown width={16} height={16} color='#5925DC'/>

            </div>

            </div>
            <div className={styles.rightBar}>
              <div className={styles.items}>
                {navItems.map((navItem, index) =>(
                    <img src={navItem.activeImage} alt="flag" key={index}/>
                ))}
              </div>
              <div className={styles.avatar}>
                <div className={styles.avatarImage}>
                  <img src="/images/avatar1.png" alt="avatar" />
                </div>
                <div className={styles.avatarInfo}>
                  <h3>Anna Adame</h3>
                  <span>Founder</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
  );
}
