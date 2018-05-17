import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import '../layout/custom.css';

import React from 'react';
import Routes from './routes';
import Menu from '../layout/menu';


export default props => (
    <div className="container">
        <Menu />
        <Routes />
    </div>
)