import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch, } from 'react-router-dom';
import Home from './components/home';
import Singin from './components/auth/singin';
import Singup from './components/auth/singup';
import Singout from './components/auth/singout'
import Header from './components/common/header';

import UserWage from './components/userWage';
import AdminWage from './components/adminWage';
ReactDOM.render(
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path='/singin' component={Singin} />
                    <Route path='/singup' component={Singup} />
                    <Route path='/singout' component={Singout} />>
                    <Route path="/adminWage" component={AdminWage}/>
                    <Route path="/userWage" component={UserWage}/>
                    <Route path='/' component={Home} />
                </Switch>
            </div>
        </BrowserRouter>,
    document.querySelector('.content')
);