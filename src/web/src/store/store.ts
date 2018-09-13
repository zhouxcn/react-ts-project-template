import { applyMiddleware, combineReducers, compose, createStore }   from "redux";
import { routerReducer }                                            from 'react-router-redux';
import { resetEnhancer }                                            from './resetEnhancer';
import { promiseMiddleware}                                         from './promiseMiddleware';

const win:          any     = window;
const middlewares:  any[]   = [];             

const originalReducer: any = combineReducers({
    routing:        routerReducer
});

middlewares.push(promiseMiddleware);

const storeEnhancers: any = compose(
    resetEnhancer,
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f: any) => f
);

const store: any = createStore(originalReducer, {}, storeEnhancers);

export default store;