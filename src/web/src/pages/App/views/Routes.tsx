import * as React   from 'react';
import { Route }    from 'react-router-dom';
import {
    HomePage,
    AboutPage
}   from './Components';

export const Routes = () => (
    <div className="content">
        <Route exact={true} path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
    </div>
);