import React from 'react'
import './Banner.css'


function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'> Movie Name</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
         <h1 className='description'>You can see the latest movies and series Here; Please upgrade to Premium for offline mode and with lot more features</h1>
        </div>
        <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner