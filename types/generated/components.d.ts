import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeHeadreLink extends Schema.Component {
  collectionName: 'components_home_headre_links';
  info: {
    displayName: 'HeadreLink';
    icon: 'alien';
  };
  attributes: {
    Home: Attribute.String;
    About: Attribute.String;
  };
}

export interface NavBarAbout extends Schema.Component {
  collectionName: 'components_nav_bar_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    Title: Attribute.String;
    Link: Attribute.String;
    Description: Attribute.Text;
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
  };
  attributes: {
    PRODUCTS: Attribute.Enumeration<
      ['PAPER CUPS', 'PAPER TUBS', 'PAPER GLASS', 'PAPER CONTAINERS']
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.headre-link': HomeHeadreLink;
      'nav-bar.about': NavBarAbout;
      'nav-bar.blog': NavBarBlog;
      'nav-bar.contact': NavBarContact;
      'nav-bar.home': NavBarHome;
      'nav-bar.images': NavBarImages;
      'nav-bar.products': NavBarProducts;
    }
  }
}
