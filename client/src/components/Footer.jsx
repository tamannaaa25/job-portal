import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20'>
            <img width={160} src={assets.logo} alt="" />
            <p className='flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @abcd.dev | All rights reserved.</p>
            <div className='flex gap-2.5'>
                <img width={38} src={assets.facebook} alt="" />
                <img width={38} src={assets.instagram} alt="" />
                <img width={38} src={assets.twitter} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer