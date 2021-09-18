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
  children: PropTypes.element,
  className: PropTypes.string.isRequired,
};

Main.defaultProps = {
  className: '',
};

export default Main;
