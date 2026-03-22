import React from 'react'
import Image from 'next/image'
import './Navbar.css' 

const  Navbar =  () => {
  return (
    <div className='nav'>
          <div className='nav-left'>
              <Image 
              loading="eager"
              src = "/yatri.svg"
              alt = 'logo'
              width = {120}
              height = {120}
              />
          </div>

          <div className='nav-center'>
             <Image 
              loading="eager"
              src = "/contant.svg"
              alt = 'logo'
              width = {300}
              height = {200}
              />
          </div>

          <div className='nav-right'> 
              <Image 
              loading="eager"
              src = "/download.png" 
              alt = 'logo'
              width = {60}
              height = {40}
              />
             <Image 
              loading="eager"
              src = "/profile.png"
              alt = 'logo'
              width = {60}
              height = {50}
              />
          </div>
    </div>
  )
}

export default Navbar