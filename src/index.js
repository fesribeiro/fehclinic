import React from 'react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';

// import { Container } from './styles';

import store from './store';

import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
