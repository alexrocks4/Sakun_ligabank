import React from 'react';
import PropTypes from 'prop-types';
import styles from './main.module.scss';

function Main({ children, className }) {
  return (
    <main className={`${className} ${styles.main}`}>
      {children}
    </main>
  );
}

Main.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Main.defaultProps = {
  className: '',
};

export default Main;
