import * as React       from 'react';
import { connect }      from 'react-redux';
import ReactPlaceholder from 'react-placeholder';

import "react-placeholder/lib/reactPlaceholder.css";

interface HomeProps { }

interface HomeStates {
    ready:      boolean;
    todayPic:   string;
}

class Home extends React.Component<HomeProps, HomeStates> {
    constructor(props: HomeProps) {
        super(props);

        this.state = {
            ready: false,
            todayPic: ''
        };
    }

    public componentDidMount() {
        this.todaysBindPicture();
    }

    public render() {
        return (
            <ReactPlaceholder showLoadingAnimation={true} type="text" rows={3} ready={this.state.ready}>
                <img src={this.state.todayPic} alt="每日图片" width="100%" height="100%" />
            </ReactPlaceholder>
        );
    }

    // 获取bing今日图片
    private async todaysBindPicture(): Promise<void> {
        try {
            const result = await fetch('/api/todayPic');
            const todayPic = await result.json();
            
            this.setState({
                ready: true,
                todayPic: todayPic.todayPic
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}

const mapStatetoProps = (state: any) => {
    return state;
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    const events = {};

    return events;
};

export default connect(mapStatetoProps, mapDispatchToProps)(Home);