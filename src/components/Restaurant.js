import React, { useEffect, useState } from 'react'
import { MENU_URL } from '../utils/data'
import Shimmer from './Shimmer'
import Item from './Item'
import { useParams } from 'react-router-dom'

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
    let itemCards=[]
    if(menuData===null&&itemCards.length===0){
        return<Shimmer/>
    }
    
    const {name,costForTwoMessage,avgRating}=menuData?.cards[2]?.card?.card?.info
    const itemsCar=menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // console.log(itemsCar)
    
    
        itemsCar.map((i) => {
            if(i?.card?.card.hasOwnProperty('itemCards')) itemCards=i?.card?.card?.itemCards
        })
    console.log(itemCards)

    

  return (
    <div>
        <div>
            <h1>{name}-</h1>
            <h1>{avgRating}⭐</h1>
            <h2>{costForTwoMessage}</h2>
        </div>
        <div>
            <h1>Curated items for you !!!</h1>
            <div>
                {itemCards.map((item)=><Item item={item} key={item.card.info.id}/>)}
            </div>
        </div>
    </div>
  )
}

export default Restaurant