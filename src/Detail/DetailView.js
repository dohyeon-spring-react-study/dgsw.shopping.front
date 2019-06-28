import React, {Component} from 'react';
import Comment from './Comment';

import './Detail.scss';
import {inject, observer} from "mobx-react";


@inject('stores')
@observer
class DetailView extends Component {


    componentWillUpdate(nextProps, nextState, nextContext) {
        if(nextState.comment !== this.state.comment) return;
        if(nextState.count !== this.state.count) return;
        window.location.reload();
    }

    componentDidMount() {
        this.props.stores.CommentStore.findComment(this.props.items.id);
    }

    state = {
        userId : localStorage.getItem('userId'),
        productname : this.props.items.name,
        price : this.props.items.sellprice,
        count : 0,
        comment : ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    backCategory = (e, id) => {
        let link = '/category/'+e;
        window.location = link;
    }

    addBasket = () => {
        let ct = this.state.count;
        if(ct === 0){
            alert('1개 이상의 수량을 선택해주세요.');
            return;
        }
        this.props.stores.BasketStore.addBasket(this.state);
    }

    changeComment = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    addcomment = () =>{
        this.props.stores.CommentStore.addComment(this.props.items.id, localStorage.getItem('useraccount'), this.state.comment);
    }


    render() {
        let c = this.props.stores.CommentStore;
        let {items} = this.props;
        let imglink = 'http://localhost:8080/api/image/' + items.id;
        return (
            <div>

                <div className='topHeader'>
                    제품명 : {items.name}
                </div>

                <div>
                    <img src={imglink}/>

                    <div>
                        제조사 : 대소고제조사<br/>
                        마일리지 : {items.mileage}점<br/>
                        주문수량: <input type="number" name="count" min="0" value={this.state.count} onChange={this.handleChange} />개
                        <br/>
                        시중가격 : {items.normalprice}원<br/>
                        판매가격 : {items.sellprice}원<br/>
                        <button onClick={this.backCategory.bind(this, items.productId)}>쇼핑하기</button>
                        <button onClick={this.addBasket.bind(this)}>장바구니</button>
                    </div>

                </div>

                <div className='detail-container'>
                    <div className='header'>
                        제품상세정보
                    </div>
                    <div className='content'>
                        {items.detail}
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='header'>
                        구매 정보
                    </div>
                    <div className='content'>
                        <br />
                        000님의 쇼핑 도우미 000 입니다. <br/>
                        000님의 상품에 대한 문의나 배송문의는 저에게 바로 연락을 주세요<br/>
                        고객 한 분 한 분을 소중히 여기며 최고의 서비스를 약속 드립니다.<br/>
                        직통전화번호:080-000-0000 이나 MD전용게시판을 이용해주세요<br/>
                        <br />
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='header'>
                        고객의 상품 평
                    </div>
                    <div className='content'>
                        <br />
                        ※ 고객의 상품평은 추후 쇼핑몰의 제품선정에 중요한 역할을 합니다.<br/>
                        ※ 쇼핑몰의 더 나은 상품선정과 고객 분들의 쇼핑문화의 질을 높이 고자 좋은 평은<br/>
                        매월 심사 후 쇼핑몰 메인에 올려드리고 선물을 증정하고 있습니다.<br/>
                        <br />
                        <div>
                            상품 평 : <input name="comment" value={this.state.comment} className='inputText' type="text" onChange={this.changeComment} />
                            <button onClick={this.addcomment}>등록하기</button>
                        </div>
                        <br />
                        <div className="ddiv">
                            <div className='ddiv-head'>
                                아이디
                            </div>
                            <div className='ddiv-head'>
                                상품 평 내용
                            </div>
                            <div className='ddiv-head'>
                                작성일
                            </div>
                        </div>
                        {c.comment && <Comment items = {c.comment} />}
                        <br />
                    </div>
                </div>

            </div>
        );
    }

}

export default DetailView;