import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from './../../Context/context';
import {formatData} from '../../../utils/jalali';
const LastNews = () => {

    const context = useContext(Context);
    const {
        filteredGroup

 } = context;



    return ( <section className="last-news-section border-radius margin-top-60">
    <header><i className="icons icon-doc-2"></i>  <h3>آخرین آخبار ارسالی</h3> </header>
   {filteredGroup.length>0?  filteredGroup.map((group) =>(<ul key={group._id}>
       <h5 className="title"><i className="fa fa-chevron-circle-down"></i> خبر های {group.GroupTitle}...</h5>
{group.Pages.sort(function (a, b) {
      var dateA = new Date(a.CreateDate).getTime();
      var dateB = new Date(b.CreateDate).getTime();
      return dateA < dateB ? 1 : -1;
    }).map((page) =>(
        <li key={page._id}>
            <img className="border-radius"src={`http://localhost:3002/${page.imageUrl}`}/>
            <h2> <NavLink to={`/new/${group._id}/${page._id}`}>{page.Title} </NavLink></h2>
            <p>
          {page.ShortText}
            </p>
            <span className="date-publish"><i className="fa fa-calendar"></i> انتشار :{formatData(page.CreateDate)} </span>
        
            <h2 ><NavLink to={`/new/${group._id}/${page._id}`} className="more-link"><i className="icons icon-more"></i></NavLink></h2>
        </li>
      
    )).slice(0,2)}



    </ul>)) :<div className="flex "><h1 className="justify-center align-middle">يافت نشد</h1></div>}
</section>  );
}
 
export default LastNews;