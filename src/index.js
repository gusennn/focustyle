import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import { HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux";


const theme = createTheme({
    palette: {
        dark: {main: '#000'},
        gray: {main: '#ccc'}
    },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
                </Provider>
        </HashRouter>
    </React.StrictMode>
);
reportWebVitals ();
