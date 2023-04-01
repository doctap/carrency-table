import React from 'react';
import { type IOption, Select, SearchInput } from '../../index';
import styles from './PanelManageList.module.scss';

interface IPanelManageList {
  filterSelectDefaultValue: string | number
  byDefaultSelectDefaultValue: string | number
  filterOptions: IOption[]
  byDefaultOptions: IOption[]
  inputPlaceholder: string
}

export const PanelManageList = (prop: IPanelManageList) => {
  return (
    <>
      <div className={styles.filterSelect}>
        <Select
          defaultValue={prop.filterSelectDefaultValue}
          options={prop.filterOptions}
        />
      </div>
      <div className={styles.SearchInput}>
        <SearchInput placeholder={prop.inputPlaceholder} />
      </div>
      <div className={styles.byDefaultSelect}>
        <Select
          defaultValue={prop.byDefaultSelectDefaultValue}
          options={prop.byDefaultOptions}
        />
      </div>
    </>
  );
};
