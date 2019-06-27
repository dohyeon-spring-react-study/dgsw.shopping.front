import React, {Component} from 'react';

class BasketListItem extends Component {
    render() {
        let {data} = this.props;
        return (
            <div className='ddiv'>
                <div>
                    {data.productname}
                </div>
                <div>
                    {data.price}
                </div>
                <div>
                    <input type="number" min="0" value={data.count} />
                </div>
                <div>
                    합계
                </div>
                <div>
                    <input type="checkbox" />
                </div>
            </div>
        );
    }
}

export default BasketListItem;