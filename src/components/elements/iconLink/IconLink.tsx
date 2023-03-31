import React from 'react';
import { type ILink } from '../../../types';

export interface IIconLink {
  children: string
}

export const IconLink = (props: IIconLink & ILink) => {
  return (
    <a href={props.href}>
      <img alt={props.text} src={props.children} />
    </a>
  );
};
