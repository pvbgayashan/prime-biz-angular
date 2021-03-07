import { FIREBASE_CONFIG } from '../../config/firebase.config';

export const environment = {
  production: true,
  firebase: FIREBASE_CONFIG.CONNECTION,
  COLLECTION: {
    MASTER_DATA: {
      ITEM_TYPE: '/item-type',
      ITEM_CATEGORY: '/item-category'
    }
  }
};
