import { getGroupPage } from "../services/pageService";





   export const getAllGroupPages =()=>{
    return async (dispatch) => {
        const {data}= await getGroupPage();
        await dispatch({type:"INIT",payload:data.groups});
    };
};
