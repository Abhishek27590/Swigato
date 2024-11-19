import React from 'react'

const Item = ({item}) => {
    const {name,price,defaultPrice,isVeg}=item?.card?.info
  return (
    <div>
        <div>
            <h3>{name}</h3>
            <h4>Rs.{defaultPrice/100||price/100}</h4>
            <h5>{isVeg?"Veg":"Non-Veg"}</h5>
        </div>
    </div>
  )
}

export default Item