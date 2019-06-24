import React, {Component} from 'react';
import {inject, observer} from "mobx-react";


@inject('stores')
@observer
class Login extends Component {

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

    handleClick = (e) => {
        let p = this.props.stores.UserStore.findUser(this.state);
        if(p !== null)
            this.props.history.push('/main');
    }

    render() {
        return (
            <div>
                <h1>로그인(테스팅)</h1>
                희망아이디: <input type="text" name="account" value={this.state.account} onChange={this.handlechange} /><br/><br />
                희망패스워드: <input type="password" name="password" value={this.state.password} onChange={this.handlechange} /><br/><br />
                <button onClick={this.handleClick}>로그인</button>
            </div>
        );
    }
}

export default Login;