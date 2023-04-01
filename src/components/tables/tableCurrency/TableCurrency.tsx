import React from 'react';
import type { ICurrency } from '../../../api';
import styles from './TableCurrency.module.scss';

export interface ITableCurrency {
  currencies: ICurrency[]
}

export const TableCurrency = (prop: ITableCurrency) => {
  return (
    <table className={styles.table} >
      <thead>
        <tr>
          <th>id</th>
          <th>symbol</th>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        {prop.currencies.map(c => (
          <tr
            className={styles.row}
            key={c.id}
            style={{ backgroundColor: c.symbol === 'usdt' ? 'green' : undefined }}
          >
            <td>{c.id}</td>
            <td>{c.symbol}</td>
            <td>{c.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
