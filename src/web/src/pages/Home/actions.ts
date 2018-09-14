import * as ActionTypes from './actionTypes';
import { ReducerTool }  from '../../store';

export const changeState = (params: {}): ReducerTool.ChangeStateAction => {
    const action = ReducerTool.Funcs.makeChangeStateAction(ActionTypes.ChangeStateAction, params);
    return action;
};

/**
 * 获取用户基本信息
 */
// export const getProfile = (): ReducerTool.PromiseAction<any> => {
//     const promise   = Utils.http.meApi.getMeBaseInfo(Utils.storage.isAccount);
//     const action    = ReducerTool.Funcs.makePromiseAction(ActionTypes.PromiseGetProfile, promise);

//     return action;
// };