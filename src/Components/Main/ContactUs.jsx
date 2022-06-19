import React, { useRef, useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
const ContactUs = () => {


  const[name,setFullName]=useState();
const[Email,setEmail]=useState();
const[Comment,setText]=useState();
  const[,forceUpdate]=useState();
  const validator=useRef(new SimpleReactValidator({messages:{
    required:"پرکردن این قسمت الزامیست",
    min:"کمتر از 3 حرف نباشد",
    max:"بیشتر از 255 حرف نباشد",
    email:"ایمیل درست وارد نشده است"
  },element:(message)=><div style={{color:"red",margin:"5px 10px"}}>{message}</div>}))

 
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      if(validator.current.allValid()){
      const data={name,Email,Comment};
      const dataJson=JSON.stringify(data);
      
      }
      else{
        validator.current.showMessages();
      forceUpdate(1)}
    } catch (error) {
      console.log(error,"مشکلی پیش آمده")
    }
  
  }
    return ( 
        <div className="Contact col-md-8 col-sm-12 col-xs-12">
        <div className="content">
          <div className="left-side col-md-4 col-sm-12 col-xs-12">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">آدرس</div>
              <div className="text-one">مازندران</div>
              <div className="text-two">رامسر</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">تلفن</div>
              <div className="text-one">+0098 9893 5647</div>
              <div className="text-two">+0096 3434 5678</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">ایمیل</div>
              <div className="text-one">codinglab@gmail.com</div>
              <div className="text-two">info.codinglab@gmail.com</div>
            </div>
          </div>
          <div className="right-side col-md-8 col-sm-12 col-xs-12">
            <div className="topic-text">ارسال پیام به ما</div>
            <p>انتقادات و پیشنهادات شما به برای بهتر شدن کمک میکند</p>
          <form  onSubmit={handleSubmit} class="comment-form" action="" method="post">
            <div className="input-box">
              <input type="text" placeholder="نام خودر را وارد کنید" name="fullName"  
       value={name}
       onChange={
         (e) => {
                  setFullName(e.target.value);
                   validator.current.showMessageFor("fullName");
                }}/>

    
            </div>
            {validator.current.message("fullName",name,"required||min:3")}
            <div className="input-box">
              <input  placeholder="ایمیل خود را وارد کنید" type="email" value={Email} 
      onChange={(e) => 
        {setEmail(e.target.value);
        validator.current.showMessageFor("email");}}/>

      
            </div>
            {validator.current.message("email",Email,"required||email")}
            <div className="input-box message-box">
              <textarea placeholder="پیام  خود را وارد کنید" value={Comment} name="comment" onChange={(e) =>{setText(e.target.value);
        validator.current.showMessageFor("comment");}}> </textarea>
            </div>
            {validator.current.message("comment",Comment,"required||max:255")}
            <div className="button">
              <input   type="submit" value="ارسال پیام "/ >
            </div>
          </form>
        </div>
        </div>
      </div>
     );
}
 
export default ContactUs;