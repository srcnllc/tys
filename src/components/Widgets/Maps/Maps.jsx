import styles from './Maps.module.scss';

export default function Maps() {
  return (
<div className={styles.mapsCard}>
      <h2>Konum</h2>
      <div className={styles.image}>
        <img src="/images/map.png" alt="Location" />
      </div>
      <div className={styles.info}>
        <img src="/images/icons/map-pin.png" alt="maps-pin" />
        <p>4522. Argentina, Santiago del Estero <br />
        Province Arjantin</p>
      </div>
</div>
)
}