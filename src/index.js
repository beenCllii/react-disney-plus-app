import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
=======
import { store } from './store';
import { Provider } from 'react-redux';
>>>>>>> refs/remotes/origin/main

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
<<<<<<< HEAD
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />    
      </BrowserRouter>
    </PersistGate>
  </Provider>

    
=======
    <BrowserRouter>
          <App />    
    </BrowserRouter>
    </Provider>
>>>>>>> refs/remotes/origin/main
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
