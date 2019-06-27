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
                this.useritem = response.data;
            }
            else{
                alert('아이디나 비밀번호가 일치하지 않습니다.');
                this.useritem = null;
            }
        }catch(e){
            console.log(e.response);
        }
    }
}

export default UserStore.getInstance();