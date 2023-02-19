import React from 'react'
import Button from './Button'
import coffeeRight from '../assets/abt-right.png'
import coffeeLeft from '../assets/abt-left.png'

const About = () => {
  return (
    <div className='gbackground'>
        <div class="container pb-md-4 pt-5">
          <div class="row justify-content-center pb-2 pt-2">
            <div class="col-12 text-center">
            <h2>About Us</h2>
            <p className='text-uppercase'><span className='d-inline-block pb-1 align-middle' style={{width: '20px', backgroundColor:'#2E1D03'}}></span> stay update to our newsletter</p>
            </div>
          </div>
          <div class="row text-left pt-1 pb-md-1">
            <div class="col-12 col-md-5 m-md-auto order-md-5 text-center">
            <img alt="coffee right" class="img-fluid" src={coffeeRight} />
            </div>
    
            <div class="col-12 col-md-6">
            <h3 className='fs-1 lh-lg' style={{color:'#817B74'}}>Roasted coffee bean</h3>
            <p class="fs-5 fw-light">Cultivating the land and nourishing our communities, one seed at a time. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>
            <Button className='about-button'>Learn More <i class="fas fa-angle-right ms-2" style={{backgroundColor:'#2E1D03', border:'2px solid white', padding:'2px 5px', borderRadius:'50%'}}></i></Button>
            </div>
          </div>

          <div class="row text-right align-items-center pt-2 pb-md-2">
            <div class="col-12 col-md-5 text-center">
            <img alt="coffee left" class="img-fluid" src={coffeeLeft} />
            </div>
    
            <div class="col-12 col-md-6 m-md-auto text-end">
            <h3 className='fs-1 lh-lg' style={{color:'#817B74'}}>We sell in bulk</h3>
            <p class="fs-5 fw-light">Cultivating the land and nourishing our communities, one seed at a time. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>
            <Button className='about-button'>Learn More <i class="fas fa-angle-right ms-2" style={{backgroundColor:'#2E1D03', border:'2px solid white', padding:'2px 5px', borderRadius:'50%'}}></i></Button>
            </div>
          </div>
          </div>
    </div>
  )
}

export default About