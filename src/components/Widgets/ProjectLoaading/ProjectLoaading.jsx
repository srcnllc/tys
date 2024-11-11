import styles from './ProjectLoaading.module.scss';

export default function ProjectLoaading() {
  return (
<section className={styles.projectloaading}>
  <div className={styles.content}>
    <h2>Proje İlerleme Durumu</h2>
    <div className={styles.bar}>
      <div className={styles.filled}></div>
    </div>
  </div>
</section>
)
}