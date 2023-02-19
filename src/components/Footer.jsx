import React from 'react'
import Button from './Button'

const Footer = () => {
  return (
    <div className='footer gbackground'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 py-5'>
          
            <div className='text-center'>
              <Button className='about-button'>Buy Now <i class="fas fa-angle-right ms-2" style={{backgroundColor:'#2E1D03', border:'2px solid white', padding:'2px 5px', borderRadius:'50%'}}></i>
              </Button>
            </div>
              <div className='d-flex justify-content-evenly mt-4'>
                <div>
                  <h4>Links</h4>
                  <ul className='py-2 list-unstyled'>
                    <li className='py-2'><a href="/" className='text-decoration-none text-dark'>About Us</a></li>
                    <li className='py-2'><a href="/" className='text-decoration-none text-dark'>Services</a></li>
                    <li className='py-2'><a href="/" className='text-decoration-none text-dark'>Quicktour</a></li>
                    <li className='py-2'><a href="/" className='text-decoration-none text-dark'>Register</a></li>
                  </ul>
                </div>

                <div>
                  <h4>Company</h4>
                  <ul className='py-23 list-unstyled'>
                    <li className='py-2'><a href="/" className='text-decoration-none text-dark'>Terms & Conditions</a></li>
                    <li className='py-2'><a href="/" className='text-decoration-none text-dark'>Privacy Policy</a></li>
                    <li className='py-2'><a href="/" className='text-decoration-none text-dark'>Contact</a></li>
                  </ul>
                </div>
              </div>
              
            </div>
            {/* <div>
              
            </div> */}
          {/* </div> */}

          <div className='col-md-6 d-flex align-items-center text-end'>
            <div>
              <h3>Follow Us</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, debitis.</p>
              <Button className='about-button'>Buy Now <i class="fas fa-angle-right ms-2" style={{backgroundColor:'#2E1D03', border:'2px solid white', padding:'2px 5px', borderRadius:'50%'}}></i></Button>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center border-top border-1 border-dark px-3 p-2 mt-4 bg-light'>Designed and Developed by <a href='www.linkedin.com/in/tosmel2/' className='border border-dark rounded p-1 text-dark text-decoration-none' target='_blank'>Tosin Adewale</a><br />© 2023 | All Rights Reserved.</p>
    </div>
  )
}

export default Footer