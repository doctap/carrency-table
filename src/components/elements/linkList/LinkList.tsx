import React from 'react';
import { type ILink } from '../../../types';
import { Link } from '../link/Link';
import styles from './LinkList.module.scss';

export interface ILinkList {
  header: string
  links: ILink[]
}

export const LinkList = (props: ILinkList) => {
  return (
    <div className={styles.column}>
      <h5 className={styles.header}>{props.header}</h5>
      <div className={styles.body}>
        {props.links.map(l => <Link href={l.href} text={l.text} key={l.text} />)}
      </div>
    </div>
  );
};
