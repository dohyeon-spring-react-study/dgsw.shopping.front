import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './Basket.scss';
import {inject, observer} from "mobx-react";
import BasketList from './BasketList';

@inject('stores')
@observer
class Index extends Component {

    componentDidMount() {
        this.props.stores.BasketStore.findBasket(this.props.match.params.userId);
    }


    setOrder = () => {
        if(this.props.stores.BasketStore.basketitem.length === 0){
            alert('장바구니에 들어 있는 상품이 없습니다.');
            return;
        }
        this.props.stores.BasketStore.deleteAll(localStorage.getItem('userId'));
    }

    setRefresh = () => {
        if(this.props.stores.BasketStore.basketitem.length === 0){
            alert('장바구니에 들어 있는 상품이 없습니다.');
            return;
        }
        window.location.reload();
    }

    render() {
        let link = '/basket/' + localStorage.getItem('userId');
        let b = this.props.stores.BasketStore;
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
                    장바구니
                </div>
                <br />
                <div className='maintext'>
                    고객님께서 주문하신 상품내역을 변경하시거나 삭제하실 수가 있습니다.<br />
                    계속주문을 원하시면 [쇼핑하기]을 클릭하세요.<br />
                    주문하신 상품에 대해 마일리지가 계속적으로 누적됩니다.<br />
                    마일리지의 누적점수에 따라 사은품이 적용되며 추후 주문 시 동봉하여 발송됩니다.<br />
                </div>
                <br />
                <div className='ddiv'>
                    <div className='ddiv-head'>
                        주문상품
                    </div>
                    <div className='ddiv-head'>
                        가격
                    </div>
                    <div className='ddiv-head'>
                        주문수
                    </div>
                    <div className='ddiv-head'>
                        합계
                    </div>
                    <div className='ddiv-head'>
                        삭제
                    </div>
                </div>
                {b.basketitem && <BasketList items={b.basketitem}/>}
                <br />
                <div className='btnlist'>
                    <button onClick={this.setOrder}>주문하기</button>
                    <Link to="/main"><button>쇼핑하기</button></Link>
                    <button onClick={this.setRefresh}>다시 계산하기</button>
                </div>
            </div>
        );
    }
}

export default Index;