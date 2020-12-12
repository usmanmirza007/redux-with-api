import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Stack from './src/routes/Stack';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import CounterReducer from './src/redux/reducer/CounterReducer';
import InstagramReducer from './src/redux/reducer/InstagramReducer';

const rootReducer = combineReducers({
  count: CounterReducer,
  instagram: InstagramReducer,
})
const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </Provider>
  );
}
export default App;
