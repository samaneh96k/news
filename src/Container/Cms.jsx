
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector} from "react-redux";

import MainNews from './../Components/Main/MainNews';
import MainLayout from '../Components/Layout/MainLayout';
import SingleNews from './../Components/Main/News/SingleNews';
import NotFound from './../Components/NotFound';
import Login from './../Components/Login/Login';
import ArchivedNews from './../Components/Main/News/archive';
import ContactUs from './../Components/Main/ContactUs';






const Cms=()=> {


const Detailsgroups=useSelector((state)=>state.pageGroups);
const DetailsPages=useSelector((state)=>state.Pages);

  return (
    

    <Routes>
  
  <Route path="/" element={ <MainLayout pageGroups={Detailsgroups} pages={DetailsPages}> <MainNews/> </MainLayout>} /> 
       <Route path="/contact-us" element={ <MainLayout pageGroups={Detailsgroups} pages={DetailsPages}> <ContactUs/> </MainLayout>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/new/:id/:pageId" element={<SingleNews />} />
     <Route path="/news-archive/:id/:title" element={<MainLayout pageGroups={Detailsgroups} pages={DetailsPages}>
      <ArchivedNews pageGroups={Detailsgroups}/> </MainLayout>} />
     <Route path="*" exact element={<NotFound/>} />


  </Routes>  

  
  );
}
 
export default Cms;