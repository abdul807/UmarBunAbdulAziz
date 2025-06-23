import React from 'react'
import "aos/dist/aos.css";


const Notification = ({message}) => {
  return (
    <div className='bg-[#06724b] sm:mx-0 mx-10 text-white p-4 rounded-lg shadow-lg fixed top-4  z-50'  data-aos="fade-down">
      {message}
    </div>
  )
}

export default Notification
