import React, { useContext  } from 'react'
import { NavLink } from 'react-router-dom';
import { Context } from '../../Context/context';
import {formatData}from '../../../utils/jalali';

const SelectNews = () => 

{ 

   
    const context = useContext(Context);
   const {

    GroupList
} = context;

    return ( <section className="last-news-side border-radius">
    <header><i className="icons icon-star"></i> <h3>  انتخاب سردبیر </h3></header>
    {GroupList.map(group =>(<ul key={group._id}>

{group.Pages.filter(p=>p.AddToSlide===true).map(page =>(<li key={page._id}>

    <img className="border-radius" src={`http://localhost:3002/${page.imageUrl}`}/>
    <h2 ><NavLink to={`/new/${group._id}/${page._id}`}>{page.Title}</NavLink></h2>
    <span>انتشار : {formatData(page.CreateDate)}</span>
</li>))}
   

       </ul>))}
 
</section> );
}
 
export default SelectNews;
