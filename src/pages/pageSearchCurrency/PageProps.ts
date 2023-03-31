import type { ILink } from '../../types';
import type { ICompanyAddress, IIconLink, ILinkList } from '../../components/elements';
import twitter from '../../images/logoTwitter.png';
import VK from '../../images/logoVK.png';

export const companyAddress: ICompanyAddress = {
  addressCity: 'Россия, г. Москва, 119002',
  addressStreet: 'ул. Арбат 51/1/8А',
  email: 'info@lionmax.ru'
};

export const nftLinks: ILinkList = {
  header: 'NFT',
  links: [
    {
      href: '#Что такое NFT',
      text: 'Что такое NFT'
    },
    {
      href: '#Создайте NFT с нами',
      text: 'Создайте NFT с нами'
    }
  ]
};

export const companyLinks: ILinkList = {
  header: 'Компания',
  links: [
    {
      href: '#О нас',
      text: 'О нас'
    },
    {
      href: '#Отправить запрос',
      text: 'Отправить запрос'
    }
  ]
};

export const otherLinks: ILinkList = {
  header: 'Другое',
  links: [
    {
      href: '#Условия использования',
      text: 'Условия использования'
    },
    {
      href: '#Политика конфиденциальности',
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
