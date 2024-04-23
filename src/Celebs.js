import React from 'react'
import './Celeb.css'
import {useEffect,useState} from "react"
import { useNavigate } from 'react-router-dom';
const Celebs = (prop) => {
    useEffect(() => {
        prop.upd(false);
        let s=setInterval(forward,1000)
        return () => {
            prop.upd(true);
            clearInterval(s)
        }
      }, []);
      let forward=()=>{
        setI((i)=>(i+1)%images.length)
      }
      let chgi=(x)=>{
        setI(x)
      }
      let backward=()=>{
        setI((i-1+images.length)%images.length)
      }
      let navigation=useNavigate()
      let backtobr=()=>{
        navigation('/Brands')
      }
      let images=["https://www.olivebarandkitchen.com/presswithbg/Press%20coverage%20With%20BG/Olive%20Mumbai/For%20Web/1Artboard%201.jpg",
    "https://www.olivebarandkitchen.com/presswithbg/Press%20coverage%20With%20BG/Olive%20Mumbai/For%20Web/2Artboard%201.jpg",
"https://www.olivebarandkitchen.com/presswithbg/Press%20coverage%20With%20BG/Olive%20Mumbai/For%20Web/3Artboard%201.jpg",
"https://www.olivebarandkitchen.com/presswithbg/Press%20coverage%20With%20BG/Olive%20Mumbai/For%20Web/4Artboard%201.jpg",
"https://www.olivebarandkitchen.com/presswithbg/Press%20coverage%20With%20BG/Olive%20Mumbai/For%20Web/5Artboard%201.jpg"]
let [i,setI]=useState(0)
  return (
    <>
    <div className='maincon2'>
      <button onClick={backtobr} >close</button>
      <div className='sc'>
        <div className='maincon21'>
            <img src={images[i]}/>
        </div>
        <div className='circon2'>
    <i class={i==0?"fa-solid fa-circle":"fa-regular fa-circle"}onClick={()=>chgi(0)}></i>
    <i class={i==1?"fa-solid fa-circle":"fa-regular fa-circle"}onClick={()=>chgi(1)}></i>
    <i class={i==2?"fa-solid fa-circle":"fa-regular fa-circle"}onClick={()=>chgi(2)}></i>
    <i class={i==3?"fa-solid fa-circle":"fa-regular fa-circle"}onClick={()=>chgi(3)}></i>
    <i class={i==4?"fa-solid fa-circle":"fa-regular fa-circle"}onClick={()=>chgi(4)}></i>
    </div>
    </div>
    <div className='gt' onClick={forward}><i class="fa-solid fa-greater-than"></i></div>
        <div className='lt' onClick={backward}><i class="fa-solid fa-less-than"></i></div>
    </div>
    
    </>
  )
}

export default Celebs