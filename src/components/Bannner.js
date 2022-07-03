import React from 'react'
import { GiDrippingTube } from 'react-icons/gi';
import { BsStars } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';

function Bannner() {
  return (
    <div className='text-center p-4 gradient'><h1 className='about'>About Diana</h1>
    <h3 className='m-2 p-3 sub-text'>A platform that looks out for you</h3>
    <p className=' p-1'>Diana empowers you to understand how your body works so you can look and feel your best </p>
    <hr></hr><h1 className='p-3 sub-text2'>Our Philosophy
</h1><h3 className='sub-text3'>Sustainable wellness<br></br> is a big-picture,<br></br> inside out approach</h3>
   <p className='para p-3'>Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness. 
   <br></br>
   <br></br>
That’s why we’ve created an integrated ecosystem </p>
<GiDrippingTube size="1x" className='icons'/>
 <p className='para2'>Consciously formulated products that deliver feel-good results fast </p>
 <BsStars size="1x" className='icons'/>
 <p className='para2'> In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body </p>
<FiPhoneCall size="1x" className='icons'/>
<p className='para2'>In-app consultation portals that connect you with compassionate wellness experts<br></br><br></br></p>
<p className='para3'>Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.
</p>
</div>
  )
}

export default Bannner