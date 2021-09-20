import React from 'react';
import classNames from 'classnames';
import Main from '../../main/main';
import styles from './converter-screen.module.scss';
import PromoCredit from '../promo-credit/promo-credit';
import Wrapper from '../wrapper/wrapper';
import ConverterForm from '../converter-form/converter-form';

function ConverterScreen() {
  return (
    <Main className={classNames(styles['converter-screen'])}>
      <Wrapper className={classNames(styles['converter-screen__title-wrapper'])}>
        <h1 className={classNames(styles['converter-screen__title'])}>
          Конвертер валют
        </h1>
      </Wrapper>
      <PromoCredit className={classNames(styles['converter-screen__promo-credit'])} />
      <Wrapper className={classNames(styles['converter-screen__converter-form-wrapper'])}>
        <ConverterForm/>
      </Wrapper>
    </Main>
  );
}

export default ConverterScreen;
