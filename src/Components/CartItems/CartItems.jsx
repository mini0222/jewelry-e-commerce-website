import React, { useContext, useState } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom';

const CartItems = () => {
    const {whatIsInCart,menu,setMenu,getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
    const allZero = Object.values(cartItems).every(value => value === 0);

 
  
  return (
    <div className='cartitems'>
    {whatIsInCart.length==0? <></> : (  
    <>
    <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Size</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>

    </>
    )

  }

      {whatIsInCart.length==0? 
      <div className='empty-cart'>

      <i class="fa-solid fa-cart-shopping"></i>
      <p>Your Cart is Empty</p>

     <div className="tothelink">
     <Link to={`/bestsellers`} ><button onClick={()=>{setMenu("bestsellers")}}>BEST SELLERS</button></Link>
     <Link to={`/newarrivals`}><button onClick={()=>{setMenu("newarrivals")}}>NEW ARRIVALS</button></Link>
     </div>
     
      </div> :
      whatIsInCart.map((item)=> (
        <>
        <div className="cartitems-format cartitems-format-main">
           <Link to={`/product/${item.id}`}><img src={item.image} alt="" className='carticon-product-icon' /></Link>
           <Link to={`/product/${item.id}`} style={{textDecoration:'none',color:'black'}}><p className='cartItemName'>{item.name}</p></Link>
                <p>{item.size}</p>
                <p>${item.new_price}</p>
                <button className='cartitmes-quantitiy'>{item.quantity}</button>
                <p>${item.new_price* item.quantity}</p>
                <div className='cartitems-remove-icon' onClick={()=>{removeFromCart(item)}}><i class="fa-solid fa-xmark"></i></div>
            </div>
        
            <hr/>

          </>
          
      ))

       /*{all_product.map((e)=>{
        if(cartItems[e.id]>0) {
            return  (
            <div>
            <div className="cartitems-format cartitems-format-main">
                <Link to={`/product/${e.id}`}><img src={e.image} alt="" className='carticon-product-icon' /></Link>
                <Link to={`/product/${e.id}`} style={{textDecoration:'none',color:'black'}}><p className='cartItemName'>{e.name}</p></Link>
                <p>{e.size}</p>
                <p>${e.new_price}</p>
                <button className='cartitmes-quantitiy'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <div className='cartitems-remove-icon' onClick={()=>{removeFromCart(e.id)}}><i class="fa-solid fa-xmark"></i></div>
            </div>
            <hr/>
          </div>
            )

        }
        return null;
    })*/}

    {whatIsInCart.length==0 ? <></> :

    <div className='cartitems-down'>
      <div className='cartitems-total'>
        <h1>cart Totals</h1>
        <div>
          <div className='cartitems-total-item'>
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='cartitems-total-item'>
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
      </div>
      <div className='cartitems-promocode'>
        <p>If you have a promo code, Enter it here</p>
        <div className='cartitems-promobox'>
          <input type="text" placeholder='promo code' />
          <button>Submit</button>
        </div>
      </div>
    </div>
}
    </div>
  )
}

export default CartItems
