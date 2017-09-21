import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Store from './Store';
import Main from 'Main';
import NotFound from 'NotFound';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={Store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/home' component={Main} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render();

if(module.hot) {
  module.hot.accept();
}
