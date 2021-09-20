import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { ButtonRootElement } from '../../const';

function Button({ children, className, rootElement, ...props }) {
  let content = (
    <button
      {...props}
      className={classNames(className, styles.button)}
    >
      {children}
    </button>
  );

  if (rootElement === ButtonRootElement.ROUTER_LINK) {
    content = (
      <Link
        {...props}
        className={classNames(className, styles.button)}
      >
        {children}
      </Link>
    );
  }

  return content;
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]),
  rootElement: PropTypes.oneOf(Object.values(ButtonRootElement)),
};

Button.defaultProps = {
  className: '',
  rootElement: ButtonRootElement.BUTTON,
};

export default Button;
