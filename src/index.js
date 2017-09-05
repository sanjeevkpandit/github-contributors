import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './assets/css/styles.css';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
