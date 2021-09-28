import React from 'react';
import PropTypes from 'prop-types';
import styles from './history.module.scss';
import classNames from 'classnames';
import ButtonPrimary from '../button-primary/button-primary';
import { useDispatch, useSelector } from 'react-redux';
import { historyCleared, selectHistoryItems } from '../../store/historySlice';

const CONVERTATIONS_COUNT = 10;
const CONVERTATIONS_COUNT_PER_BLOCK = 5;

function History({ className }) {
  const historyItems = useSelector(selectHistoryItems);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(historyCleared());
  };

  return (
    <section className={classNames(className, styles['history'])}>
      <h2 className={classNames(styles['history__title'])}>
        История конвертации
      </h2>

      <table className={classNames(styles['history__table'])}>
        <caption className="visually-hidden">Информация о сохраненных конвертациях</caption>
        <tbody className={classNames(styles['history__table-body'], styles['history__table-left-body'])}>
          <tr className="visually-hidden">
            <th scope="col">Дата конвертации</th>
            <th scope="col">Изначальная сумма</th>
            <th scope="col">Изначальная валюта</th>
            <th scope="col">Конвертированная сумма</th>
            <th scope="col">Конвертированная валюта</th>
          </tr>
          {historyItems.slice(0, CONVERTATIONS_COUNT_PER_BLOCK).map((item) => {
            const {
              id,
              date,
              amountFrom,
              currencyFrom,
              amountTo,
              currencyTo,
            } = item;

            return (
              <tr
                className={classNames(styles['history__table-row'])}
                key={id}
              >
                <td className={classNames(styles['history__table-cell'], styles['history__date-column'])}>{date}</td>
                <td className={classNames(styles['history__table-cell'], styles['history__amount-from-column'])}>{amountFrom}</td>
                <td className={classNames(styles['history__table-cell'], styles['history__currency-from-column'])}>{currencyFrom}</td>
                <td className={classNames(styles['history__table-cell'], styles['history__amount-to-column'])}>{amountTo}</td>
                <td className={classNames(styles['history__table-cell'], styles['history__currency-to-column'])}>{currencyTo}</td>
              </tr>
            );
          })}
        </tbody>
        <tbody className={classNames(styles['history__table-body'], styles['history__table-right-body'])}>
          <tr className="visually-hidden">
            <th scope="col">Дата конвертации</th>
            <th scope="col">Изначальная сумма</th>
            <th scope="col">Изначальная валюта</th>
            <th scope="col">Конвертированная сумма</th>
            <th scope="col">Конвертированная валюта</th>
          </tr>
          {historyItems.slice(CONVERTATIONS_COUNT_PER_BLOCK, CONVERTATIONS_COUNT).map((item) => {
            const {
              id,
              date,
              amountFrom,
              currencyFrom,
              amountTo,
              currencyTo,
            } = item;

            return (
              <tr
                className={classNames(styles['history__table-row'])}
                key={id}
              >
                <td className={classNames(styles['history__table-cell'], styles['history__date-column'])}>{date}</td>
                <td className={classNames(styles['history__table-cell'], styles['history__amount-from-column'])}>{amountFrom}</td>
                <td className={classNames(styles['history__table-cell'], styles['history__currency-from-column'])}>{currencyFrom}</td>
                <td className={classNames(styles['history__table-cell'], styles['history__amount-to-column'])}>{amountTo}</td>
                <td className={classNames(styles['history__table-cell'], styles['history__currency-to-column'])}>{currencyTo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ButtonPrimary
        className={classNames(styles['history__button'])}
        type="button"
        onClick={handleButtonClick}
      >
        Очистить историю
      </ButtonPrimary>
    </section>

  );
}

History.propTypes = {
  className: PropTypes.string.isRequired,
};

History.defaultProps = {
  className: '',
};

export default History;
