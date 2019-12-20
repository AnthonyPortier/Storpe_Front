import React from 'react';
import Slider from 'react-slick'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import './MatchPage.scss'


const MatchPage = () => {

    /* settings du slider */
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (  
        <div className='MatchPage-full'>
            <h1 className='h1-title'>Les matchs du jours</h1>
            <Slider style={{width: '90%', margin : 'auto'}} >
                <Slide1/>
                <Slide2/>
            </Slider> 
        </div>

    );
}
 
export default MatchPage;