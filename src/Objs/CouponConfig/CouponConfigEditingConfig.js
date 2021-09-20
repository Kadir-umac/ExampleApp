import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig('CouponConfig', {
  hideInSelectionDialogs: true,
  initialContent: {
    couponCode: 'BOOKS15OFF',
    message: 'Get 15 % off on all books today!',
  },
});