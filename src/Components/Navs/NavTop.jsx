import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { Context } from './../Context/context';
import {formatData}from '../../utils/jalali';
const Navtop = () => {
    
   const context = useContext(Context);
   const {
    GroupList,
    setSearch,
} = context;
   const date=new Date();
   const todey=date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    return (<div>
           
           <div className="top-menu">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-5">
                        <ul>
                            <li><a href=""><i className="fa fa-home"></i></a></li>
                            <li><a href=""><i className="fa fa-question-circle"></i></a></li>
                            <li><a href=""><i className="fa fa-envelope"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-7">
                        <span>امروز : {formatData( todey)}</span>
                    </div>
                </div>
            </div>
        </div>
        

        
        <header className="main-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                       <a href="" className="logo"> اخبارامروز</a>
                        <div className="left-side">
                           
                            <h2> پایگاه اطلاع رسانی و خبری</h2>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <form action="" method="get" className="border-radius">
                            <input className="border-radius"  type="text" placeholder=" جستجو کنید ... " onChange={(e) => setSearch(e.target.value)}/>
                            <button><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
        

        
        <nav className="main-menu">
            <div className="container" >
                <span><i className="fa fa-th-list"></i></span>
                <ul>
                    <li><NavLink to="/"> صفحه اصلی </NavLink></li>
                    <li><NavLink to="/contact-us">  تماس با ما </NavLink></li> 
                 
                    {/* <li><a href=""> ثبت نام </a></li>

                     <li><NavLink to="/login"> ورود به سایت </NavLink></li>:
                    <li><NavLink to="/admin">{" "} ادمین  </NavLink>{"  "}</li>
                    {" "}<li><NavLink to="/logout">  خروج از سایت </NavLink></li> */}
                    
                    <li>
                        <span>گروه های خبری</span>
                        <ul>
                        { GroupList.map(group=>(  <li key={group._id} ><a href="">{group.GroupTitle}  </a></li>   

 ) )}
      
                            
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        

    </div>  );
}
 
export default Navtop;