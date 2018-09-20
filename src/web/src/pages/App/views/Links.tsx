import * as React   from 'react';
import { Link }     from 'react-router-dom';

export const Links = () => (
    <div className="routes">
        <ul>
            <li>
                <Link to="/home">主页</Link>
            </li>
            <li>
                <Link to="/about">关于</Link>
            </li>
        </ul>
    </div>
);