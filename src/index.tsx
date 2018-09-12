import * as React               from 'react';
import * as ReactDOM            from 'react-dom';
import { BrowserRouter }        from "react-router-dom";

import { AppLayout }            from './pages/AppLayout';
import registerServiceWorker    from './registerServiceWorker';

import './index.css';

const App = () => (
    <BrowserRouter>
        <AppLayout />
    </BrowserRouter>
);

ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();