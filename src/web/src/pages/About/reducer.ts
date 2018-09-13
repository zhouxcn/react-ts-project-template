export interface AboutStates {
    view: string;
}

export const initialState: AboutStates = {
    view: '这里是关于页面'
};

export const reducer = (state: AboutStates, action: any) => {
    return state;
};