import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducers from './rootReducer';

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

/*****************************************************************************/

//EJEMPLO VISTO EN CLASES QUE SI FUNCIONA:
/*import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './root-reducer'

const middlewares = [reduxThunk]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store */
