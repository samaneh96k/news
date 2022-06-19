import React, { useContext, useEffect, useState } from 'react'
import Comments from './coment';
import { useDispatch, useSelector } from 'react-redux';
import { getOnepage } from './../../../actions/Page';
import {formatData}from '../../../utils/jalali';
import { useParams } from 'react-router';
const SingleNews = (  ) => {
 
const page=useSelector(state=>state.Page)
const dispatch = useDispatch();
const {id,pageId}=useParams();




useEffect(() => {
  

   dispatch(getOnepage(id,pageId));
}, []);
    return (
        <div class="container margin-top-30">
            <div class="row">
                
                <div class="col-md-8 col-sm-12 col-xs-12 pull-left">

                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">خانه </a></li>
                        <li class="breadcrumb-item"><a href="#">اخبار </a></li>
                        <li class="breadcrumb-item"><a href="#">دسته بندی  </a></li>
                        <li class="breadcrumb-item active">{page.Title} </li>
                    </ul>
                    
                    <section class="single-news border-radius">
                        <header><h2> {page.Title} </h2> <span> <i class="fa fa-calendar"></i> {formatData(page.CreateDate)} انتشار:</span><span>{page.Visit}</span></header>

                        <img className="border-radius wImg-singlePage" src={`http://localhost:3002/${page.imageUrl}`}/>

                      
                        <article>
                            <p>{page.ShortText}
                            </p>
                            <p>
                                {page.Text}
                          </p>
                        </article>
                    </section>

                    <div class="keywords border-radius">

                      
                        <a href="">   {page.TagsPage}  </a>
                        
                    </div>


                  <Comments id={id} pageid={pageId}/>



                </div>
                </div></div>);
}
 
export default SingleNews;