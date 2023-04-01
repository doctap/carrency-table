import React, { useEffect } from 'react';
import {
  byDefaultOptions,
  companyAddress,
  companyLinks,
  filterOptions,
  nftLinks,
  otherLinks,
  socialMediaLinks
} from './PageProps';
import { HeaderSearch } from '../../headers';
import { PageSearchFooter } from '../../footers';
import mainLogo from '../../../images/лого.png';
import darkLogo from '../../../images/dark-logo.png';
import userAvatar from '../../../images/img-user-account.png';
import { PanelManageList } from '../../elements';
import { TableCurrency } from '../../tables';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/redux';
import { getCurrencies } from '../../../api';
import styles from './PageSearchCurrency.module.scss';

export const PageSearchCurrency = () => {
  const { items, isLoading, error } = useAppSelector(st => st.CurrencySlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrencies(1));
  }, [dispatch]);

  return (
    <div className={styles.pageSearchCurrency}>

      <div className={styles.page}>
        <div className={styles.HeaderSearch}>
          <HeaderSearch avatar={userAvatar} logo={mainLogo} />
        </div>

        <div className={styles.PanelManageList}>
          <PanelManageList
            filterOptions={filterOptions}
            filterSelectDefaultValue='Фильтры'
            byDefaultOptions={byDefaultOptions}
            byDefaultSelectDefaultValue='По умолчанию'
            inputPlaceholder='Поиск...'
          />
        </div>

        <main className={styles.main}>
          {error !== '' && <h1>{error}</h1>}
          {isLoading
            ? <h1>Loading...</h1>
            : <TableCurrency currencies={items} />}
        </main>
      </div>

      <PageSearchFooter
        companyAddress={companyAddress}
        companyLinks={companyLinks}
        nftLinks={nftLinks}
        otherLinks={otherLinks}
        logo={darkLogo}
        socialMediaLinks={socialMediaLinks}
      />
    </div>
  );
};
