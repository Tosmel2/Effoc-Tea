import React from 'react'

const Button = (props) => {
  const {className, children} = props;
  return (
    <>
      <button className={className}>{children}</button>
    </>
  )
}

export default Button




// import React from 'react'

// const Button = (props) => {
//   return (
//     <>
//       <button className='read-more'>Read More</button>
//     </>
//   )
// }

// export default Button