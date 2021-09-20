import React from 'react';
import PropTypes from 'prop-types';
import styles from './button-primary.module.scss';
import classNames from 'classnames';
import Button from '../button/button';

function ButtonPrimary({ children, className, ...props }) {
  return (
    <Button className={classNames(className, styles['button-primary'])} {...props}>
      {children}
    </Button>

  );
}

ButtonPrimary.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]),
};

ButtonPrimary.defaultProps = {
  className: '',
};

export default ButtonPrimary;
