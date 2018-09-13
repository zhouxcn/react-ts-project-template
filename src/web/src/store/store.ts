import { applyMiddleware, combineReducers, compose, createStore }   from "redux";
import { routerReducer }                                            from 'react-router-redux';
import { resetEnhancer }                                            from './resetEnhancer';

const win:          any     = window;
const middlewares:  any[]   = [];             

const originalReducer: any = combineReducers({
    routing: routerReducer
});

const storeEnhancers: any = compose(
    resetEnhancer,
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f: any) => f
);

export const store: any = createStore(originalReducer, storeEnhancers);

export const resetPage = (page: any, callback: any): void => {
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