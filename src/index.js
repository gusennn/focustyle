import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme ({
    palette: {
        primary: {main: '#1d003c'},
        secondary: {main: '#ff4b1a'}, //btn
    },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <App/>
      </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();
