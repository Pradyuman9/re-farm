/* eslint-disable no-undef */
function productListReducer(state={products:[]},action){
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true};
        case PRODUCT_LIST_SUCCESS:
            return {loading:false,products:action.payload};
        case PRODUCT_LIST_FAIL:
            return {loading:false,error: action.payload};
        default:
            return state;
    }
}

export {productListReducer};