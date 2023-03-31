import React from 'react';
import styles from './CompanyAddress.module.scss';

export interface ICompanyAddress {
  addressCity: string
  addressStreet: string
  email: string
}

export const CompanyAddress = (props: ICompanyAddress) => {
  return (
    <div className={styles.CompanyAddress}>
      <div>{props.addressCity}</div>
      <div>{props.addressStreet}</div>
      <div>e-mail: {props.email}</div>
    </div>
  );
};
