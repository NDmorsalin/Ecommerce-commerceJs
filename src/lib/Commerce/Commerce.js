/* eslint-disable import/prefer-default-export */
import Commerce from '@chec/commerce.js';

export const commerce = new Commerce(process.env.REACT_APP_COMMERCE_PUB_KEY, true);
