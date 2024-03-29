import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogBlogauthor extends Schema.Component {
  collectionName: 'components_blog_blogauthors';
  info: {
    displayName: 'blogauthor';
  };
  attributes: {
    content: Attribute.String;
    authorlink: Attribute.String;
  };
}

export interface BlogBlogdetail extends Schema.Component {
  collectionName: 'components_blog_blogdetails';
  info: {
    displayName: 'blogtitle';
    description: '';
  };
  attributes: {
    blogbanner: Attribute.Component<'product.about', true>;
  };
}

export interface BlogBlogheader extends Schema.Component {
  collectionName: 'components_blog_blogheaders';
  info: {
    displayName: 'bloglist';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    date: Attribute.Date;
    subtitle: Attribute.String;
    description: Attribute.Text;
    blogbutton: Attribute.Component<'element.buttonlink', true>;
    blogauthor: Attribute.Component<'blog.blogauthor', true>;
  };
}

export interface ContactAddress extends Schema.Component {
  collectionName: 'components_contact_addresses';
  info: {
    displayName: 'address';
    description: '';
  };
  attributes: {
    addressicon: Attribute.Media;
    title: Attribute.String;
    link: Attribute.String;
    content: Attribute.String;
  };
}

export interface ContactContactus extends Schema.Component {
  collectionName: 'components_contact_contactuses';
  info: {
    displayName: 'contactus';
  };
  attributes: {
    title: Attribute.String;
    addressdetail: Attribute.Component<'contact.address', true>;
    emaildetail: Attribute.Component<'contact.email', true>;
    phonedetail: Attribute.Component<'contact.phone', true>;
  };
}

export interface ContactEmail extends Schema.Component {
  collectionName: 'components_contact_emails';
  info: {
    displayName: 'email';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    emailicon: Attribute.Media;
    link: Attribute.String;
    content: Attribute.String;
  };
}

export interface ContactPhone extends Schema.Component {
  collectionName: 'components_contact_phones';
  info: {
    displayName: 'phone';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    phoneicon: Attribute.Media;
    number: Attribute.String;
  };
}

export interface DispalyBlogcontent extends Schema.Component {
  collectionName: 'components_dispaly_blogcontents';
  info: {
    displayName: 'blogcontent';
  };
  attributes: {
    content: Attribute.Text;
    video: Attribute.Media;
    color: Attribute.JSON;
  };
}

