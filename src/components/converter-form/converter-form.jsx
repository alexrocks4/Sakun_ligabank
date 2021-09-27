import React, { useState } from 'react';
//import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './converter-form.module.scss';
import classNames from 'classnames';
import ButtonPrimary from '../button-primary/button-primary';
import { useFetchCurrenciesDataQuery } from '../../store/apiSlice';
import dayjs from 'dayjs';
import { Currency, PERIOD_IN_DAYS } from '../../const';
//import { selectCurrencyRate } from '../../store/apiSlice';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';

const DEFAULT_CURRENCY_FROM = Currency.RUB;
const DEFAULT_CURRENCY_TO = Currency.USD;
const DEFAULT_AMOUNT_FROM = 0;
const DEFAULT_AMOUNT_TO = 0;
const API_DAY_FORMAT = 'YYYY-MM-DD';
const EQUAL_CURRENCIES_RATE = 1;

function ConverterForm({ className }) {
  const currentDate = dayjs().format(API_DAY_FORMAT);
  const [ currencyDate, setCurrencyDate ] = useState(currentDate);
  const [ currencyFrom, setCurrencyFrom ] = useState(DEFAULT_CURRENCY_FROM);
  const [ currencyTo, setCurrencyTo ] = useState(DEFAULT_CURRENCY_TO);
  const [ amountFrom, setAmountFrom ] = useState(DEFAULT_AMOUNT_FROM);
  const [ amountTo, setAmountTo ] = useState(DEFAULT_AMOUNT_TO);

  const { isFetching, isError, isUninitialized, data } = useFetchCurrenciesDataQuery(currentDate);

  //const currencyFromRate = useSelector((state) => selectCurrencyRate(state, currencyFrom, currencyTo, currencyDate));
  //const currencyToRate = useSelector((state) => selectCurrencyRate(state, currencyTo, currencyFrom, currencyDate));
  const enabledDates = Object.keys(data?.[currencyFrom] ?? []);
  const currencyFromRate = currencyFrom === currencyTo
    ? EQUAL_CURRENCIES_RATE
    : data?.[currencyFrom]?.[currencyDate]?.[currencyTo] ?? null;

  const currentDateCurrenciesTo = data?.[currencyFrom]?.[currencyDate] ?? {};
  const amountToComputed = currencyFromRate === null ? amountTo : (currencyFromRate * amountFrom).toFixed(2);
  const isDataNotAvailable = currencyFromRate === null;

  const amountFromChangeHandler = ({ target }) => {
    setAmountFrom(target.value);
  };

  const amountToChangeHandler = ({ target }) => {
    setAmountFrom((target.value / currencyFromRate).toFixed(2));
  };

  const currencyDateChangeHandler = (date) => {
    setCurrencyDate(dayjs(date[0]).format(API_DAY_FORMAT));
  };

  const currencyFromChangeHandler = ({ target }) => {
    setCurrencyFrom(target.value);
    setAmountTo(currencyFromRate * amountFrom);
  };

  if (isFetching || isUninitialized) {
    return 'Загрузка...';
  }

  if (isError) {
    return 'Ошибка получения данных';
  }

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
            type="number"
            min="0"
            name="amountFrom"
            value={amountFrom}
            onChange={amountFromChangeHandler}
            disabled={isDataNotAvailable}
          />
        </label>
        <label className={classNames(styles['converter-form__currency-label'])}>
          <span className="visually-hidden">Валюта</span>
          <span className={classNames(styles['converter-form__currency-select-container'])}>
            <select
              className={classNames(styles['converter-form__currency-select'])}
              name="currencyFrom"
              value={currencyFrom}
              onChange={currencyFromChangeHandler}
              disabled={isDataNotAvailable}
            >
              {Object.values(Currency).map((currencyValue) => (
                <option
                  key={currencyValue}
                  value={currencyValue}
                >
                  {currencyValue}
                </option>
              ))}
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
            type="number"
            min="0"
            name="amountTo"
            value={amountToComputed}
            onChange={amountToChangeHandler}
            disabled={isDataNotAvailable}
          />
        </label>
        <label className={classNames(styles['converter-form__currency-label'])}>
          <span className="visually-hidden">Валюта</span>
          <span className={classNames(styles['converter-form__currency-select-container'])}>
            <select
              className={classNames(styles['converter-form__currency-select'])}
              name="currencyTo"
              value={currencyTo}
              onChange={(evt) => setCurrencyTo(evt.target.value)}
              disabled={isDataNotAvailable}
            >
              {Object.values(Currency).map((currencyValue) => (
                <option
                  key={currencyValue}
                  value={currencyValue}
                  disabled={!currentDateCurrenciesTo[currencyValue]}
                >
                  {currencyValue}
                </option>
              ))}
            </select>
          </span>
        </label>
      </fieldset>

      <label className={classNames(styles['converter-form__date-label'])}>
        <span className="visually-hidden">Дата курса валют</span>
        <Flatpickr
          className={classNames(styles['converter-form__date-input'],
            {
              [styles['converter-form__date-input--no-data']]: isDataNotAvailable,
            })}
          onChange={currencyDateChangeHandler}
          options={{
            minDate: dayjs(currentDate).subtract(PERIOD_IN_DAYS, 'day').format(),
            maxDate: currentDate,
            defaultDate: currencyDate,
            enable: enabledDates,
            allowInvalidPreload: true,
          }}
        />
      </label>

      <ButtonPrimary
        className={classNames(styles['converter-form__button'])}
        type="submit"
        disabled={isDataNotAvailable}
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
