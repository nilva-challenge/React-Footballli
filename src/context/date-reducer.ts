import { GET_DATA_FAIL, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./date-action"

const dateReducer=(state:any,action:any)=>{
    switch (action.type) {
      case GET_DATA_REQUEST:
        return{
            ...state,
            loading:true
        };
      case GET_DATA_SUCCESS:
        return{
            ...state,
            loading:false,
            data:action.payload
        };
      case GET_DATA_FAIL:
        return{
            ...state,
            loading:false,
            error:action.payload
        };
    default:
     return state; 
    }
}

export default dateReducer