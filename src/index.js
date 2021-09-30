import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reducer from './reducres';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createbook } from './actions';

const store = createStore(reducer);

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

store.dispatch(createbook({ title: 'Harry Potter', category: categories[4] }));
store.dispatch(createbook({ title: 'You don`t know JS', category: categories[5] }));
store.dispatch(createbook({ title: 'Book title', category: categories[6] }));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

