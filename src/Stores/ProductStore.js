import {observable, action} from "mobx";
import axios from 'axios';

class ProductStore {
    static __instance = null;

    static getInstance() {
        if (ProductStore.__instance == null)
            ProductStore.__instance = new ProductStore();
        return ProductStore.__instance;
    }

    constructor() {
        ProductStore.__instance = this;
    }

    @observable productItem = null;
    @action findProduct = async(value) =>{
        try{
            let response = await axios({
               url: `http://localhost:8080/api/product/getproduct/${value}`,
                method:'get',
                timeout: 3000
            });
            if(response.status === 200){
                this.productItem = response.data;
                console.log(response.data);
            }
            else{
                this.productItem = null;
            }
        }catch(e){
            console.log(e.response);
        }
    }

    @observable lowproduct = null;
    @action findLowProduct = async(value) =>{
        try{
            let response = await axios({
                url: `http://localhost:8080/api/product/lowproduct/${value}`,
                method:'get',
                timeout: 3000
            });
            if(response.status === 200){
                this.lowproduct = response.data;
                console.log(response.data);
            }
            else{
                this.lowproduct = null;
            }
        }catch(e){
            console.log(e.response);
        }
    }

    @observable productpicture = null;
    @action findProductPicture = async(value) =>{
        try{
            let response = await axios({
                url: `http://localhost:8080/api/image/${value}`,
                method:'get',
                timeout: 3000
            });
            if(response.status === 200){
                this.lowproduct = response.data;
                console.log(response.data);
            }
            else{
                this.productpicture = null;
            }
        }catch(e){
            console.log(e.response);
        }
    }

    @observable detailproduct = null;
    @action detailProduct = async(value) =>{
        try{
            let response = await axios({
                url: `http://localhost:8080/api/product/detailproduct/${value}`,
                method:'get',
                timeout: 3000
            });
            if(response.status === 200){
                this.detailproduct = response.data;
                console.log(response.data);
            }
            else{
                this.detailproduct = null;
            }
        }catch(e){
            console.log(e.response);
        }
    }

}

export default ProductStore.getInstance();