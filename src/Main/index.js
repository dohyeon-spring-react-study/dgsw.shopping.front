import React, {Component} from 'react';

import './index.scss';
import {BrowserRouter, Link} from "react-router-dom";

class Index extends Component {

    render() {

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
                <div className='main-container'>
                    <div className='leftitem'>
                        <div className='left-content'>
                            <div className='content-header'>
                                공동구매
                            </div>
                            <div className='content-picture'>
                                product picture
                            </div>
                            <div className='content-main'>
                                test
                            </div>
                        </div>

                        <div className='left-content'>
                            <div className='content-header'>
                                이벤트상품
                            </div>
                            <div className='content-picture'>
                                product picture
                            </div>
                            <div className='content-main'>
                                test
                            </div>
                        </div>

                        <div className='left-content'>
                            <div className='content-header'>
                                이 달의 Best 상품
                            </div>
                            <div className='content-picture'>
                                product picture
                            </div>
                            <div className='content-main'>
                                test
                            </div>
                        </div>
                        
                    </div>


                    <div className='mainitem'>

                        <div className='center-content'>
                            <div className='content-header'>
                                베스트 추천상품
                            </div>

                            <div className='content-block'>
                                <div className='content-picture'>
                                    product picture
                                </div>
                                <div className='content-main'>
                                    test
                                </div>
                            </div>

                            <div className='content-block'>
                                <div className='content-picture'>
                                    product picture
                                </div>
                                <div className='content-main'>
                                    test
                                </div>
                            </div>

                            <div className='content-block'>
                                <div className='content-picture'>
                                    product picture
                                </div>
                                <div className='content-main'>
                                    test
                                </div>
                            </div>

                        </div>

                        <div className='center-content'>

                            <div className='content-header'>
                                추천상품
                            </div>

                            <div className='content-recblock'>
                                <div className='content-picture'>
                                    product picture
                                </div>
                                <div className='content-main'>
                                    test
                                </div>
                            </div>

                            <div className='content-recblock'>
                                <div className='content-picture'>
                                    product picture
                                </div>
                                <div className='content-main'>
                                    test
                                </div>
                            </div>

                            <div className='content-recblock'>
                                <div className='content-picture'>
                                    product picture
                                </div>
                                <div className='content-main'>
                                    test
                                </div>
                            </div>

                            <div className='content-recblock'>
                                <div className='content-picture'>
                                    product picture
                                </div>
                                <div className='content-main'>
                                    test
                                </div>
                            </div>

                        </div>

                        <div className='center-content'>

                            <div className='content-header'>
                                인기상품
                            </div>

                            <div className='content-popublock'>
                                <div className='content-picture'>
                                    product picture
                                </div>
                                <div className='content-main'>
                                    test
                                </div>
                            </div>

                            <div className='content-popublock'>
                                <div className='content-picture'>
                                    product picture
                                </div>
                                <div className='content-main'>
                                    test
                                </div>
                            </div>

                            <div className='content-popublock'>
                                <div className='content-picture'>
                                    product picture
                                </div>
                                <div className='content-main'>
                                    test
                                </div>
                            </div>

                            <div className='content-popublock'>
                                <div className='content-picture'>
                                    product picture
                                </div>
                                <div className='content-main'>
                                    test
                                </div>
                            </div>

                        </div>

                        <div className='center-content'>

                            <div className='content-header'>
                                특가 상품
                            </div>

                            <div className='content-specialblock'>
                                <div className='content-picture'>
                                    product picture
                                </div>
                                <div className='content-main'>
                                    test
                                </div>
                            </div>

                            <div className='content-specialblock'>
                                <div className='content-picture'>
                                    product picture
                                </div>
                                <div className='content-main'>
                                    test
                                </div>
                            </div>

                            <div className='content-specialblock'>
                                <div className='content-picture'>
                                    product picture
                                </div>
                                <div className='content-main'>
                                    test
                                </div>
                            </div>

                            <div className='content-specialblock'>
                                <div className='content-picture'>
                                    product picture
                                </div>
                                <div className='content-main'>
                                    test
                                </div>
                            </div>

                        </div>

                    </div>



                    <div className='rightitem'>

                        <div className='advertisement'>
                            광고
                        </div>

                        <div className='advertisement'>
                            광고
                        </div>

                        <div className='advertisement'>
                            광고
                        </div>

                        <div className='advertisement'>
                            광고
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Index;