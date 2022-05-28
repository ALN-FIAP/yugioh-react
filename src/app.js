// import './utils.js';
// import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/style.scss';
import {ThemeProvider} from '@material-ui/core';
import {Header} from './components/header';
import {theme} from './theme';


// console.log("app is working!");

// const validMail = validator.isEmail('foo@bar.com');

// console.log(validMail);

// const template = React.createElement('p', {}, 'testing 123');
// ReactDOM.render(template, document.getElementById('app'));



function App () {
   return (
        <ThemeProvider theme={theme}>
            <Header></Header>
        </ThemeProvider>
    );
}
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App></App>);