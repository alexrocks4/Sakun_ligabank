import React from 'react';
import classNames from 'classnames';
import Logo from '../logo/logo';
import MainNav from '../main-nav/main-nav';
import styles from './header.module.scss';
import Wrapper from '../wrapper/wrapper';
import ActionsList from '../actions-list/actions-list';

function Header() {
  return (
    <header className={classNames(styles.header)}>
      <Wrapper className={classNames(styles['header__container'])}>
        <Logo className={classNames(styles['header__logo'])} />
        <MainNav className={classNames(styles['header__main-nav'])} />
        <ActionsList className={classNames(styles['header__actions-list'])} />
      </Wrapper>
    </header>
  );
}

export default Header;
