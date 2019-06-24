import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './index.scss';

class Index extends Component {
    render() {
        return (
            <div>
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