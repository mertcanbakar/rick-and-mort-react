import React from 'react'
import Slider from "react-slick";

const Dialogue = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false
  };

  return (
    <div className='mb-[100px]'>
        <Slider {...settings}>
          <div>
            <img className=' shadow-md shadow-green-500/50 border-2 border-green-500 outline-0 rounded-md container mx-auto w-[750px] h-[500px] object-cover' src="https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2021/06/09/682996-991246141.jpg?itok=dZcE0Trg"/>
          </div>
          <div>
            <img className=' shadow-md shadow-green-500/50 border-2 border-green-500 outline-0 rounded-md container mx-auto w-[750px] h-[500px] object-cover' src="https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2022/09/07/1006191-661705765.jpeg?itok=B85Rvks_"/>
          </div>
          <div>
            <img className=' shadow-md shadow-green-500/50 border-2 border-green-500 outline-0 rounded-md container mx-auto w-[750px] h-[500px] object-cover' src="https://www.indiewire.com/wp-content/uploads/2022/10/Rick-Morty-Season-6-Fire-Eyes.png"/>
          </div>
          <div>
            <img className=' shadow-md shadow-green-500/50 border-2 border-green-500 outline-0 rounded-md container mx-auto w-[750px] h-[500px] object-cover' src="https://variety.com/wp-content/uploads/2022/07/rick-and-morty-season-6.jpg"/>
          </div>
          <div>
            <img className=' shadow-md shadow-green-500/50 border-2 border-green-500 outline-0 rounded-md container mx-auto w-[750px] h-[500px] object-cover' src="https://www.denofgeek.com/wp-content/uploads/2021/09/Rick-and-Morty-Season-6.jpg?fit=1200%2C675"/>
          </div>
          <div>
            <img className=' shadow-md shadow-green-500/50 border-2 border-green-500 outline-0 rounded-md container mx-auto w-[750px] h-[500px] object-cover' src="https://images.immediate.co.uk/production/volatile/sites/3/2020/05/Rick-9b0a9d9.jpg?quality=90&resize=980,654"/>
          </div>
          
        </Slider>
      </div>
  )
}

export default Dialogue