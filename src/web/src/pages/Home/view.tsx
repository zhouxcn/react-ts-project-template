import * as React       from 'react';
import { AnyAction }    from 'redux';
import { connect }      from 'react-redux';

import * as Actions     from './actions';
import * as ActionTypes from './actionTypes';
import { HomeStates }   from './reducer';

import { ReducerTool }  from "../../store";

interface HomeProps extends HomeStates, HomeEvents { }

interface HomeEvents {
    onChangeState: () => void;
}

class Home extends React.Component<HomeProps> {
    constructor(props: HomeProps) {
        super(props);
    }

    public componentDidMount() {
        // const url = '/api/todayPic';

        // this.props.onGetTodayPic(url);
        // this.props.onChangeState();
    }

    public render() {
        return (
            // <img src={this.state.todayPic} alt="每日图片" width="100%" height="100%" />
            <h1>
                {this.props.view}
            </h1>
        );
    }

    // 获取bing今日图片
    // private async todaysBindPicture(): Promise<void> {
        // try {
            // const result = await fetch('/api/todayPic');
            // const todayPic = await result.json();
            // 
            // this.setState({
                // ready: true,
                // todayPic: todayPic.todayPic
            // });
        // } catch (error) {
            // console.log(error.message);
        // }
    // }
}

const mapStatetoProps = (state: any) => {
    const props = ReducerTool.Funcs.mapStateToProps(state, ActionTypes.stateKey);
    return props;
};

const mapDispatchToProps = (dispatch: any) => {
    const events: HomeEvents = {
        onChangeState(): void {
            const action: AnyAction = Actions.changeState({view: '666'});
            dispatch(action);
        }
    };

    return events;
};

export default connect(mapStatetoProps, mapDispatchToProps)(Home);