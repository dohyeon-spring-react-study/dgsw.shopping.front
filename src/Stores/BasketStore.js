import {observable, action} from "mobx";
import axios from 'axios';
import {Redirect} from "react-router-dom";

class BasketStore {
    static __instance = null;

    static getInstance() {
        if (BasketStore.__instance == null)
            BasketStore.__instance = new BasketStore();
        return BasketStore.__instance;
    }

    constructor() {
        BasketStore.__instance = this;
    }

    @action addBasket = async(value) =>{
        try{
            let response = await axios({
                url: `http://localhost:8080/api/basket/addbasket`,
                method:'post',
                data : value,
                timeout: 3000
            });
            if(response.status === 200){
                alert('장바구니에 추가되었습니다.\n메인으로 이동합니다.');
                window.location.href = '/main';
            }
        }catch(e){
            console.log(e.response);
        }
    }

    @observable basketitem = null;
    @action findBasket = async(value) =>{
        try{
            let response = await axios({
                url: `http://localhost:8080/api/basket/findbasket/${value}`,
                method:'get',
                timeout: 3000
            });
            if(response.status === 200){
                this.basketitem = response.data;
            }
            else{
                this.basketitem = null;
            }

        }catch(e){
            console.log(e.response);
        }
    }

}

export default BasketStore.getInstance();