import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/Home';
import Books from '../pages/Books';
import Favorites from '../pages/Favorites';
import Recents from '../pages/Recents';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/books" component={Books} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/recents" component={Recents} />
    </Switch>
);

export default Routes;
