import React, {Component} from 'react';
import {inject, observer} from "mobx-react";


@inject('stores')
@observer
class Login extends Component {


    componentDidMount() {
        localStorage.clear();
    }

    constructor(props){
        super(props);
        this.state = {
            account : '',
            password: ''
        };
    }

    handlechange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    registerClick = (e) => {
        window.location.href = '/register';
    }


    handleClick = (e) => {
        this.props.stores.UserStore.findUser(this.state);
    }

    render() {
        return (
            <div>
                <h1>로그인</h1>
                아이디: <input type="text" name="account" value={this.state.account} onChange={this.handlechange} /><br/><br />
                패스워드: <input type="password" name="password" value={this.state.password} onChange={this.handlechange} /><br/><br />
                <button onClick={this.registerClick}>회원가입</button>
                <button onClick={this.handleClick}>로그인</button>
            </div>
        );
    }
}

export default Login;