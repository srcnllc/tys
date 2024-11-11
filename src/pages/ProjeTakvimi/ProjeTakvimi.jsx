import styles from './ProjeTakvimi.module.scss';
import Container from '../../components/Tools/Container/Container';


export default function ProjeTakvimi() {
  return (
<div className={styles.projetakvimi}>
  <Container large>
    <div className={styles.content}>
      Proje Takvimi
    </div>
  </Container>
</div>
)
}