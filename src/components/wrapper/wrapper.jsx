import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './wrapper.module.scss';

function Wrapper({ className, children }) {
  return (
    <div className={classNames(className, styles.wrapper)}>
      {children}
    </div>
  );
}

Wrapper.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Wrapper.defaultProps = {
  className: '',
};

export default Wrapper;
