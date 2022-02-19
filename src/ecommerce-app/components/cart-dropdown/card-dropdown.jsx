import React from 'react'
import {connect} from "react-redux"
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selector'
import CartItem from '../cart-item/cart-item'
import CustomButton from '../custombutton/CustomButton'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import './cart-dropdown.scss'
const CartDropdown  = ({cartItems,history,dispatch}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                cartItems.length ?
                cartItems.map((cartItem)=>{
                    return(
                        <CartItem key={cartItem.id} item={cartItem}/> 
                    )
                })
                :<span className='empty-message'>Your cart is empty</span>
                    
                }
            </div>
            <CustomButton onClick={()=>{
                history.push("/checkout")
            dispatch(toggleCartHidden())
            }
            }>GO TO CHECKOUT</CustomButton>
        </div>
    )
   
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
})


export default withRouter(connect(mapStateToProps)(CartDropdown));
