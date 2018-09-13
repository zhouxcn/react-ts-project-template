import { AnyAction }        from 'redux';
import * as ActionTypes     from './actionTypes';

export const getTodayPic = (url: string): AnyAction => {
    const action: AnyAction = {
        type: ActionTypes.GetTodayPic,
        url
    };

    return action;
};