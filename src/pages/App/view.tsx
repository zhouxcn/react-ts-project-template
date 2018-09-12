import * as React       from 'react';
import { Link, Route }  from "react-router-dom";

import Bundle           from '../../bundle';

import './style.css';

const load = (componentName: string) => () => {
    switch (componentName) {
        case 'Home':
            return import('../Home');

        case 'About':
            return import('../About');
        
        default:
            return import('../Home');
    }
};

const HomePage  = (props: any) => <Bundle load={load('Home')}>{(Home) => <Home {...props}/>}</Bundle>
const AboutPage = (props: any) => <Bundle load={load('About')}>{(About) => <About {...props}/>}</Bundle>;

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
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

                <Route exact={true} path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
            </div>
        );
    }
}

export default App;