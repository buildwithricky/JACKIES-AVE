import React from 'react'
import "./header.scss"

import { auth } from '../../firebase/firebase.utils'

import {ReactComponent as Logo} from "../../assets/crown.svg"
import { Link } from 'react-router-dom'
import "./header.scss"
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon'

import { createStructuredSelector} from 'reselect'
import CartDropdown from '../cart-dropdown/card-dropdown'

import { selectCartHidden } from '../../redux/cart/cart.selector'
import { selectCurrentUser } from '../../redux/user/user.selector'
const Header = ({currentUser,hidden}) => {
    return (
        <div className='header'>
           
            <Link to="/" className='logo-container'>
                <Logo className='logo'/>
            </Link>
          
           <div className='options'>
                <Link to="/shop" className='option'>
                SHOP
            </Link>
                <Link to="/contact" className='option'>
                CONTACT
            </Link>
            {
                // check if user is logged in
            currentUser ? <div className='option' onClick={()=> auth.signOut()}>
                
                SIGN OUT
                
            </div>
            :
               <Link to="/signIn" className='option'>
                SIGN IN
            </Link>
            
}
<CartIcon/>
               
               
           </div>
           {
               hidden ? null : <CartDropdown/>}
        </div>
    )
}

const mapStateToProps = (state) =>createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
}   
)



export default connect(mapStateToProps)(Header)
