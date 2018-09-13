import { combineReducers }  from 'redux';
import store                from './store';

const resetPage = (page: any, callback: any): void => {
    const { view, reducer, stateKey, initialState } = page;
    console.log(initialState);
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

export default resetPage;