import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { AppRoute } from '../../const';
import styles from './actions-list.module.scss';

function ActionsList({ className }) {
  return (
    <ul className={classNames(className, styles['actions-list'])}>
      <li className={classNames(styles['actions-list__item'])}>
        <Link
          className={classNames(styles['actions-list__link'])}
          to={AppRoute.LOGIN}
        >
          Войти в Интернет-банк
        </Link>
      </li>
    </ul>
  );
}

ActionsList.propTypes = {
  className: PropTypes.string.isRequired,
};

ActionsList.defaultProps = {
  className: '',
};

export default ActionsList;
