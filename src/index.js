import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Root from 'reducers/Root';
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
    <Root>
        <Router>
            <Route path="/" exact component={App} />
        </Router>
        <App />
    </Root>
    , document.querySelector('#root'));