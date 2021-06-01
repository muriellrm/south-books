import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/Home';
import Books from '../pages/Books';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/books" component={Books} />
    </Switch>
);

export default Routes;
