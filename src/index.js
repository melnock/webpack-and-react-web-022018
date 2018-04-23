import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//I don't know why I have to clone these??????
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
