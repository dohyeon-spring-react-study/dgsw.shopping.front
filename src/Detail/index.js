import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

import DetailView from "./DetailView";
import {Link} from "react-router-dom";


@inject('stores')
@observer
class Index extends Component {

    componentDidMount() {
        this.props.stores.ProductStore.detailProduct(this.props.match.params.productid);
    }

    render() {
        let link = '/basket/' + localStorage.getItem('userId');

        let p = this.props.stores.ProductStore;
        return (
            <div>
                <div className='menuitem'>
                    <li><Link to="/main">메인</Link></li>
                    <li><Link to="/category/1">상의(남)</Link></li>
                    <li><Link to="/category/2">하의(남)</Link></li>
                    <li><Link to="/category/3">상의(여)</Link></li>
                    <li><Link to="/category/4">하의(여)</Link></li>
                    <li><Link to="/category/5">구두</Link></li>
                    <li><Link to="/category/6">가방</Link></li>
                    <li><Link to="/category/7">소품</Link></li>
                    <li><Link to={link} >장바구니</Link></li>
                    <li><Link to="/login" >로그아웃</Link></li>
                </div>
                {p.detailproduct && <DetailView items={p.detailproduct}/>}
            </div>
        );
    }
}

export default Index;