import React from 'react';
import LowCategoryList from "./LowCategoryList";

const LowCategory = (props) => {

    return(
        <div>
            <div className='content-header'>
                하위 항목
            </div>
            <div className='content-main'>
                {props.items.map(item => <LowCategoryList key={item.lowcategory} category={item}/>)}
            </div>
        </div>
    );
}

export default LowCategory;