import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderOrderItems extends Schema.Component {
  collectionName: 'components_order_order_items';
  info: {
    displayName: 'order_items';
    icon: 'briefcase';
  };
  attributes: {
    weigth: Attribute.String;
    product: Attribute.Relation<
      'order.order-items',
      'oneToOne',
      'api::product.product'
    >;
    quantity: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'order.order-items': OrderOrderItems;
    }
  }
}
