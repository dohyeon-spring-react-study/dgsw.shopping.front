import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

import CategoryProduct from './CategoryProduct';
import LowCategory from './LowCategory';
import Index from '../Detail';

import './Category.scss';
import {Link} from "react-router-dom";

@inject('stores')
@observer
class Category extends Component {

    componentDidUpdate(prevProps) {
        if(prevProps.location.key !== this.props.location.key){
            window.location.reload();
        }
    }

    componentDidMount() {
        this.props.stores.ProductStore.findProduct(this.props.match.params.categoryid);
        this.props.stores.ProductStore.findLowProduct(this.props.match.params.categoryid);
    }

    render() {
        let p = this.props.stores.ProductStore;
        let link = '/basket/' + localStorage.getItem('userId');
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
                <div className='topHeader'>
                    Main Visual
                </div>
                <div className='category-container'>
                    <div className='leftitem'>
                        <div className='left-content'>
                            {p.lowproduct && <LowCategory items={p.lowproduct}/>}
                        </div>
                    </div>

                    <div className='mainitem'>
                        {p.productItem && <CategoryProduct items={p.productItem}/>}
                    </div>

                </div>

            </div>
        );
    }
}

export default Category;
