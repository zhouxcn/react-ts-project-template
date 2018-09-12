import * as React from 'react';

interface BundleProps {
    load: ()                => Promise<void>;
    children: (mod: any)    => any;
}

interface BundleStates {
    mod: any;
}

export default class Bundle extends React.Component<BundleProps, BundleStates> {
    constructor(props: BundleProps) {
        super(props);

        this.state = {
            mod: null
        };
    }

    public componentWillMount() {
        this.load(this.props)
    }

    public componentWillReceiveProps(nextProps: BundleProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    public render() {
        return this.state.mod ? this.props.children(this.state.mod) : null;
    }

    private load(props: BundleProps) {
        this.setState({
            mod: null
        });

        // 注意这里，使用Promise对象; mod.default导出默认
        props.load().then((mod: any) => {
            this.setState({
                mod: mod.default ? mod.default : mod
            });
        });
    }
}