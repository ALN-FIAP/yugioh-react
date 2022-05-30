import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@mui/material/styles';
import {Header} from './components/header';
import appTheme from './theme';

function App () {
   return (
        <ThemeProvider theme={appTheme}>
            <Header></Header>
        </ThemeProvider>
    );
}
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App></App>);