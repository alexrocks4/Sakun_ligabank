import React from 'react';
import classNames from 'classnames';
import Main from '../../main/main';
import styles from './converter-screen.module.scss';
import PromoCredit from '../promo-credit/promo-credit';

function ConverterScreen() {
  return (
    <Main className={classNames(styles['converter-screen'])}>
      <h1 className={classNames(styles['converter-screen__title'])}>
        Конвертер валют
      </h1>
      <PromoCredit className={classNames(styles['converter-screen__promo-credit'])} />
    </Main>
  );
}

export default ConverterScreen;
