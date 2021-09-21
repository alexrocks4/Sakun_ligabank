import React from 'react';
import PropTypes from 'prop-types';
import styles from './history.module.scss';
import classNames from 'classnames';
import ButtonPrimary from '../button-primary/button-primary';

const CONVERTATIONS_COUNT = 10;
const CONVERTATIONS_COUNT_PER_BLOCK = 5;
let counter = 0;
const convertationsIds = Array(CONVERTATIONS_COUNT).fill(null).map(() => counter++);

function History({ className }) {
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
          {convertationsIds.slice(0, CONVERTATIONS_COUNT_PER_BLOCK).map((id) => (
            <tr
              className={classNames(styles['history__table-row'])}
              key={id}
            >
              <td className={classNames(styles['history__table-cell'], styles['history__date-column'])}>25.11.2020</td>
              <td className={classNames(styles['history__table-cell'], styles['history__amount-from-column'])}>1000</td>
              <td className={classNames(styles['history__table-cell'], styles['history__currency-from-column'])}>RUB</td>
              <td className={classNames(styles['history__table-cell'], styles['history__amount-to-column'])}>13,1234</td>
              <td className={classNames(styles['history__table-cell'], styles['history__currency-to-column'])}>USD</td>
            </tr>
          ))}
        </tbody>
        <tbody className={classNames(styles['history__table-body'], styles['history__table-right-body'])}>
          <tr className="visually-hidden">
            <th scope="col">Дата конвертации</th>
            <th scope="col">Изначальная сумма</th>
            <th scope="col">Изначальная валюта</th>
            <th scope="col">Конвертированная сумма</th>
            <th scope="col">Конвертированная валюта</th>
          </tr>
          {convertationsIds.slice(CONVERTATIONS_COUNT_PER_BLOCK, CONVERTATIONS_COUNT).map((id) => (
            <tr
              className={classNames(styles['history__table-row'])}
              key={id}
            >
              <td className={classNames(styles['history__table-cell'], styles['history__date-column'])}>25.11.2020</td>
              <td className={classNames(styles['history__table-cell'], styles['history__amount-from-column'])}>1000</td>
              <td className={classNames(styles['history__table-cell'], styles['history__currency-from-column'])}>RUB</td>
              <td className={classNames(styles['history__table-cell'], styles['history__amount-to-column'])}>13,1234</td>
              <td className={classNames(styles['history__table-cell'], styles['history__currency-to-column'])}>USD</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ButtonPrimary
        className={classNames(styles['history__button'])}
        type="button"
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
