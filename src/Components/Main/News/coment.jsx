import React, { useContext, useEffect, useRef } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentPage, GetCommentsPage } from '../../../actions/Page';
import { getSingleGroupPage } from './../../../actions/Group';
import { Context } from './../../Context/context';
import SimpleReactValidator from 'simple-react-validator';
const Comments = (id) => {
const[name,setFullName]=useState();
const[Email,setEmail]=useState();
const[Comment,setText]=useState();
const[,forceUpdate]=useState();
const group=useSelector(state=>state.singleGroup)

const dispatch = useDispatch();


// const context = useContext(Context);
// const {validator} = context;


useEffect(()=>{
  dispatch(GetCommentsPage(id.id,id.pageid));
  dispatch(getSingleGroupPage(id.id))
      },[])
const handleSubmit = (event) => {
  event.preventDefault();
  try {
    if(validator.current.allValid()){
    const data={name,Email,Comment};
    const dataJson=JSON.stringify(data);
     dispatch(addCommentPage(id.id,id.pageid,dataJson))
    }
    else{
      validator.current.showMessages();
    forceUpdate(1)}
  } catch (error) {
    console.log(error,"مشکلی پیش آمده")
  }

}
const validator=useRef(new SimpleReactValidator({messages:{
  required:"پرکردن این قسمت الزامیست",
  min:"کمتر از 3 حرف نباشد",
  max:"بیشتر از 255 حرف نباشد",
  email:"ایمیل درست وارد نشده است"
},element:(message)=><div style={{color:"red",margin:"5px 10px"}}>{message}</div>}))



    return (   <section class="comment-layer">
    <header> <i class="fa fa-comments"></i><h5> دیدگاه کاربران </h5></header>
    
    {
          group.map(Page=>Page.PageComment.map(comment=><ul key={comment._id}>
        
      
 

    <li key={comment._id}>
      <i className="fa fa-circle-o "></i>
      <div>
        <span>{comment.name}</span>
        <span>{comment.CreateDate} </span>
      </div>
      <p>{comment.Comment}</p>
    </li>
  

</ul>))}
 

  



  <h6> شما هم دیدگاه خود را ارسال کنید </h6>
  <form onSubmit={handleSubmit} class="comment-form" action="" method="post">
    <div>
      <input
       placeholder=" نام و نام خانوادگی" 
       type="text" 
       name="fullName"  
       value={name}
       onChange={
         (e) => {
                  setFullName(e.target.value);
                   validator.current.showMessageFor("fullName");
                }}/>

      {validator.current.message("fullName",name,"required||min:3")}
      <input 
      placeholder=" ایمیل خود را وارد نمایید " 
      type="email" value={Email} 
      onChange={(e) => 
        {setEmail(e.target.value);
        validator.current.showMessageFor("email");}}/>

      {validator.current.message("email",Email,"required||email")}
      {/* <label> <input placeholder=" کد امنیتی  " type="text"/> <img src="images/captcha.png"/></label> */}
    </div>
      {validator.current.message("comment",Comment,"required||max:255")}
    <textarea placeholder=" متن دیدگاه" value={Comment} name="comment" onChange={(e) =>{setText(e.target.value);
        validator.current.showMessageFor("comment");}}> </textarea>
      
        
    <button   type="submit"
                            className="btn btn-success "
                            style={{ margin: "1em" }}
                        >ثبت دیدگاه ارزشمند شما </button>
  </form>
</section> );
}
 
export default Comments;