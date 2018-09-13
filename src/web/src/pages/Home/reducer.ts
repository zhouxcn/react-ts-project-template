export interface HomeStates {
    view: string;
}

export const initialState: HomeStates = {
    view: 'Home'
};

export const reducer = (state: HomeStates, action: any) => {
    switch (action.type) {
        case 'Home/getTodayPic':
            const newState = { ...state };
            newState.view = '666';

            return newState;
        default:
            return state;
    }

    return state;
};