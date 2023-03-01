import React from 'react'
import './Cart.css'
import { useCart } from 'react-use-cart'
import {FaShoppingCart} from 'react-icons/fa'

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } =useCart();
  if(isEmpty) return <h5 className='text-center py-5 text-danger'>My Cart is Empty</h5>
  return (
    <div className="container-fluid py-3">
      <div className="row justify-content-center">
        <h4 className='text-center py-3 text-decoration-underline'>My Cart</h4>
        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 clo-xxl-8 py-4">
          <div className="d-flex justify-content-center py-3">
            <p className='position-relative fw-bold text-title px-4'><FaShoppingCart size={20}/><span className=" position-absolute translate-middle rounded-pill badge bg-danger mx-1">{totalUniqueItems}</span></p>
            <p className='fw-bold text-title '>Total Items <span className=" position-absolute translate-middle rounded-pill badge bg-primary mx-1">{totalItems}</span></p>
          </div>
          <div>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index)=>{
                return(
                  <tr key={index} className='align-middle'>
                    <td><img src={item.img} alt={item.title} className="img-cart"/></td>
                    <td>{item.title}</td>
                    <td>Ksh{item.price}</td>
                    <td>Quantity:{item.quantity}</td>
                    <td>
                      <button className='btn btn-outline-dark ms-1 ' onClick={()=>updateItemQuantity(item.id, item.quantity-1)}>-</button>
                      <button className='btn btn-outline-dark ms-1 '  onClick={()=>updateItemQuantity(item.id, item.quantity+1)}>+</button>
                      <button className='btn btn-outline-danger ms-5'  onClick={()=>removeItem(item.id)}>Remove Item</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          </div>
          <div className="d-flex justify-content-between py-4">
            <button className="btn btn-outline-danger" onClick={()=>emptyCart()}>Clear All</button>
            <h3>Total Price: Ksh{cartTotal}</h3>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart