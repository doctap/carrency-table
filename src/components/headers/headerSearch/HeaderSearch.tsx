import React from 'react';
import { Logo } from '../../elements/logo/Logo';
import { SearchInput, UserMenu } from '../../elements';
import styles from './HeaderSearch.module.scss';

export interface IHeaderSearch {
  logo: string
  avatar: string
}

export const HeaderSearch = (prop: IHeaderSearch) => {
  return (
    <header className={styles.header}>
      <div className={styles.searchBlock}>
        <Logo logo={prop.logo} />
        <div className={styles.SearchInput}>
          <SearchInput placeholder='Поиск...' />
        </div>
      </div>
      <UserMenu avatar={prop.avatar} />
    </header>
  );
};
