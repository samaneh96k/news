import React, { useContext } from 'react'
import { Context } from './../../Context/context';
import { NavLink } from 'react-router-dom';
const NewsTitle = () => {


  
   const context = useContext(Context);
   const {
    GroupList
} = context;
    return ( <section className="category-section border-radius">
    <header><i className="fa fa-folder-open-o"></i> <h3> دسته بندی ها </h3></header>
    
   { GroupList.map(grp=>( <ul  key={grp._id}>  <li  ><NavLink  to={`/news-archive/${grp._id}/${grp.GroupTitle}`}>{grp.GroupTitle}
     <span  >{grp.Pages.length}</span></NavLink></li>     </ul>
 ) )}
      
 
</section> );
}
 
export default NewsTitle;