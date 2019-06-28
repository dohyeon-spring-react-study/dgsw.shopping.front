import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class BasketListItem extends Component {

    state = {
        id : this.props.data.id,
        count : this.props.data.count
    };

    setValue = (e) =>{
        this.setState({
             [e.target.name] : e.target.value
        });
        this.props.stores.BasketStore.setCount(this.state.id, e.target.value);
    }

    deleteBasket = () => {
        this.props.stores.BasketStore.deleteBasket(this.state);
    }

    render() {
        let {data} = this.props;
        let price = data.price * data.count;
        return (
            <div className='ddiv'>
                <div>
                    {data.productname}
                </div>
                <div>
                    {data.price}
                </div>
                <div>
                    <input type="number" name="count" min="0" value={this.state.count} onChange={this.setValue} />
                </div>
                <div>
                    {price}
                </div>
                <div>
                    <button onClick={this.deleteBasket}>삭제하기</button>
                </div>
            </div>
        );
    }
}

export default BasketListItem;