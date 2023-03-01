import React from 'react'
import Data from '../backend/Data' 
import Cards from '../components/Cards'
import './Home.css'

const Home = () => {
  return (
  <div className='container-fluid'>
    <p className='text-center mt-5 text-uppercase'>shop page</p>
      <div className="container py-4">
        <div className="row">
          {Data.products.map((item, index)=> {
            return(
              <Cards img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
            )

          })}
          
          </div>  
      </div>
  </div>
  )
}


export default Home