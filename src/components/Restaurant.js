import React, { useEffect, useState } from 'react'
import { MENU_URL } from '../utils/data'
import Shimmer from './Shimmer'
import Item from './Item'
import { useParams } from 'react-router-dom'
import Category from './Category'

const Restaurant = () => {
    const [menuData,setMenuData]=useState(null)
    useEffect(()=>{
        fetchMenu()
    },[])
    const {resId}=useParams()
    const fetchMenu=async()=>{
        const res=await fetch(MENU_URL+`&restaurantId=${resId}`+"&catalog_qa=undefined&submitAction=ENTER")
        const conRes=await res.json()
        setMenuData(conRes?.data)
    }
    console.log(MENU_URL+`&restaurantId=${resId}`+"&catalog_qa=undefined&submitAction=ENTER")
    let itemCard=[]
    if(menuData===null&&itemCard.length===0){
        return<Shimmer/>
    }
    
    const {name,costForTwoMessage,avgRating}=menuData?.cards[2]?.card?.card?.info
    const itemsCar=menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    
    
    
        itemsCar.map((i) => {
            if(i?.card?.card.hasOwnProperty('itemCards')) itemCard.push(i?.card?.card)
        })
    console.log(itemCard)
    

    

  return (
    <div className="restaurant-menu-wrapper">
        <div className='restaurant-menu'>
            <div className='restaurant-name'>
                <div>
                    <h1>{name}-</h1>
                    <h1>{avgRating}⭐</h1>
                </div>
                <h2>{costForTwoMessage}</h2>
            </div>
            <div className='restaurant-categories'>
                
                    {itemCard.map((category)=><Category category={category} key={category.title}/>)}
                
            </div>
        </div>
    </div>
  )
}

export default Restaurant