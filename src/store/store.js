import { applyMiddleware } from 'redux';
import { compose } from 'redux';
import { createStore } from 'redux';
import { logger } from 'redux-logger/src';

import { rootReducer } from './root-reducer';

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, middleWares);
