import { createStore, combineReducers, applyMiddleware, compose }   from 'redux';
import { resetEnhancer }                                            from './resetEnhancer';
import { promiseMiddleware }                                        from './promiseMiddleware';

let gStore: any = null;

export const initStore = (originalReducers: any): any => {
    const reducer = combineReducers(originalReducers);

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

    const initialState = {};

    gStore = createStore(reducer, initialState, storeEnhancers);

    gStore._reducers = originalReducers;

    return gStore;
};

export const getStore = (): any => {
    return gStore;
};