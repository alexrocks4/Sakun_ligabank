import React from 'react';
import Main from '../main/main';
import styles from './under-construction-screen.module.scss';

function UnderConstructionScreen() {
  return (
    <Main className={styles['under-construction']}>
      <h1 className={styles['under-construction__title']}>
        Страница в разработке
      </h1>
    </Main>
  );
}

export default UnderConstructionScreen;
