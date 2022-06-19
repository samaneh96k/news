export const GroupReducer=(state=[],action)=>{
    switch(action.type){
    
        case "GET_GROUP":
            return [...action.payload];
             case "GET_FILTERGROUP":
            return [...action.payload];
       
        default:
            return state;
    
    
    
    }
    }