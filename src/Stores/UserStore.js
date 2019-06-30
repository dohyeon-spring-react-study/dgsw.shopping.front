import {observable, action} from "mobx";
import axios from 'axios';

class UserStore{
    static __instance = null;
    static getInstance(){
        if(UserStore.__instance == null)
            UserStore.__instance = new UserStore();
        return UserStore.__instance;
    }
    constructor(){
        UserStore.__instance = this;
    }



    @action addUser = async (value) => {
        if(this.findID !== null){
            alert('중복체크를 해 주세요.');
            return;
        }
        try{
            let response = await axios({
                url:`http://localhost:8080/api/user/adduser`,
                headers:{
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'post',
                data: value,
                timeout: 3000
            });
            if(response.status === 200){
                alert('회원가입이 완료되었습니다.');
                window.location.href = '/login';
            }
            else{
                alert('공백이 존재합니다.');
            }
        }catch(e){
            console.log(e.response);
        }
    }

    @observable useritem = null;
    @action findUser = async (value) => {
        try{
            let response = await axios({
                url:`http://localhost:8080/api/user/finduser`,
                headers:{
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'get',
                params:{
                    account : value.account,
                    password: value.password
                },
                timeout: 3000
            });
            if(response.status === 200 && response.data !== ""){
                console.log(response.data);
                alert(response.data.name + '님 환영합니다.');
                localStorage.setItem('userId', response.data.id);
                localStorage.setItem('useraccount', response.data.account);
                this.useritem = response.data;
                window.location.href="/main";
            }
            else{
                alert('아이디나 비밀번호가 일치하지 않습니다.');
                this.useritem = null;
            }
        }catch(e){
            console.log(e.response);
        }
    }

    @observable findID = null;
    @action duplicateID = async (value) => {
        try{
            let response = await axios({
                url: `http://localhost:8080/api/user/findaccount/${value}`,
                headers:{
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method : 'get',
                timeout: 3000
            });
            if(response.status === 200 && response.data.account !== ""){
                this.findID = response.data;
                alert('중복된 아이디입니다.');
            }
            else{
                this.findID = null;
                alert('사용 가능한 아이디입니다.');
            }
        }catch(e){
            console.log(e);
        }
    }
}

export default UserStore.getInstance();