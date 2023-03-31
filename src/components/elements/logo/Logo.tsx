import React from 'react';

interface ILogo {
  logo: string
}

export const Logo = (props: ILogo) => {
  return (
    <img alt='logo' src={props.logo} />
  );
};
