import * as React           from 'react';
import { Provider }         from 'react-redux';
import { store }            from '../../store';
import { BrowserRouter }    from "react-router-dom";
import {
    Links,
    Routes
}   from './views';

import './style.css';

class App extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Links />
                        <Routes />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;