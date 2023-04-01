import type { ILink } from '../../../types';
import type { ILinkList, ICompanyAddress, IIconLink, IOption } from '../../elements';
import twitter from '../../../images/logoTwitter.png';
import VK from '../../../images/logoVK.png';

export const companyAddress: ICompanyAddress = {
  addressCity: 'Россия, г. Москва, 119002',
  addressStreet: 'ул. Арбат 51/1/8А',
  email: 'info@lionmax.ru'
};

export const nftLinks: ILinkList = {
  header: 'NFT',
  links: [
    {
      href: 'Что такое NFT',
      text: 'Что такое NFT'
    },
    {
      href: 'Создайте NFT с нами',
      text: 'Создайте NFT с нами'
    }
  ]
};

export const companyLinks: ILinkList = {
  header: 'Компания',
  links: [
    {
      href: 'О нас',
      text: 'О нас'
    },
    {
      href: 'Отправить запрос',
      text: 'Отправить запрос'
    }
  ]
};

export const otherLinks: ILinkList = {
  header: 'Другое',
  links: [
    {
      href: 'Условия использования',
      text: 'Условия использования'
    },
    {
      href: 'Политика конфиденциальности',
      text: 'Политика конфиденциальности'
    }
  ]
};

export const socialMediaLinks: Array<ILink & IIconLink> = [
  {
    href: 'twitter',
    text: 'twitter',
    children: twitter
  },
  {
    href: 'VKontakte',
    text: 'VK',
    children: VK
  }
];

export const filterOptions: IOption[] = [
  {
    value: 'filter 1',
    text: 'filter 1'
  },
  {
    value: 'filter 2',
    text: 'filter 2'
  }
];

export const byDefaultOptions: IOption[] = [
  {
    value: 'byDefault 1',
    text: 'byDefault 1'
  },
  {
    value: 'byDefault 2',
    text: 'byDefault 2'
  }
];
