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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.headre-link': HomeHeadreLink;
    }
  }
}
