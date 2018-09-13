import * as React       from 'react';
import { connect }      from 'react-redux';
import ReactPlaceholder from 'react-placeholder';

import "react-placeholder/lib/reactPlaceholder.css";

interface AboutProps { }

interface AboutStates {
    ready:  boolean;
}

class About extends React.Component<AboutProps, AboutStates> {
    constructor(props: AboutProps) {
        super(props);

        this.state = {
            ready: false
        };
    }

    public componentDidMount() {
        setTimeout(() => this.setState({ ready: true }), 2000);
    }

    public render() {
        return (
            <ReactPlaceholder showLoadingAnimation={true} type="text" rows={3} ready={this.state.ready}>
                <h1>
                    这里是关于页面
                </h1>
            </ReactPlaceholder>
        );
    }
}

const mapStatetoProps = (state: any) => {
    return state;
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    const events = {};

    return events;
};

export default connect(mapStatetoProps, mapDispatchToProps)(About);