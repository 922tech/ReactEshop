import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import theme from  './components/Themes/index';
import { ThemeProvider } from '@mui/material/styles';
import {BasketContextProvider} from "./context/BasketContext";

// import './post.css';
// import './fonts/Shabnam-Medium.ttf'

ReactDOM.render(
        <React.StrictMode>
            <BasketContextProvider>
                <ThemeProvider theme={theme}>
                        <App/>
                </ThemeProvider>
            </BasketContextProvider>
        </React.StrictMode>
        , document.getElementById('root'));
    