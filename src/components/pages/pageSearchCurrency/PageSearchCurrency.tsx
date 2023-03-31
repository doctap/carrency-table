import React from 'react';
import {
  companyAddress,
  companyLinks,
  nftLinks,
  otherLinks,
  socialMediaLinks
} from './PageProps';
import { HeaderSearch } from '../../headers';
import { PageSearchFooter } from '../../footers';
import mainLogo from '../../../images/лого.png';
import darkLogo from '../../../images/dark-logo.png';
import userAvatar from '../../../images/img-user-account.png';

export const PageSearchCurrency = () => {
  return (
    <div>

      <HeaderSearch avatar={userAvatar} logo={mainLogo} />

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
