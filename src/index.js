import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from "react-redux";
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";


import {store, persistor } from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
         
        <PersistGate loading={null} persistor={persistor}>
     
     <App />
    
     </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>
);


