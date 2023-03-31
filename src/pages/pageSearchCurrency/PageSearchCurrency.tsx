import React from 'react';
import { PageSearchFooter } from '../../components/footers';
import {
  companyAddress,
  companyLinks,
  nftLinks,
  otherLinks,
  socialMediaLinks
} from './PageProps';
import darkLogo from '../../images/dark-logo.png';

export const PageSearchCurrency = () => {
  return (
    <div>
      
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
