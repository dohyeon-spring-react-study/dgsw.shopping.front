import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class LowCategoryList extends Component {

    render(){
        let {category} = this.props;

        return(
            <div className='low-div'>
                {category.lowcategory}
            </div>
        );
    };

}

export default LowCategoryList