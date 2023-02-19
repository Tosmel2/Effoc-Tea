import React from 'react'
import Button from './Button'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'

const Blog = () => {
  return (
    <div className='blog gbackground'>
      <div class="col-12 text-center">
          <h2>Our Blog</h2>
          <p className='text-uppercase'><span className='d-inline-block pb-1 align-middle' style={{width: '20px', backgroundColor:'#2E1D03'}}></span> stay update to our newsletter</p>
      </div>
      <div class="container" id="courses" style={{border:'0.2px solid #f5eeee',background: 'rgba(255, 255, 255, 0.5)', borderRadius: '20px', padding:'3rem 1rem'}}>
          <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
                <img src={blog1} class="card-img-top rounded-top p-3" alt="blog1" />
                <div class="card-body">
                    <h5 class="card-title">Should I drink coffee the morning?</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
                    <Button className='about-button '>Read More <i class="fas fa-angle-right ms-2" style={{backgroundColor:'#2E1D03', border:'2px solid white', padding:'2px 5px', borderRadius:'50%'}}></i></Button>
                </div>
            </div>
            </div>
            <div class="col">
              <div class="card h-100">
                  <img src={blog2} class="card-img-top rounded-top p-3" alt="blog2" />
                  <div class="card-body">
                  <h5 class="card-title">Health benefits of Coffee</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
                  <Button className='blog-button'>Read More <i class="fas fa-angle-right ms-2" style={{border:'2px solid #2E1D03', padding:'2px 5px', borderRadius:'50%'}}></i></Button>
                  </div>
              </div>
              </div>
            <div class="col">
            <div class="card h-100">
                <img src={blog3} class="card-img-top rounded-top p-3" alt="blog3" />
                <div class="card-body">
                <h5 class="card-title">How coffee is made</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
                <Button className='blog-button'>Read More <i class="fas fa-angle-right ms-2" style={{border:'2px solid #2E1D03', padding:'2px 5px', borderRadius:'50%'}}></i></Button>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Blog