import React from 'react'
import List from './components/List'
import './App.css';



const Landing = (props)=>{
  if (props.loading){
    return <p>Loading...</p>
  }
        return(
            <div>
                   <List 
                   trendywear = {props.wears}
                   handleCart = {props.handleCart}
                   /> 
                  </div>
        )
}


export default Landing