export const pageReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_PAGE":
            return { ...action.payload };
            case "VISIT_PAGE":
            return { ...action.payload };
        default:
            return state;
    }
};