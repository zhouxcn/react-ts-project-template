import { resetEnhancer }        from './resetEnhancer';
import { promiseMiddleware }    from './promiseMiddleware';
import { routerReducer }        from 'react-router-redux';
import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
}   from 'redux';

const originalReducers = {
    routing:    routerReducer
};

const reducers = combineReducers(originalReducers);

const win: any = window;

const middlewares: any[] = [];

middlewares.push(promiseMiddleware);

// if (process.env.NODE_ENV !== 'production') {
//     const immutable = require('redux-immutable-state-invariant').default;
//     const x = immutable();
//     middlewares.push(x);
// }

const storeEnhancers: any = compose(
    resetEnhancer,
    
    applyMiddleware(...middlewares),

    (win && win.devToolsExtension) ? win.devToolsExtension() : (f: any) => f,
);

export const store: any = createStore(reducers, {}, storeEnhancers);

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