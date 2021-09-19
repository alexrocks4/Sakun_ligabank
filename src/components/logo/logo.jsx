import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import logoImg from './logo.svg';
import { AppRoute } from '../../const';
import styles from './logo.module.scss';

function Logo({ className }) {
  return (
    <Link className={classNames(className, styles.logo)} to={AppRoute.ROOT}>
      <img className={classNames(styles['logo__picture'])} src={logoImg} width="28" height="25" alt="Логотип. Изображение фигуры треугольной формы синего цвета." />
      <p className={classNames(styles['logo__text'])}>
        <span className={classNames(styles['logo__text-primary'])}>Лига</span> Банк
      </p>
    </Link>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

Logo.defaultProps = {
  className: '',
};

export default Logo;
