import * as React   from 'react';
import Bundle       from '../../../bundle';    // 实现按需加载模块

const load = (componentName: string) => () => {
    switch (componentName) {
        case 'Home':
            return import('../../Home');

        case 'About':
            return import('../../About');
        
        default:
            return import('../../Home');
    }
};

export const HomePage  = (props: any) => <Bundle load={load('Home')}>{(Home) => <Home {...props} />}</Bundle>;
export const AboutPage = (props: any) => <Bundle load={load('About')}>{(About) => <About {...props} />}</Bundle>;