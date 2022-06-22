import React from 'react'
import './imagebar.css'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const ImagesData = [
  {
    id: '1',
    name: 'foto 1',
    img: IMG1,
    review: 'muito legal'
  },
  {
    id: '2',
    name: 'foto 2',
    img: IMG2,
    review: 'shojw de bola'
  }
]

const ImageBar = () => {
  return (
    <div className='image-swipe'>
      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
          {
          ImagesData.map(({id, name, img, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={img}/>            
                </div>
                <h5 className='cliente__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )            
          })
        }
      </Swiper>
    </div>
  )
}

export default ImageBar