import React from 'react';
import PropTypes from 'prop-types';
import styles from './converter-form.module.scss';
import classNames from 'classnames';
import ButtonPrimary from '../button-primary/button-primary';

function ConverterForm({ className }) {
  return (
    <form
      className={classNames(className, styles['converter-form'])}
      action={'#'}
      method="POST"
      onSubmit={(evt) => evt.preventDefault()}
    >

      <fieldset className={classNames(styles['converter-form__fieldset'])}>
        <legend className={classNames(styles['converter-form__legend'])}>
          У меня есть
        </legend>
        <label className={classNames(styles['converter-form__label'])}>
          <span className="visually-hidden">Сумма</span>
          <input
            className={classNames(styles['converter-form__amount-input'])}
            type="text"
            name="amount-from"
            value="1000"
            onChange={() => {}}
          />
        </label>
        <label className={classNames(styles['converter-form__currency-label'])}>
          <span className="visually-hidden">Валюта</span>
          <span className={classNames(styles['converter-form__currency-select-container'])}>
            <select
              className={classNames(styles['converter-form__currency-select'])}
              name="currency-from"
              value="RUB"
              onChange={() => {}}
            >
              <option value="RUB">RUB</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </span>
        </label>
      </fieldset>

      <fieldset className={classNames(styles['converter-form__fieldset'])}>
        <legend className={classNames(styles['converter-form__legend'])}>
          Хочу приобрести
        </legend>
        <label className={classNames(styles['converter-form__label'])}>
          <span className="visually-hidden">Сумма</span>
          <input
            className={classNames(styles['converter-form__amount-input'])}
            type="text"
            name="amount-to"
            value="13,1234"
            onChange={() => {}}
          />
        </label>
        <label className={classNames(styles['converter-form__currency-label'])}>
          <span className="visually-hidden">Валюта</span>
          <span className={classNames(styles['converter-form__currency-select-container'])}>
            <select
              className={classNames(styles['converter-form__currency-select'])}
              name="currency-to"
              value="USD"
              onChange={() => {}}
            >
              <option value="RUB">RUB</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </span>
        </label>
      </fieldset>

      <label className={classNames(styles['converter-form__date-label'])}>
        <span className="visually-hidden">Дата курса валют</span>
        <input
          className={classNames(styles['converter-form__date-input'])}
          type="text"
          name="currency-date"
          value="1.12.2020"
          onChange={() => {}}
        />
      </label>

      <ButtonPrimary
        className={classNames(styles['converter-form__button'])}
        type="submit"
      >
        Сохранить разультат
      </ButtonPrimary>
    </form>

  );
}

ConverterForm.propTypes = {
  className: PropTypes.string.isRequired,
};

ConverterForm.defaultProps = {
  className: '',
};

export default ConverterForm;
