import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/color-mode";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {  HashRouter } from "react-router-dom";
import App from './App';
import theme from './theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ChakraProvider theme = {theme} >
        <ColorModeScript initialColorMode = {theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>
  
);

