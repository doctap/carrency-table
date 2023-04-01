import React from 'react';
import styles from './Select.module.scss';

export interface ISelect {
  options: IOption[]
  defaultValue: string | number
}

export interface IOption {
  value: string | number
  text: string
}

export const Select = (prop: ISelect) => {
  return (
    <div className={styles.select}>
      <select
        className={styles.select__field}
        defaultValue={prop.defaultValue}
      >
        <option value={prop.defaultValue}>{prop.defaultValue}</option>
        {prop.options.map(o => (
          <option key={o.value} value={o.value}>{o.text}</option>
        ))}
      </select>
    </div>
  );
};
