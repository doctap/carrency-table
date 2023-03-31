import React from 'react';
import { type ILink } from '../../../types';
import { type IIconLink, IconLink } from '../index';

interface ISocialMediaIcons {
  links: Array<ILink & IIconLink>
}

export const SocialMediaIcons = (props: ISocialMediaIcons) => {
  return (
    <>
      {props.links.map(l => (
        <IconLink href={l.href} text={l.text} key={l.text}>
          {l.children}
        </IconLink>
      ))}
    </>
  );
};
