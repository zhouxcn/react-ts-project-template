import * as React       from 'react';
import { connect }      from 'react-redux';

import { AboutStates }  from './reducer';

import "react-placeholder/lib/reactPlaceholder.css";

interface AboutProps extends AboutStates { }

class About extends React.Component<AboutProps> {
    constructor(props: AboutProps) {
        super(props);
    }

    public render() {
        return (
            <h1>
                {this.props.view}
            </h1>
        );
    }
}

const mapStatetoProps = (state: any) => {
    return state.About;
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    const events = {};

    return events;
};

export default connect(mapStatetoProps, mapDispatchToProps)(About);