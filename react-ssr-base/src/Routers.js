import React from 'react';

import { Route } from 'react-router-dom';
import { Home } from './containers/home/Home.jsx';


export default (
    <div>
      <Route path="/" component={Home} />
    </div>
)