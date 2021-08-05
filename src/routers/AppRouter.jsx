import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Page1 from '../pages/Page1.jsx';
import Page2 from '../pages/Page2.jsx';
import NotFound from '../pages/404.jsx';

const AppRouter = () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" component={Page1} exact={true} />
        <Route path="/page2" component={Page2} />
        <Route component={NotFound} />
      </Switch>
  </BrowserRouter>
);

export default AppRouter;
