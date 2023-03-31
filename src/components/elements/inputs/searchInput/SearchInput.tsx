import React from 'react';
import styles from './SearchInput.module.scss';

export interface ISearchInput {
  placeholder: string
}

export const SearchInput = (prop: ISearchInput) => {
  return (
    <div className={styles.customInput}>
      <input
        placeholder={prop.placeholder}
        className={styles.input}
        type='text'
        onChange={() => 0}
      />
    </div>
  );
};
