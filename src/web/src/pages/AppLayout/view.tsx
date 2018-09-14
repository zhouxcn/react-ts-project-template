import * as React       from 'react';
import { BrowserRouter, Link, Route }  from "react-router-dom";
import { combineReducers }  from 'redux';
import { routerReducer }    from 'react-router-redux';
import { Provider }             from 'react-redux';

import { initStore }    from '../../store';
import Bundle           from '../../bundle';

// import { stateKey as HomeStateKey, reducer as HomeReducer } from '../Home';

import './style.css';

const originalReducers = {
    routing:    routerReducer,
    // [HomeStateKey]: HomeReducer
};

const store = initStore(originalReducers);

const resetPage = (page: any, callback: any): void => {
    const { view, reducer, stateKey, initialState } = page;

    const newInitialState = {
        ...initialState
    };

    const state = store.getState();
    
    const resetReducer = combineReducers({
        ...store._reducers,
        [stateKey]: reducer
    });

    store._reducers = {
        ...store._reducers,
        [stateKey]: reducer
    };

    const changeState = {
        ...state,
        [stateKey]: newInitialState
    };

    store.reset(resetReducer, changeState);

    callback(null, view);
};

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

const HomePage  = (props: any) => <Bundle load={load('Home')} resetPage={resetPage}>{(Home) => <Home {...props}/>}</Bundle>
const AboutPage = (props: any) => <Bundle load={load('About')} resetPage={resetPage}>{(About) => <About {...props}/>}</Bundle>;

class AppLayout extends React.Component {
    public render() {
        return (
            <div className="App">
                <div className="Header">
                    <h1 className="App-title">Bing每日图片</h1>
                    <ul>
                        <li>
                            <Link to="/home">主页</Link>
                        </li>
                        <li>
                            <Link to="/about">关于</Link>
                        </li>
                    </ul>                    
                </div>

                <Route exact={true} path="/home" component={HomePage} />
                <Route path="/about" component={AboutPage} />
            </div>
        );
    }
}

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <AppLayout />
        </BrowserRouter>
    </Provider>
);

export default App;