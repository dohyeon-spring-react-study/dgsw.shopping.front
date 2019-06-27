import React from 'react';

import ProductPicture from './ProductPicture';
import './Category.scss';

const CategoryProductItem = (props) => {

    let {product} = props;

    return(
      <div className='content-block'>
          <ProductPicture data={product} />
          <div className='content-main'>
            상품명 : {product.name} <br />
            상품내용 : {product.content} <br />
            가격 : {product.sellprice}원
          </div>
      </div>
    );
};

export default CategoryProductItem;