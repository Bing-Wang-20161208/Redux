import React, { Component } from 'react';
import { increment, decrement } from '../../actions/cart'

export default class CartList extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>商品名称</th>
                        <th>价格</th>
                        <th>数量</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        {/* this.state.cartlist.map((item) => {
                            return (
                                <tr key = {item.id} >
                                    <th>{item.id}</th>
                                    <th>{item.title}</th>
                                    <th>{item.price}</th>
                                    <th>
                                        <button
                                            onClick = {
                                                () => {
                                                    this.props.store.dispatch(decrement(item.id))
                                                }
                                            }
                                        >-</button>
                                        <span>{item.amount}</span>
                                        <button
                                            onClick = {
                                                () => {
                                                    this.props.store.dispatch(increment(item.id))
                                                }
                                            }
                                        >+</button>
                                    </th>
                                    <th></th>
                                </tr>
                            )
                        }) */}
                    }
                </tbody>
            </table>
        )
    }
}
