import React from 'react';
import styles from './UserMenu.module.scss';

export interface IUserMenu {
  avatar: string
}

export const UserMenu = (prop: IUserMenu) => {
  return (
    <div className={styles.userMenu}>
      <img className={styles.avatar} src={prop.avatar} alt='user' />
    </div>
  );
};
