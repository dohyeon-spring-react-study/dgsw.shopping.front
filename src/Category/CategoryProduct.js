import React from 'react';
import CategoryProductItem from './CategoryProductItem';

import './Category.scss';

const CategoryProduct = (props) => {

    return(
          <div className='center-content'>

              <div className='content-header'>
                  상품 목록
              </div>

              {props.items.map(item => <CategoryProductItem key={item.id} product={item}/>)}

          </div>
  )
};

export default CategoryProduct;