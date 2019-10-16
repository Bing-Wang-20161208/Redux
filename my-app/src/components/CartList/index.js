import React, { Component } from 'react';

//connect方法执行之后是一个高阶组件，
import { connect } from 'react-redux';  //那个组件需要用到store，就引入connect组件
//导入actionCreators
import { increment, decrement } from '../../actions/cart'

class CartList extends Component {
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
                        this.props.cartList.map((item) => {
                            return (
                                <tr key = {item.id} >
                                    <th>{item.id}</th>
                                    <th>{item.title}</th>
                                    <th>{item.price}</th>
                                    <th>
                                        {/* <button
                                            onClick = {
                                                () => {
                                                    this.props.dispatch(decrement(item.id))
                                                }
                                            }
                                        >-</button> */}
                                        <button onClick = {this.props.decrement.bind(this, item.id)}>-</button>
                                        <span>{item.amount}</span>
                                        {/* <button
                                            onClick = {
                                                () => {
                                                    this.props.dispatch(increment(item.id))
                                                }
                                            }
                                        >+</button> */}
                                        <button onClick = {this.props.increment.bind(this, item.id)}>-</button>
                                    </th>
                                    <th></th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

//mapStateToProps,这里的state实际上就是store.getState()的值
const mapStateToProps = (state) => {    //使用Provider，connect操作省去了传递数据的中间环节
//这里return什么，组件里就可以通过this.props来获取
    return {
        cartList : state.cart
    }
}

//mapDispatchToProps
// const mapDispatchToProps = () => {
//     return {
//         add : () => dispatch(increment(id)),
//         reduce : () => dispatch(decrement(id))
//     }
// }

//connect方法有四个参数，常用的就是前两个
//第一个参数是mapStateToProps，作用就是从store里把state注入到当前组件的props上面，可通过props直接调用
//第二个参数可以是mapDispatchToProps,这个主要作用是把action生成的方法注入到当前组件的props上，一般来说没必要
//  直接第二个参数传递一个对象，这里面的对象就是actionCreators，只要传入了actionCreators，在组件内就可以通过
//  this.props.actionCreator来调用，这样调用之后，对应actionCreator就会自动把他内部的action dispatch出去 
export default connect(mapStateToProps, { increment, decrement })(CartList); //connect执行之后才是一个高阶组件