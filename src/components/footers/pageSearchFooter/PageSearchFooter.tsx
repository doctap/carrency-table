import React from 'react';
import { CompanyAddress, LinkList, SocialMediaIcons } from '../../elements';
import type { ICompanyAddress, IIconLink, ILinkList } from '../../elements';
import { Logo } from '../../elements/logo/Logo';
import star from '../../../images/star.png';
import type { ILink } from '../../../types';
import styles from './PageSearchFooter.module.scss';

export interface IPageSearchFooter {
  companyAddress: ICompanyAddress
  logo: string
  socialMediaLinks: Array<ILink & IIconLink>
  nftLinks: ILinkList
  companyLinks: ILinkList
  otherLinks: ILinkList
}

export const PageSearchFooter = (props: IPageSearchFooter) => {
  return (
    <footer className={styles.goldBackground}>

      <div className={styles.row}>
        <div className={styles.contacts}>
          <Logo logo={props.logo} />
          <div className={styles.CompanyAddress}>
            <CompanyAddress
              addressCity={props.companyAddress.addressCity}
              addressStreet={props.companyAddress.addressStreet}
              email={props.companyAddress.email}
            />
          </div>
          <div className={styles.socialMediaLinks}>
            <SocialMediaIcons links={props.socialMediaLinks} />
          </div>
        </div>

        <div className={styles.linkColumns}>
          <div className={styles.NFT}>
            <LinkList header={props.nftLinks.header} links={props.nftLinks.links} />
          </div>

          <div>
            <LinkList header={props.companyLinks.header} links={props.companyLinks.links} />
          </div>

          <div className={styles.otherLinks}>
            <LinkList header={props.otherLinks.header} links={props.otherLinks.links} />
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <img className={styles.star} alt='star' src={star} />
        <div className={styles.Inc}>@ tnft.ru Company, Inc</div>
      </div>

    </footer>
  );
};
