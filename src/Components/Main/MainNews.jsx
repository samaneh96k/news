import React from 'react'
import LastNews from './News/LastNews';
import Slider from './News/Slider';
const MainNews = () => {
    return (  <div className="col-md-8 col-sm-12 col-xs-12 ">
    <Slider/>              
   <LastNews/>
    </div> );
}
 
export default MainNews;