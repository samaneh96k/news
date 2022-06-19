import {combineReducers} from "redux";
import { GroupReducer } from "./GroupReducer";
import { pageCommentReducer } from "./pageCommentReducer";
import { pageGroupReducer } from './pageGroupReducer';
import { pageReducer } from './pageReducer';
import { pagesReducer } from './pagesReducer';


export const reducers=combineReducers({
    pageGroups:pageGroupReducer,
    singleGroup:GroupReducer,
    Page:pageReducer,
    Pages:pagesReducer,
    commentPages:pageCommentReducer
  
});