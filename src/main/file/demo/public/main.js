import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch, } from 'react-router-dom';
import Home from './components/home';
import Singin from './components/auth/singin';
import Singup from './components/auth/singup';
import Singout from './components/auth/singout'
import Header from './components/common/header';
import AdminReviewCompany from './components/adminReviewCompany';
import PersonalJobOffers from './components/personalJobOffers';
import PersonalResume from './components/personalResume';
import CompanyRelease from './components/companyRelease'


ReactDOM.render(
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path='/singin' component={Singin} />
                    <Route path='/singup' component={Singup} />
                    <Route path='/singout' component={Singout} />
                    <Route path='/adminReviewCompany' component={AdminReviewCompany} />
                    <Route path='/personalJobOffers' component={PersonalJobOffers} />
                    <Route path='/personalResume' component={PersonalResume} />
                    <Route path='/release' component={CompanyRelease} />


                    <Route path='/' component={Home} />
                </Switch>
            </div>
        </BrowserRouter>,
    document.querySelector('.content')
);