import React, { useContext } from 'react'
import { Context } from './../../Context/context';
import Carousel from 'react-elastic-carousel';
import {formatData} from '../../../utils/jalali';
import { useSelector } from 'react-redux';
const Slider = () => {


    const context = useContext(Context);
    const {
     PageList,
     GroupList
 } = context;

    return ( 
        <Carousel>
          
       
   {GroupList.map((group) =>(
      <div  key={group._id} >{
  group.Pages.slice(0,1).map((page) =>(
     <div className="   justify-center  " key={page._id}>
       <div  className="    " style={{width:"100%", height:"100%",display:"block" }}>
           <img className="border-radius   position-absolute "
           style={{width:"600px", height:"400px" ,objectFit:"cover",display:"block",margin:"15px 10px 30px 10px"}}
           src={`http://localhost:3002/${page.imageUrl}`}/>
                  <div style={{display:'block',textAlign:'center',margin:"10px 0px"}} className="left-side mb-5">
                      <h2> <a href="">{page.Title}</a> </h2>
                      <span> <i className="fa fa-calendar"></i> انتشار :{formatData(page.CreateDate)}</span>
                  </div>
                 <div className="clearfix"></div>
      </div>
                
            </div>  )).sort(function (a, b) {
      var dateA = new Date(a.CreateDate).getTime();
      var dateB = new Date(b.CreateDate).getTime();
      return dateA < dateB ? 1 : -1;
    })  }  </div>
                 
    ))}

     </Carousel>
                  
                    
 

);
 }
 
export default Slider;