import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementButtonlink extends Schema.Component {
  collectionName: 'components_element_buttonlinks';
  info: {
    displayName: 'Buttonlink';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['PRIMARY:#1f5b36']>;
  };
}

export interface NavBarAbout extends Schema.Component {
  collectionName: 'components_nav_bar_abouts';
  info: {
    displayName: 'About';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    backgroundimage: Attribute.Media;
    link: Attribute.String;
    Description: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface NavBarBlog extends Schema.Component {
  collectionName: 'components_nav_bar_blogs';
  info: {
    displayName: 'Blog';
  };
  attributes: {
    Title: Attribute.String;
    Link: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface NavBarContact extends Schema.Component {
  collectionName: 'components_nav_bar_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    Title: Attribute.String;
    Link: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface NavBarHome extends Schema.Component {
  collectionName: 'components_nav_bar_homes';
  info: {
    displayName: 'Home';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Link: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface NavBarImages extends Schema.Component {
  collectionName: 'components_nav_bar_images';
  info: {
    displayName: 'images';
  };
  attributes: {
    logo: Attribute.Media;
  };
}

export interface NavBarProducts extends Schema.Component {
  collectionName: 'components_nav_bar_products';
  info: {
    displayName: 'Products';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    PRODUCTS: Attribute.Enumeration<
      ['PAPER TUBS', 'PAPER CUPS', 'PAPER GLASS', 'PAPER CONTAINERS']
    >;
  };
}

export interface NavBarTopcontent extends Schema.Component {
  collectionName: 'components_nav_bar_topcontents';
  info: {
    displayName: 'topcontent';
    description: '';
  };
  attributes: {
    content: Attribute.String;
    bgcolor: Attribute.Enumeration<['Primary:#1f5b36']>;
  };
}

export interface ProductProduct extends Schema.Component {
  collectionName: 'components_product_products';
  info: {
    displayName: 'product';
  };
  attributes: {
    productimages: Attribute.Media;
    title: Attribute.String;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'element.buttonlink': ElementButtonlink;
      'nav-bar.about': NavBarAbout;
      'nav-bar.blog': NavBarBlog;
      'nav-bar.contact': NavBarContact;
      'nav-bar.home': NavBarHome;
      'nav-bar.images': NavBarImages;
      'nav-bar.products': NavBarProducts;
      'nav-bar.topcontent': NavBarTopcontent;
      'product.product': ProductProduct;
    }
  }
}
