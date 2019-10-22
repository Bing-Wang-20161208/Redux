import React from 'react';


//这实际上是一个展示组件,傻瓜组件
export default function BlogItem(props) {
    return (
        <li>
            <h3> {props.title} </h3>
            <p> {props.body} </p>
        </li>
    )
}
