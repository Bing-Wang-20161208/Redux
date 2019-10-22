import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogItem from './BlogItem';
// import { getPost } from '../../services';
import { fetchBlogList } from '../../action/blog';

//这实际上是一个容器组件，聪明组件
class BlogList extends Component {
    componentDidMount () {
        this.props.fetchBlogList();
    }
    //这里还需要对传入的数据做prop-types第三方库类型和必需性验证
    render() {
        const { list, isLoading, errMsg } = this.props;
        const hasError = Boolean(errMsg);
        return (
            isLoading
            ?
            <div>loading...</div>
            :
            (
                hasError
                ?
                <div>{errMsg}</div>
                :
                <ul>
                    {
                        list.map( blog => {
                            return <BlogItem key = {blog.id} {...blog} />
                        })
                    }
                </ul>
            )
        )
    }
}

const mapState = state => ({
    list : state.blog.list,
    isLoading : state.blog.isLoading,
    errMsg : state.blog.errMsg
})
export default connect(mapState, { fetchBlogList })(BlogList);