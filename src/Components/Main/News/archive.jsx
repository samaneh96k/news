import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { getSingleGroupPage } from './../../../actions/Group';
import {formatData}from '../../../utils/jalali';
import { Context } from './../../Context/context';
import { NavLink } from 'react-router-dom';

const ArchivedNews = (pageGroups) => {
  const id=useParams();
  const context = useContext(Context);
  const {
      search

} = context;
const SingleGroup=useSelector(state=>state.singleGroup)
const filteredPage = SingleGroup.filter((group) =>
group.Title.includes(search))
const dispatch = useDispatch();
useEffect(() => {
   
  dispatch(getSingleGroupPage(id.id));
}, [SingleGroup]);
    return (
      
          
          <section className="last-news-section border-radius col-md-8 col-sm-12 col-xs-12 ">
                        <header> <h3> آرشیو اخبار {id.title}</h3> </header>
                        <ul>
                          {filteredPage.map(p=>( <li key={p._id}>
                                <img className="border-radius" src={`http://localhost:3002/${p.imageUrl}`}/>
                                <h2> <a href=""> {p.Title} </a></h2>
                                <p>
{p.Text}
                                </p>
                                <span className="date-publish"><i className="fa fa-calendar"></i> انتشار : {formatData(p.CreateDate)} </span>
                                <NavLink to={`/new/${id._id}/${p._id}`} className="more-link"><i className="icons icon-more"></i></NavLink>
                            </li>))}
                           
                      
                        </ul>
                    </section>       
                      
               
                  

               
     
    

  );
}
 
export default ArchivedNews;