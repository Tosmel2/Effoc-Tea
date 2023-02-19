import React from 'react'
import coffeeCup1 from '../assets/coffee-cup1.png'
import coffeeCup2 from '../assets/coffee-cup2.png'
import coffeeCup3 from '../assets/coffee-cup3.png'
import Button from './Button'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const Products = () => {
  return (
    <div className='products gbackground'>
        <div className='sub-product'>
        <div className='product-text'>
          <h4>From our very best.</h4>
          <p>SATISFY YOUR CRAVINGS</p>
          <Button className='about-button'>Buy Now <i class="fas fa-angle-right ms-2" style={{backgroundColor:'#2E1D03', border:'2px solid white', padding:'2px 5px', borderRadius:'50%'}}></i></Button>
        </div>
            <div className='product-lists'>
                <div className='product-box'>
                    <img src={coffeeCup1} alt="coffeeCup1" />
                    <div className='price'>
                        <p><span className='mt-2'>Espresso</span><br /><b>$15.99</b></p>
                        <i class="fa-solid fa-circle-plus my-arrow"></i>
                        {/* <FontAwesomeIcon className='my-arrow' icon={faCirclePlus} /> */}
                    </div>
                </div>
                <div className='product-box'>
                    <img src={coffeeCup2} alt="coffeeCup2" />
                    <div className='price'>
                        <p><span className='mt-2'>Black coffee</span><br /><b>$10.40</b></p>
                        <i class="fa-solid fa-circle-plus my-arrow"></i>
                        {/* <FontAwesomeIcon className='my-arrow' icon={faCirclePlus} /> */}
                    </div>
                </div>
                <div className='product-box'>
                    <img src={coffeeCup3} alt="coffeeCup3" />
                    <div className='price'>
                        <p><span className='mt-2'>Diluted coffee</span><br /><b>$20.10</b></p>
                        <i class="fa-solid fa-circle-plus my-arrow"></i>
                        {/* <FontAwesomeIcon className='my-arrow' icon={faCirclePlus} /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products