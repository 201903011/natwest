import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import weatherReducer from './slices/weather';
import groupweatherReducer from './slices/groupweather';
// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const productPersistConfig = {
  key: 'product',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout'],
};

const rootReducer = combineReducers({
     weather: weatherReducer,
     groupweather: groupweatherReducer,
});

export { rootPersistConfig, rootReducer };
