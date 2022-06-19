//1
import  http from './httpService';
import config from "./config.json";

  
    export const getOnePage=(Id,pageId)=> {
        return http.get(`${config.localapi}/api/page/${Id}/${pageId}`);
   };
 

    export const getGroupPage=()=> {
        return http.get(`${config.localapi}/api/GroupPage`);
    };
    export const getSingleGroup= (groupId) => {
        return http.get(`${config.localapi}/api/GroupPage/${groupId}`);
    };
   export const createGroupPage=(groupPage)=>{
        return http.post(`${config.localapi}/api/GroupPage`,groupPage);
    };
 export const deleteGroup=(groupId)=>{
        return http.delete(`${config.localapi}/api/GroupPage/${groupId}`);
    };
     export const updateGroup=(groupId,pageGroup)=>{
        return http.put(`${config.localapi}/api/GroupPage/${groupId}`,pageGroup);
    };

//api for cms Page
    export const createCmsPage=(Page,groupId)=>{
        return http.post(`${config.localapi}/api/page/addpage/${groupId}`,Page);
    };
    export const updatePage=(Id,PageId,page)=>{
        return http.put(`${config.localapi}/api/page/${Id}/${PageId}`,page);
    }; 
     export const DeletePage=(Id,PageId)=>{
        return http.delete(`${config.localapi}/api/page/${Id}/${PageId}`);
    };
    //api comments page
    export const createCommentPage=(Id,PageId,comment)=>{
        return http.post(`${config.localapi}/api/page/addCommentPage/${Id}/${PageId}`,comment);
    };
     export const GetCommentPage=(Id,PageId)=>{
        return http.get(`${config.localapi}/api/page/CommentPage/${Id}/${PageId}`);
    };

    export const DeletedComment=(Id,PageId,CommentId)=>{
    return http.delete(`${config.localapi}/api/page/${Id}/${PageId}/${CommentId}`);
};
 