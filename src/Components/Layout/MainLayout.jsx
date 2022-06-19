import React, { useEffect, useRef, useState } from 'react';

import Footer from './../Common/Footer';
import Navtop from './../Navs/NavTop';
import NewsTitle from './../Main/News/NewsTitle';
import { Context } from './../Context/context';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import SelectNews from './../Main/News/selectNews';
import SimpleReactValidator from 'simple-react-validator';


const MainLayout = ({children,pageGroups}) => {

    const [GroupList, setGroupList] = useState([]);
  
    const [search, setSearch] = useState("");
    const filteredGroup = GroupList.filter((group) =>
    group.GroupTitle.includes(search)
);


const SingleGroup=useSelector(state=>state.singleGroup)

const filteredPage = SingleGroup.filter((group) =>
group.Title.includes(search))
const dispatch = useDispatch();
const validator=useRef(new SimpleReactValidator({messages:{
    required:"پرکردن اید قسمت الزامیست",
    min:"کمتر از 3 حرف نباشد",
    max:"بیشتر از 255 حرف نباشد",
    email:"ایمیل درست وارد نشده است"
},element:(message)=><div style={{color:"red"}}>{message}</div>}))



    useEffect(() => {
    setGroupList(pageGroups);
  
             }, [pageGroups]); 


    return ( <Context.Provider value={{
        GroupList, setSearch, filteredPage,filteredGroup,search,validator
       }}>
         <Navtop/>
       <div className="container margin-top-30">
            <div className="row">
                
                <aside className="col-md-4 col-sm-12 col-xs-12 pull-right">
                    <NewsTitle  /> 
                    <SelectNews/>
                </aside>
               {children}
                   </div>
                      </div>
       <Footer/>
    </Context.Provider> );
}
 
export default MainLayout;