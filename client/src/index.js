import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './style/theme.js';

import App from './App';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);
