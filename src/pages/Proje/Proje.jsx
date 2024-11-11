import React from 'react';
import styles from './Proje.module.scss';
import Container from '../../components/Tools/Container/Container';
import GalaryCard from '../../components/Widgets/GalaryCard/GalaryCard';
import ProjectLoaading from '../../components/Widgets/ProjectLoaading/ProjectLoaading';
import Maps from '../../components/Widgets/Maps/Maps';
import GenerationInformation from '../../components/Widgets/GenerationInformation/GenerationInformation';
import Comments from '../../components/Widgets/Comments/Comments';
export default function Proje() {
  return (
    <section className={styles.homePage}>
      <Container large>
        <div className={styles.homeContainer}>
          <div className={styles.content}>
            <GenerationInformation />
            <Comments />
          </div>
          <div className={styles.sectionOne}>
            <GalaryCard />
            <ProjectLoaading />
            <Maps />
          </div>
        </div>
      </Container>
    </section>
  );
}
