import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Link} from "react-router-dom";

@inject('stores')
@observer
class ProductPicture extends Component{

    render() {
        let {data} = this.props;
        let link = 'http://localhost:8080/api/image/' + data.id;
        let imglink = '/detail/'+data.id;
        return (
            <Link to={imglink}><div className='content-picture'>
                <img src = {link} />
            </div></Link>
        );
    }
}

export default ProductPicture;