import React from 'react'
import styles from './Breadcrumb.module.scss';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { HiOutlineDotsVertical } from 'react-icons/hi';

export default function Breadcrumb() {
  return (
    <>
      <div className={styles.breadcrumb}>

        <div className={styles.title}>
            Proje Detay
        </div>
        <div className={styles.content}>
            <span>Ecommerce</span>
            <IoChevronForwardOutline />
            <span>Seller Details</span>
        </div>
    </div>
    <div className={styles.projectInfo}>
        <div className={styles.projectsCard}>
              <div className={styles.image}>
              <img src="/images/project.png" alt="romanya" />
              </div>
              <div className={styles.desc}>
                <h3>Romanya Demo Projesi</h3>
                <span className={styles.loading}>Onay Sürecinde</span>
              </div>
              <div className={styles.dot}>
                <HiOutlineDotsVertical/>
              </div>
        </div>
        <div className={styles.infoCard}>
            <div className={styles.agreement}>
                <h5>Sözleşme</h5>
                <h4>ROM-001</h4>
            </div>
            <div className={styles.company}>
                <h5>Şirket</h5>
                <h4>Asociated CCN ALTYAPI YATIRIMLARI VE İNŞAAT AŞ.</h4>
            </div>
        </div>
    </div>
    </>
  )
}
