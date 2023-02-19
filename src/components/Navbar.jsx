import React from 'react'
import effocLogo from '../assets/effoc-logo.png'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='navbar-sec gbackground pt-5'>
        <div className='left-nav'>
            <div className='icon'>
                <img src={effocLogo} alt="" />
                <span><h1>Eeffoc</h1></span>
            </div>
            <div className='black-cof'>
                <h1>Black coffee</h1>
                <p>Take care of the project during its whole product life-сycle: 
                    from initial research to concept creation to prototyping and usability testing.</p>
                
            </div>
            <Button className='about-button'>Buy Now <i class="fas fa-angle-right ms-2" style={{backgroundColor:'#2E1D03', border:'2px solid white', padding:'2px 5px', borderRadius:'50%'}}></i></Button>
        </div>
        <div className='right-nav'>
            <div className='top-nav'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Scooters</li>
                    <li>Quick Tour</li>
                </ul>
            </div>

        </div>

    </div>
  )
}

export default Navbar