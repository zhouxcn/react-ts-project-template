import * as React               from 'react';
import * as ReactDOM            from 'react-dom';
import { Provider }             from 'react-redux';
import { BrowserRouter }        from "react-router-dom";
import { store }                from './store';

import { AppLayout }            from './pages/AppLayout';
import registerServiceWorker    from './registerServiceWorker';

import './index.css';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <AppLayout />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();