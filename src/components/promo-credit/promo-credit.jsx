import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './promo-credit.module.scss';
import { AppRoute, ButtonRootElement } from '../../const';
import blackCardImg from './black-card.png';
import whiteCardImg from './white-card.png';
import Wrapper from '../wrapper/wrapper';
import ButtonPromo from '../button-promo/button-promo';

function PromoCredit({ className }) {
  return (
    <section className={classNames(className, styles['promo-credit'])}>
      <Wrapper className={classNames(className, styles['promo-credit__container'])}>
        <h2 className="visually-hidden">Кредиты</h2>
        <div className={classNames(styles['promo-credit__inner-container'])}>
          <p className={classNames(styles['promo-credit__title'])}>Лига Банк</p>
          <p className={classNames(styles['promo-credit__text'])}>Кредиты на любой случай</p>

          <ButtonPromo
            className={classNames(styles['promo-credit__link'])}
            rootElement={ButtonRootElement.ROUTER_LINK}
            to={AppRoute.CREDIT}
          >
            Рассчитать кредит
          </ButtonPromo>
        </div>

        <div className={classNames(styles['promo-credit__inner-container'])}>
          <img
            className={classNames(styles['promo-credit__img'])}
            src={blackCardImg}
            width="335"
            height="228"
            alt="Кредитная карта черного цвета"
          />
          <img
            className={classNames(styles['promo-credit__img'])}
            src={whiteCardImg}
            width="335"
            height="228"
            alt="Кредитная карта белого цвета"
          />
        </div>
      </Wrapper>
    </section>
  );
}

PromoCredit.propTypes = {
  className: PropTypes.string.isRequired,
};

PromoCredit.defaultProps = {
  className: '',
};

export default PromoCredit;
