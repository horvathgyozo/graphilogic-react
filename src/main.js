import { createStore } from 'redux';
import reducer from './reducer/index';
import { changeCell } from './reducer/actions';
import reactDOM from 'react-dom';
import React from 'react';
import App from './component/app';
import { Provider } from 'react-redux';

let store = createStore(reducer);

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);

// store.subscribe(() =>
//   console.log(store.getState())
// )

// store.dispatch(changeCell(1,1));
// store.dispatch(changeCell(1,1));
// store.dispatch(changeCell(0,1));
// store.dispatch(changeCell(1,0));
// store.dispatch(changeCell(0,0));
// store.dispatch(changeCell(0,0));

