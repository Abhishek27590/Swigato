import React from 'react'
import Item from './Item'

const Category = ({category}) => {
  return (
    <div className='restaurant-items'>
        <h1>{category.title}</h1>
        <div>{category.itemCards.map((item)=><Item item={item} key={item.card.info.id}/>)}</div>
    </div>
  )
}

export default Category