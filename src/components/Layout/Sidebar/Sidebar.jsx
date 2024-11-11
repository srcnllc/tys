import Container from '../../Tools/Container/Container';
import styles from './Sidebar.module.scss';
import React, { useEffect, useState } from 'react';
import SideLink from '../../Tools/SideLink/SideLink';
import { useLocation } from 'react-router-dom';
export default function Sidebar() {
  const [active,setActive] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const navList = [
    {
      title: "Proje",
      slug: "/proje", 
      activeImage: "/images/icons/stack-line.png",
      passiveImage: "/images/icons/stack-line.png",
      submenu: [
        {
          title: "Proje Detay",
          slug: "/proje-detay", 
          activeImage: "/images/icons/stack-line.png",
          passiveImage: "/images/icons/stack-line.png"
        },
        {
          title: "Metrajlar",
          slug: "/metrajlar", 
          activeImage: "/images/icons/stack-line.png",
          passiveImage: "/images/icons/stack-line.png"
        },
        {
          title: "İhaleler",
          slug: "/ihaleler", 
          activeImage: "/images/icons/stack-line.png",
          passiveImage: "/images/icons/stack-line.png"
        },
        {
          title: "Sözleşmeler",
          slug: "/sozlesmeler", 
          activeImage: "/images/icons/stack-line.png",
          passiveImage: "/images/icons/stack-line.png"
        },
        {
          title: "Hakedişler",
          slug: "/hakedisler", 
          activeImage: "/images/icons/stack-line.png",
          passiveImage: "/images/icons/stack-line.png"
        },
        {
          title: "Kabul ve Kapanış İşlemleri",
          slug: "/kabul-ve-kapanis", 
          activeImage: "/images/icons/stack-line.png",
          passiveImage: "/images/icons/stack-line.png"
        }
      ]
    },
    {
      title: 'Döküman Yönetimi',
      slug: '/dokuman-yonetimi', 
      activeImage:'/images/icons/folder-line.png',      
      passiveImage:'/images/icons/folder-line.png'    
    },
    {
      title: 'Kalite',
      slug: '/kalite', 
      activeImage:'/images/icons/medal-line.png',      
      passiveImage:'/images/icons/medal-line.png',
       submenu: [
        {
          title: "Proje Detay",
          slug: "/proje-detay", 
          activeImage: "/images/icons/stack-line.png",
          passiveImage: "/images/icons/stack-line.png"
        },
        {
          title: "Metrajlar",
          slug: "/metrajlar", 
          activeImage: "/images/icons/stack-line.png",
          passiveImage: "/images/icons/stack-line.png"
        },
        {
          title: "İhaleler",
          slug: "/ihaleler", 
          activeImage: "/images/icons/stack-line.png",
          passiveImage: "/images/icons/stack-line.png"
        },
        {
          title: "Sözleşmeler",
          slug: "/sozlesmeler", 
          activeImage: "/images/icons/stack-line.png",
          passiveImage: "/images/icons/stack-line.png"
        },
        {
          title: "Hakedişler",
          slug: "/hakedisler", 
          activeImage: "/images/icons/stack-line.png",
          passiveImage: "/images/icons/stack-line.png"
        },
        {
          title: "Kabul ve Kapanış İşlemleri",
          slug: "/kabul-ve-kapanis", 
          activeImage: "/images/icons/stack-line.png",
          passiveImage: "/images/icons/stack-line.png"
        }
      ]
    },
    {
      title: 'ISG',
      slug: '/isg', 
      activeImage:'/images/icons/service-line.png',      
      passiveImage:'/images/icons/service-line.png',
      submenu: [
      ]
    },
    {
      title: 'Personel Yönetimi',
      slug: '/personel-yonetimi', 
      activeImage:'/images/icons/medal-line.png',      
      passiveImage:'/images/icons/medal-line.png',
      submenu: [
      ]
    },
    {
      title: 'Malzeme Yönetimi',
      slug: '/malzeme-yonetimi', 
      activeImage:'/images/icons/truck.png',      
      passiveImage:'/images/icons/truck.png',
      submenu: [

      ]
    },
    {
      title: 'Raporlar',
      slug: '/raporlar', 
      activeImage:'/images/icons/file-line.png',      
      passiveImage:'/images/icons/file-line.png' 
    },
    {
      title: 'Tanımlamalar',
      slug: '/tanimlamalar', 
      activeImage:'/images/icons/global-line.png',      
      passiveImage:'/images/icons/global-line.png' 
    }
  ];
    const handleLinkClick = () => {
    setActive(false); 
  };
  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [active]);
  return (
    <aside  className={`${styles.sidenavTypes} ${active ? styles.activeSide : ''}`}>
      <Container>
      <div className={styles.title}>
        <img src="/logo1.svg" alt="" />
    </div>
        <div className={styles.nav}>
          <ul>
          {navList.map((item, index) => {
              const isActive = location.pathname === item.slug;
              return (
                <li 
                  key={index} 
                >
                    <SideLink 
                    onClick={handleLinkClick} 
                    isActive={isActive} 
                    submenu={item.submenu} 
                    title={item.title} 
                    slug={item.slug} 
                    image={isActive ? item.activeImage : item.passiveImage}/>
                    {item.submenu && isActive && (
                        <ul className={styles.submenu}>
                          {item.submenu.map((i,index)=>{
                            return (
                              <li key={index}
                              onClick={() => setActiveIndex(index)}
                              className={activeIndex === index ? styles.activeSubMenu : ''}
                              >
                                
                                <span>-</span>
                                {i.title}
                              </li>
                            )
                          })}
                        </ul>)
                      }
                </li>
              );
            })}
          </ul>
        </div>
        <div
              onClick={() => setActive(!active)}
              className={`${styles.hamburger} ${
                active ? styles.active : ''
              } d-sm`}>
              <span />
              <span />
              <span />
            </div>
      </Container>
    </aside>
  );
}
