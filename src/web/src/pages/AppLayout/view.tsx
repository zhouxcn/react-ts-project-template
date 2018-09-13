import * as React   from 'react';
import { Route }    from "react-router-dom";

import Bundle       from '../../bundle';

import './style.css';

// 实现按需加载模块
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

class AppLayout extends React.Component {
    public render() {
        return (
            <div className="App">
                <h1 className="App-title">Bing每日图片</h1>
                {/* <ul>
                    <li>
                        <Link to="/">主页</Link>
                    </li>
                    <li>
                        <Link to="/about">关于</Link>
                    </li>
                </ul> */}

                <Route exact={true} path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
            </div>
        );
    }
}

export default AppLayout;