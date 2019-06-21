import {Provider} from "mobx-react";
import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import './App.scss';
import Register from './Register';
import Login from './Login';
import Stores from './Stores';

const App = () => (
    <Provider stores={Stores}>
        <BrowserRouter>
            <header className='app-header'>
                <ul className='menubar'>
                    <li>Home/</li>
                    <li>회원정보변경/</li>
                    <li>고객센터/</li>
                    <li>장바구니/</li>
                    <li>배송조회/</li>
                    <li>마일리지/</li>
                    <li>이용안내</li>
                </ul>
            </header>

            <section className='app-body'>
                <Route path="/" exact component={Register} />
                <Route path="/login" component={Login} />
            </section>
        </BrowserRouter>
    </Provider>
);

export default App;
