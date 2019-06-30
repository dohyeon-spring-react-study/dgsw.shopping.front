import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {BrowserRouter, Link} from "react-router-dom";

@inject('stores')
@observer
class Index extends Component {

    constructor(props){
        super(props);
        this.state = {
            account : '',
            password: '',
            name: '',
            callnumber: '',
            phonenumber: '',
            zipcode: '',
            address: '',
            email: '',
            mileage: 0
        };
    }

    isClick = false;

    checkID =() =>{
        if(this.state.account === ''){
            alert('아이디를 입력해 주세요.');
            return;
        }
        this.props.stores.UserStore.duplicateID(this.state.account);
        this.isClick = true;
    }

    handlechange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleClick = (e) => {
        if(!this.isClick){
            alert('중복체크를 해 주세요.');
            return;
        }
        this.props.stores.UserStore.addUser(this.state);
    }

    render() {
        return (
            <div>
                <h1>회원가입</h1>
                <hr />
                    <div>
                        00 가족을 위한 전문 쇼핑몰로 저렴한 가격과 신개념 고객서비스를 통해 고객 만족을 최우선으로
                        합니다.
                        쇼핑몰에 회원으로 가입하시면 보다 나은 편리합니다.
                    </div>
                <hr />
                <div>
                    희망아이디: <input type="text" name="account" value={this.state.account} onChange={this.handlechange} /> <button onClick={this.checkID}>중복확인</button><br/><br />
                    희망패스워드: <input type="password" name="password" value={this.state.password} onChange={this.handlechange} /><br/><br />
                    패스워드확인: <input type="password" /><br/><br />
                    성명: <input type="text" name="name" value={this.state.name} onChange={this.handlechange} /><br/><br />
                    전화번호: <input type="text" name="callnumber" value={this.state.callnumber} onChange={this.handlechange} /><br/><br />
                    핸드폰: <input type="text" name="phonenumber" value={this.state.phonenumber} onChange={this.handlechange} /><br/><br />
                    우편번호: <input type="text" name="zipcode" value={this.state.zipcode} onChange={this.handlechange} /><button>우편번호찾기</button><br/><br />
                    주소<br /><input type="text" name="address" value={this.state.address} onChange={this.handlechange} /><br/><br />
                    이메일주소: <input type="text" name="email" value={this.state.email} onChange={this.handlechange} /><br/><br />
                    회원약관<br />
                    <textarea disabled>테스트테스트테스트</textarea><br/><br />
                    회원약관에 <input name="agree" type="radio"  />동의 함 <input name="agree" type="radio" />동의 안함
                </div>
                <button onClick={this.handleClick}>확인</button>
                <Link to="/login"><button>취소</button></Link>
            </div>
        );
    }
}

export default Index;