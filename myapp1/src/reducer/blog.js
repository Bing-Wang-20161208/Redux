import actionTypes from '../action/actionTypes';

const initState = {
    list : [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },{
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
    ],
    errMsg : '',
    isLoading : false
};
export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.START_FETCH_BLOG_LIST :
            return {
                ...state,
                isLoading : true
            };
        case actionTypes.FETCH_BLOG_LIST_SUCCESS :
            return {
                ...state,
                isLoading : false,
                list : action.payload.list,
                errMsg : ''
            };
        case actionTypes.FETCH_BLOG_LIST_FAILED :
            return {
                ...state,
                isLoading : false,
                errMsg : 'something wrong!!!'
            };
        default:
            return state;
    }
}