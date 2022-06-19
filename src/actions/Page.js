import {  createCommentPage, getOnePage ,GetCommentPage} from "../services/pageService";




export const getOnepage=(Id,PageId)=>{
    return async (dispatch) => {

        const res= await getOnePage(Id,PageId);
        await dispatch({type:"GET_PAGE",payload:res.data});
    };
}


export const addCommentPage=(Id,PageId,comment)=>{
    return async (dispatch,getState) => {
        const {data}=await createCommentPage(Id,PageId,comment);
        await dispatch({type:"ADD_COMMENT",payload:[...getState().commentPages, data.list]});
    }
}
export const GetCommentsPage=(Id,pageId)=>{
    return async (dispatch) => {
        const {data}=await GetCommentPage(Id,pageId);
        await dispatch({type:"GET_COMMENT",payload:[data.comment]});
    }
}