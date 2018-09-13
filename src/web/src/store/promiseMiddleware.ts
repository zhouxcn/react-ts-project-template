const isPromise = (obj: any): boolean => {
    return obj && typeof obj.then === 'function';
};
  
export const promiseMiddleware = ({ dispatch }: { dispatch: any }) => {
    return (next: any) => (action: any) => {
        const {type, promise, ...rest} = action;

        if (!isPromise(promise)) {
            return next(action);
        }
  
        // 发送Pending状态的Action
        const pendingAction = {
            ...rest, 
            type,
            promisePending: true
        };
        dispatch(pendingAction);

        // 执行这个Promise
        return action.promise.then(
            (result: any) => {
                // 发送Resolved状态的Action
                const resolvedAction = {
                    ...rest, 
                    type,
                    promisePending: false,
                    promiseResult:  result
                };
                dispatch(resolvedAction);                
            },

            (error: any) => {
                // 发送Rejected状态的Action
                const rejectedAction = {
                    ...rest, 
                    type,
                    promisePending: false,
                    promiseError:   error
                };
                dispatch(rejectedAction);
            }
        );
    };
};