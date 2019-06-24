import {Provider} from "mobx-react";
import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import './App.scss';
import Register from './Register';
import Login from './Login';
import Stores from './Stores';
import Main from './Main';
import Category from './Category';


const App = () => (
    <Provider stores={Stores}>
        <BrowserRouter>
            <header className='app-header'>
                <ul className='menubar'>
                    <li>Home</li>
                    <li>회원정보변경</li>
                    <li>고객센터</li>
                    <li>장바구니</li>
                    <li>배송조회</li>
                    <li>마일리지</li>
                    <li>이용안내</li>
                </ul>
            </header>
            <div className='menuitem'>
                <li><Link to="/category/1">상의(남)</Link></li>
                <li><Link to="/category/2">하의(남)</Link></li>
                <li><Link to="/category/3">상의(여)</Link></li>
                <li><Link to="/category/4">하의(여)</Link></li>
                <li><Link to="/category/5">구두</Link></li>
                <li><Link to="/category/6">가방</Link></li>
                <li><Link to="/category/7">소품</Link></li>
            </div>
            <section className='app-body'>
                <Route path="/" exact component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/main" component={Main} />
                <Route path="/category/:categoryid"  component={Category} />
            </section>
        </BrowserRouter>
    </Provider>
);

export default App;
