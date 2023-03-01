import React from 'react'
import './Cards.css'
import { useCart } from 'react-use-cart'
import { FaShoppingCart } from 'react-icons/fa'

const Cards = (props) => {
  const {addItem}=useCart();
  return (
    <>
      <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4">
        <div className="card h-100 shadow rounded">
          <img src={props.img} alt="" className="card-img-top img-fluid "  />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{props.title}</h5>
              <span className="fw-bolder">Ksh{props.price}</span>
            </div>
            <div className="">
              <p className="card-text">{props.desc}</p>
            </div>
            <div className="d-grid justify-content-end">
            <button className='btn btn-sm btn-outline-success mt-4' onClick={()=>addItem(props.item)}><FaShoppingCart size={20}/>Add To Cart</button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  
  )
}

export default Cards