export const pagesReducer=(state=[],action)=>{
    switch(action.type){
    
        case "INIT":
            return [...action.payload];
        case "ADD_PAGE":
            return [...action.payload];
        case "DELETE_PAGE":
            return [...action.payload];
        case "UPDATE_PAGE":
            return [...action.payload];
        default:
            return state;
    
    
    
    }
    }