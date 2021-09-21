import classNames from 'classnames';
import React from 'react';
import Wrapper from '../wrapper/wrapper';
import Logo from '../logo/logo';
import styles from './footer.module.scss';
import NavList from '../nav-list/nav-list';

function Footer() {
  return (
    <footer className={classNames(styles.footer)}>
      <Wrapper className={classNames(styles['footer__container'])}>
        <section className={classNames(styles['footer__info'])}>
          <h2 className="visually-hidden">Информация о компании</h2>
          <Logo className={classNames(styles['footer__logo'])} />
          <address className={classNames(styles['footer__address'])}>
            150015, г. Москва, ул. Московская, д. 32
          </address>
          <small className={classNames(styles['footer__license'])}>
            Генеральная лицензия Банка России №1050
            Ⓒ Лига Банк, 2019
          </small>
        </section>
        <NavList className={classNames(styles['footer__nav-list'])} />

        <p className={classNames(styles['footer__phone'], styles['footer__phone--secondary'])}>
          <a
            className={classNames(styles['footer__phone-link'], styles['footer__phone-link--secondary'])}
            href="tel:*0904" aria-label="Короткий контактный номер телефона"
          >
            *0904
          </a>
          <span className={classNames(styles['footer__phone-secondary-text'])}>
            Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
          </span>
        </p>

        <p className={classNames(styles['footer__phone'], styles['footer__phone--primary'])}>
          <a
            className={classNames(styles['footer__phone-link'], styles['footer__phone-link--primary'])}
            href="tel:88001112233" aria-label="Контактный номер телефона"
          >
            8 800 111 22 33
          </a>
          <span className={classNames(styles['footer__phone-primary-text'])}>
            Бесплатный для всех<br />городов России
          </span>
        </p>

        <ul className={classNames(styles['footer__socials-list'])}>
          <li className={classNames(styles['footer__socials-list-item'])}>
            <a
              className={classNames(styles['footer__socials-link'])}
              href="https://www.facebook.com"
            >
              <span className="visually-hidden">Логотип Facebook</span>
            </a>
          </li>
          <li className={classNames(styles['footer__socials-list-item'])}>
            <a
              className={classNames(styles['footer__socials-link'])}
              href="https://www.instagram.com"
            >
              <span className="visually-hidden">Логотип Instagram</span>
            </a>
          </li>
          <li className={classNames(styles['footer__socials-list-item'])}>
            <a
              className={classNames(styles['footer__socials-link'])}
              href="https://www.twitter.com"
            >
              <span className="visually-hidden">Логотип Twitter</span>
            </a>
          </li>
          <li className={classNames(styles['footer__socials-list-item'])}>
            <a
              className={classNames(styles['footer__socials-link'])}
              href="https://www.youtube.com"
            >
              <span className="visually-hidden">Логотип Youtube</span>
            </a>
          </li>
        </ul>
      </Wrapper>
    </footer>
  );
}

export default Footer;
