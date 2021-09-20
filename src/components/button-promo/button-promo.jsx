import React from 'react';
import PropTypes from 'prop-types';
import styles from './button-promo.module.scss';
import classNames from 'classnames';
import Button from '../button/button';

function ButtonPromo({ children, className, ...props }) {
  return (
    <Button className={classNames(className, styles['button-promo'])} {...props}>
      {children}
    </Button>

  );
}

ButtonPromo.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]),
};

ButtonPromo.defaultProps = {
  className: '',
};

export default ButtonPromo;
