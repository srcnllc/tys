import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';
import Container from '../../Tools/Container/Container';

export default function Navigation({activeLink,setActiveLink}) {
    const navigationList = [
    {
      title: "Genel Görünüm",
    },
    {
      title: "Modeller",
    },
    {
      title: "Proje Takvimi",
    },
    {
      title: "Keşif",
    },
    {
      title: "Alt Yükleniciler",
    }
  ];

  return (
<section className={styles.navigation}>
  <Container large>
  <nav className={styles.navbar}>
    <ul className={styles.navLinks}>
      {navigationList.map((item, index) => (
        <li 
        key={index} 
        className={`${styles.navLink} ${activeLink === index ? styles.activeLink : ''}`}
        onClick={() => setActiveLink(index)}
        >
          <Link  href="#">{item.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
  </Container>

</section>
)
}