import * as React       from 'react';
import { resetPage }    from './store';

interface BundleProps {
    load: ()                => Promise<any>;
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

        this.load   = this.load.bind(this);
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
            resetPage(mod, () => {
                this.setState({
                    mod: mod.view
                });
            });
        });
    }
}