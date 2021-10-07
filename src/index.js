import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import AppRouter from './components/Router';
import reducer from './reducres';
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
      <div className="big-container col-10 mx-auto">
        <AppRouter />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
