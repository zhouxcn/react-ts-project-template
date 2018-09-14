const RESET_ACTION_TYPE = '@@RESET';

const resetReducerCreator = (reducer: any, changeState: any) => (state: any, action: any) => {
    if (action.type === RESET_ACTION_TYPE) {
        return changeState;
    } else {
        return reducer(state, action);
    }
};

export const resetEnhancer = (createStore: any) => (reducer: any, preloadedState: any, enhancer: any) => {
    const store = createStore(reducer, preloadedState, enhancer);

    const reset = (resetReducer: any, changeState: any) => {
        const newReducer = resetReducerCreator(resetReducer, changeState);
        
        store.replaceReducer(newReducer);

        const action = {
            type:   RESET_ACTION_TYPE,
            state:  changeState
        };

        store.dispatch(action);
    };

    return {
        ...store,
        reset
    };
};