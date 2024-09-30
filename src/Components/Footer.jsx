import React from 'react'
import { footerLinks } from '../Constants'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
      <div className="max-screen-width">
        <div>
          <p font-semibold text-gray text-x5>more ways to shop:
            <span className="underline text-blue">
            Find an apple store {" "} 
            </span>
            Or {" "}
            <span className="underline text-blue">
            Other retailer  {" "} 
            </span> {" "}
            near You.
          </p>
          <p font-semibold text-gray text-x5>more ways to shop: 
            Or call 434-2254-567
          </p>
        </div>
        <div className='bg-neutral-700 my-5 h-[1px] w-full' />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
      <p className='font-semibold text-gray text-x5'>Copyright @ 2024 apple Inc. all right reserved</p>
      <div className="flex">
        {footerLinks.map((link, i)=>(
          <p key ={link} className='font-semibold text-gray text-x5'>
        {link} {" "}
        {i !== footerLinks.length -1 && (
          <span className=' mx-2'> | </span>
        )}
          </p>
        ))}
      </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer