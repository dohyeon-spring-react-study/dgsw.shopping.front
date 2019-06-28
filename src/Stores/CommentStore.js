import {observable, action} from "mobx";
import axios from 'axios';

class CommentStore {
    static __instance = null;

    static getInstance() {
        if (CommentStore.__instance == null)
            CommentStore.__instance = new CommentStore();
        return CommentStore.__instance;
    }

    constructor() {
        CommentStore.__instance = this;
    }

    @observable comment = null;
    @action findComment = async(value) =>{
        try{
            let response = await axios({
                url: `http://localhost:8080/api/comment/getcomment/${value}`,
                method:'get',
                timeout: 3000
            });
            if(response.status === 200){
                this.comment = response.data;
                console.log(response.data);
            }
            else{
                this.comment = null;
            }
        }catch(e){
            console.log(e.response);
        }
    }

    @action addComment = async(productId, useraccount, content) =>{
        try{
            let response = await axios({
                url: `http://localhost:8080/api/comment/addcomment`,
                method:'post',
                data : {
                    productId : productId,
                    useraccount : useraccount,
                    content : content
                },
                timeout: 3000
            });
            if(response.status === 200){
                alert('상품 평이 등록되었습니다.');
                window.location.reload();
            }
            else{
                this.comment = null;
            }
        }catch(e){
            console.log(e.response);
        }
    }

}

export default CommentStore.getInstance();