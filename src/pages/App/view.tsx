import * as React       from 'react';
import { Link, Route }  from "react-router-dom";

import { Home }         from "../Home";
import { About }        from "../About";

import './style.css';

// import logo from '../../images/logo.svg';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <ul>
                    <li>
                        <Link to="/">主页</Link>
                    </li>
                    <li>
                        <Link to="/about">关于</Link>
                    </li>
                </ul>

                <Route exact={true} path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        );
    }
}

export default App;