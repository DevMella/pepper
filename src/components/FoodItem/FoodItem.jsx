import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} className='food-item-image'  alt="" />
            {!cartItems[id]
                ?<div className="add">
                  <img className='wii' onClick={()=>addToCart(id)}  src={assets.add_icon_white} alt="" />
                </div>
                : <div className="food-item-counter">
                      <div className="red">
                      <img className='icans' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                      </div>
                      <p>{cartItems[id]}</p>
                      <div className='geen'>
                       <img className='icans' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                      </div>
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-rating">
                <p>{name}</p>
                <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                </div>
            </div>
            <p className="food-item-desc">{description}</p>
            <p className='food-item-price'>#{price}</p>
        </div>
    </div>
  )
}

export default FoodItem
