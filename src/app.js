// import './utils.js';
// import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';


// console.log("app is working!");

// const validMail = validator.isEmail('foo@bar.com');

// console.log(validMail);

// const template = React.createElement('p', {}, 'testing 123');
// ReactDOM.render(template, document.getElementById('app'));

const template = <p>THIS IS JSX FROM WEBPACK</p>;
ReactDOM.render(template, document.getElementById('app'));