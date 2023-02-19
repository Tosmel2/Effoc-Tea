import React from 'react'
import heroCoffee from '../assets/hero-coffee.png'

const Hero = () => {
  return (
    <div className="gbackground">
    <div class="container pb-5">
      <div class="row  pt-3 pb-md-5">
            <div class="col-md-6 m-md-auto order-md-5">
              <img alt="coffee left" class="img-fluid" src={heroCoffee} />
            </div>
    
            <div class="col-12 col-md-5">
            <h3><strong>Feature Two</strong></h3>
            <p class="lead">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            <p><a href="/">Learn More <i class="fas fa-angle-right"></i></a></p>
            </div>
          </div>
          {/* </div> */}
    </div>
    </div>
  )
}

export default Hero