export interface DispalyClientReviews extends Schema.Component {
  collectionName: 'components_dispaly_client_reviews';
  info: {
    displayName: 'clientReviews';
  };
  attributes: {
    image1: Attribute.Media;
    image2: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface DispalyHead extends Schema.Component {
  collectionName: 'components_dispaly_heads';
  info: {
    displayName: 'head';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface DispalyMain extends Schema.Component {
  collectionName: 'components_dispaly_mains';
  info: {
    displayName: 'main';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'element.buttonlink', true>;
    Backgroundimage: Attribute.Media;
  };
}

export interface ElementButtonlink extends Schema.Component {
  collectionName: 'components_element_buttonlinks';
  info: {
    displayName: 'Buttonlink';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    colors: Attribute.JSON;
    type: Attribute.String;
  };
}

export interface ElementInputForm extends Schema.Component {
  collectionName: 'components_element_input_forms';
  info: {
    displayName: 'inputForm';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    type: Attribute.String;
  };
}

export interface FooterCompanyprofile extends Schema.Component {
  collectionName: 'components_profiledetail_companyprofiles';
  info: {
    displayName: 'details';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'footer.companyview', true>;
  };
}

export interface FooterCompanyview extends Schema.Component {
  collectionName: 'components_profiledetail_companyviews';
  info: {
    displayName: 'companyview';
    description: '';
  };
  attributes: {
    content: Attribute.String;
    link: Attribute.String;
  };
}

export interface FooterProduct extends Schema.Component {
  collectionName: 'components_profiledetail_products';
  info: {
    displayName: 'copyrights';
    description: '';
  };
  attributes: {
    link: Attribute.String;
    title: Attribute.String;
    colors: Attribute.JSON;
  };
}

export interface FooterService extends Schema.Component {
  collectionName: 'components_profiledetail_services';
  info: {
    displayName: 'service';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'footer.companyview', true>;
  };
}

export interface FooterSocialnetwork extends Schema.Component {
  collectionName: 'components_profiledetail_socialnetworks';
  info: {
    displayName: 'socialnetwork';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    logos: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface MapdetailsAddressForm extends Schema.Component {
  collectionName: 'components_shared_address_forms';
  info: {
    displayName: 'addressdetail';
    description: '';
  };
  attributes: {
    content: Attribute.String;
    type: Attribute.String;
  };
}

export interface MapdetailsMap extends Schema.Component {
  collectionName: 'components_shared_maps';
  info: {
    displayName: 'map';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    mapimage: Attribute.Media;
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
    backgroundImage: Attribute.Media;
    link: Attribute.String;
    image: Attribute.Media;
    colors: Attribute.JSON;
    type: Attribute.String;
    description1: Attribute.Text;
    description2: Attribute.Text;
    description3: Attribute.Text;
    description4: Attribute.Text;
  };
}

export interface NavBarBlog extends Schema.Component {
  collectionName: 'components_nav_bar_blogs';
  info: {
    displayName: 'Blog';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    link: Attribute.String;
    description: Attribute.Text;
    type: Attribute.String;
  };
}

export interface NavBarContact extends Schema.Component {
  collectionName: 'components_nav_bar_contacts';
  info: {
    displayName: 'Contact';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    link: Attribute.String;
    description: Attribute.Text;
    type: Attribute.String;
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
    link: Attribute.String;
    description: Attribute.Text;
    type: Attribute.String;
  };
}

export interface NavBarImages extends Schema.Component {
  collectionName: 'components_nav_bar_images';
  info: {
    displayName: 'images';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    type: Attribute.String;
    title: Attribute.String;
  };
}

export interface NavBarProducts extends Schema.Component {
  collectionName: 'components_nav_bar_products';
  info: {
    displayName: 'Products';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    PRODUCTS: Attribute.Enumeration<
      ['PAPER TUBS', 'PAPER CUPS', 'PAPER GLASS', 'PAPER CONTAINERS']
    >;
    type: Attribute.String;
    link: Attribute.String;
  };
}

export interface NavBarTopcontent extends Schema.Component {
  collectionName: 'components_nav_bar_topcontents';
  info: {
    displayName: 'topcontent';
    description: '';
  };
  attributes: {
    colors: Attribute.JSON;
    Backgroundimage: Attribute.Media;
  };
}

export interface ProductAbout extends Schema.Component {
  collectionName: 'components_product_abouts';
  info: {
    displayName: 'About';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    content: Attribute.String;
    backgroundImage: Attribute.Media;
    colors: Attribute.JSON;
  };
}

export interface ProductClientReviews extends Schema.Component {
  collectionName: 'components_product_client_reviews';
  info: {
    displayName: 'clientReviews';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    backgroundImage: Attribute.Media;
    content: Attribute.String;
    colors: Attribute.JSON;
    type: Attribute.String;
    link: Attribute.String;
  };
}

export interface ProductClient extends Schema.Component {
  collectionName: 'components_product_clients';
  info: {
    displayName: 'client';
    description: '';
  };
  attributes: {
    link: Attribute.String;
    clientlogo: Attribute.Component<'product.clientlogo', true>;
  };
}

export interface ProductClientlogo extends Schema.Component {
  collectionName: 'components_product_clientlogos';
  info: {
    displayName: 'clientlogo';
    description: '';
  };
  attributes: {
    logos: Attribute.Media;
  };
}

export interface ProductProductDetails extends Schema.Component {
  collectionName: 'components_product_product_details';
  info: {
    displayName: 'productDetails';
    description: '';
  };
  attributes: {
    type: Attribute.String;
    heading: Attribute.String;
    description: Attribute.Blocks;
    link: Attribute.String;
  };
}

export interface ProductProduct extends Schema.Component {
  collectionName: 'components_product_products';
  info: {
    displayName: 'product';
    description: '';
  };
  attributes: {
    productimages: Attribute.Media;
    Title: Attribute.String;
    link: Attribute.String;
    type: Attribute.String;
    colors: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.blogauthor': BlogBlogauthor;
      'blog.blogdetail': BlogBlogdetail;
      'blog.blogheader': BlogBlogheader;
      'contact.address': ContactAddress;
      'contact.contactus': ContactContactus;
      'contact.email': ContactEmail;
      'contact.phone': ContactPhone;
      'dispaly.blogcontent': DispalyBlogcontent;
      'dispaly.client-reviews': DispalyClientReviews;
      'dispaly.head': DispalyHead;
      'dispaly.main': DispalyMain;
      'element.buttonlink': ElementButtonlink;
      'element.input-form': ElementInputForm;
      'footer.companyprofile': FooterCompanyprofile;
      'footer.companyview': FooterCompanyview;
      'footer.product': FooterProduct;
      'footer.service': FooterService;
      'footer.socialnetwork': FooterSocialnetwork;
      'mapdetails.address-form': MapdetailsAddressForm;
      'mapdetails.map': MapdetailsMap;
      'nav-bar.about': NavBarAbout;
      'nav-bar.blog': NavBarBlog;
      'nav-bar.contact': NavBarContact;
      'nav-bar.home': NavBarHome;
      'nav-bar.images': NavBarImages;
      'nav-bar.products': NavBarProducts;
      'nav-bar.topcontent': NavBarTopcontent;
      'product.about': ProductAbout;
      'product.client-reviews': ProductClientReviews;
      'product.client': ProductClient;
      'product.clientlogo': ProductClientlogo;
      'product.product-details': ProductProductDetails;
      'product.product': ProductProduct;
    }
  }
}
