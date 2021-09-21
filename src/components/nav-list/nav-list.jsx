import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './nav-list.module.scss';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';

function NavList({ className }) {
  return (
    <ul className={classNames(className, styles['nav-list'])}>
      <li className={classNames(styles['nav-list__list-item'])}>
        <NavLink
          className={classNames(styles['nav-list__link'])}
          activeClassName={classNames(classNames(styles['nav-list__link--active']))}
          to={AppRoute.SERVICES}
        >
          Услуги
        </NavLink>
      </li>
      <li className={classNames(styles['nav-list__list-item'])}>
        <NavLink
          className={classNames(styles['nav-list__link'])}
          activeClassName={classNames(styles['nav-list__link--active'])}
          to={AppRoute.CREDIT}
        >
          Рассчитать кредит
        </NavLink>
      </li>
      <li className={classNames(styles['nav-list__list-item'])}>
        <NavLink
          className={classNames(styles['nav-list__link'])}
          activeClassName={classNames(styles['nav-list__link--active'])}
          to={AppRoute.CONTACTS}
        >
          Контакты
        </NavLink>
      </li>
      <li className={classNames(styles['nav-list__list-item'])}>
        <NavLink
          className={classNames(styles['nav-list__link'])}
          activeClassName={classNames(styles['nav-list__link--active'])}
          to={AppRoute.QUESTION}
        >
          Задать вопрос
        </NavLink>
      </li>
    </ul>
  );
}

NavList.propTypes = {
  className: PropTypes.string.isRequired,
};

NavList.defaultProps = {
  className: '',
};

export default NavList;
