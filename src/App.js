import {Provider} from "mobx-react";
import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import './App.scss';
import Register from './Register';
import Login from './Login';
import Stores from './Stores';
import Main from './Main';
import Category from './Category';
import Detail from './Detail';
import Basket from './Basket';

const App = () => (
    <Provider stores={Stores}>
        <BrowserRouter>
            <section className='app-body'>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/main" component={Main} />
                <Route path="/category/:categoryid" render={(props) => <Category {...props} />} />
                <Route path="/detail/:productid" render={(props) => <Detail {...props} />} />
                <Route path="/basket/:userId" render={(props) => <Basket {...props} />} />
            </section>
        </BrowserRouter>
    </Provider>
);

export default App;
