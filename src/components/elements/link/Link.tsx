import React from 'react';
import styles from './Link.module.scss';
import { type ILink } from '../../../types';

export const Link = (props: ILink) => {
  return (
    <a
      href={props.href}
      className={`link-dark ${styles.link}`}
    >
      {props.text}
    </a>
  );
};
