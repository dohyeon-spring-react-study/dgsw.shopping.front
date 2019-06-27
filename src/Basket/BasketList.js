import React from 'react';

import BasketListItem from './BasketListItem';

const BasketList = (props) => {

    return (
        <div>
            {props.items.map(item => <BasketListItem key={item.id} data={item} />) }
        </div>
    );
}

export default BasketList;