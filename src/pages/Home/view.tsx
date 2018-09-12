import * as React       from 'react';
import ReactPlaceholder from 'react-placeholder';

import "react-placeholder/lib/reactPlaceholder.css";

interface HomeProps { }

interface HomeStates {
    ready:  boolean;
}

class Home extends React.Component<HomeProps, HomeStates> {
    constructor(props: HomeProps) {
        super(props);

        this.state = {
            ready: false
        };
    }

    public componentDidMount() {
        this.todaysBindPicture();
    }

    public render() {
        return (
            <ReactPlaceholder showLoadingAnimation={true} type="text" rows={3} ready={this.state.ready}>
                <h1>
                    这里是主页
                </h1>
            </ReactPlaceholder>
        );
    }

    // 获取bing今日图片
    private async todaysBindPicture(): Promise<void> {
        // TODO
        setTimeout(() => this.setState({ ready: true }), 3000);
    }
}

export default Home;