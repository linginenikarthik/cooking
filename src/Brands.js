import React, { useEffect, useState } from 'react'
import "./Brands.css"
import {Link, useNavigate} from 'react-router-dom'


function Brands() {
  let [i,setI]=useState(0)
  let images=["https://www.olivebarandkitchen.com/img/p1.jpg","https://www.olivebarandkitchen.com/img/p2.jpg","https://www.olivebarandkitchen.com/img/p3.jpg","https://www.olivebarandkitchen.com/img/p4.jpg","https://www.olivebarandkitchen.com/img/p3.jpg","https://www.olivebarandkitchen.com/img/p2.jpg"]
    const [currentIndex, setCurrentIndex] = useState(0);
  let a=["https://olivebarandkitchen.com/img/g01.jpg","https://olivebarandkitchen.com/img/g013.jpg","https://olivebarandkitchen.com/img/g1.jpg","https://olivebarandkitchen.com/img/g2.jpg","https://olivebarandkitchen.com/img/g3.jpg","https://olivebarandkitchen.com/img/g4.jpg","https://olivebarandkitchen.com/img/g5.jpg"]
  let fun=()=>{
    setI((i)=>(i+1)%5)
    
  }
  useEffect(()=>{
    let iid=setInterval(fun,5000)
    return()=>{
      clearInterval(iid)
    }
  },[])
  let chgi=(x)=>{
    setI(x)
    }
  let backward=()=>{
    setI((i)=>{
      if(i==0)
      {
        return a.length-1
      }
      else{
        return i-1
      }
    })
  }
 
  
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % (images.length - 3));
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length - 3) % (images.length - 3));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleNext();
    }, 5000); // Change this value to adjust the interval

    return () => clearTimeout(timeout);
  }, [currentIndex]);
  
  return (
    <>
    <div className='maincon'>
      
      <div className='text'>
        <h3>Olive Bar & Kitchen,Mumbai</h3>
        <h6>Scroll Below</h6>
        <button>Reservation</button>
      </div>

    </div>
    <div className='con2'>
      <div className='img'><img src={"https://olivebarandkitchen.com/img/logo.png"}/></div>
      <h2>An undisputed stalwart on the city's culinary and nightlife scene</h2>
      <p>An undisputed stalwart on the city's culinary and nightlife scene, this rustic hideaway and flagship restaurant of the Olive Group has been a favourite ever since we opened our doors in 2000.<br/>

Take a stroll through Olive, and you'll find yourself in a garden filled with microgreens, herbs, and every young sapling our head chef can get his hands on. Walk a little further, and you'll find yourself in an ever-changing experimental bar. What hasn't changed, is the laid-back, friendly vibe that has made Olive a go-to spot for almost two decades.<br/>
Stop by for our iconic Bar Nights on Thursdays, and it's exploding with music and spirit. But visit for Sunday Brunch and it's sloth in a sunlit courtyard.

AWARDS & RECOGNITION</p>
<div className='con21'>
  <h4>Awards & Rewards</h4>
  <p>Conde Nast Traveller<br/>
Top 50 Restaurants 2018<br/>
India's top 30 Bars 2019<br/>
INCA Best Resto Bar (National) 2018<br/>
INCA Best Resto Bar (National) 2019<br/>
Food Food Awards Best Italian Standalone (National) 2018<br/>
Food Food Awards Best Italian Standalone (National) 2019</p>
</div>
    </div>
    <div className='bio'>
      <div className='chefspl'>The interplay of a global cooking style using local, seasonal ingredients makes his menu interesting and multi-layered.</div>
      <div className='chef'>
        <p>
          <h4>
              Chef Chirag Makwana
          </h4>
          <h6>
            Chef Chirag Makwana
            HEAD CHEF, OLIVE BAR & KITCHEN, MUMBAI
          </h6>
          
          <span>Having demonstrated a great interest in cooking from an early age, Chef Chirag moved to Canada at the age of 18, to hone his culinary skills.<br/></span>
          <span>After graduating with honours in Culinary Management from the prestigious Canadian Food And Wine Institute in Niagara, he spent 6 years gaining invaluable experience in various accomplished restaurants in Canada like The Rainbow Room – By Massimo Capra at the Crown Plaza Hotel; and Oliver & Bonacini at the Windermere House.<br/></span>
          <span>In 2015, he returned to India and joined the Olive Cafes South team as a Sous Chef at Toast & Tonic. Here, he trained under Chef Manu Chandra, whose culinary philosophy of celebrating the heritage of ingredients, and sourcing locally in order to eat more healthfully, he imbibed into his own cooking. This, and Chef Makwana's own style reflects in his new menu at Olive – full of bold flavours and a European approach to preparation technique and cooking style. Chef Makwana's dishes are accordingly light yet satiating, and flavorful without being overwhelming. The interplay of a global cooking style using local, seasonal ingredients makes this an interesting, multi-layered menu with something for everyone.</span>
        </p>
        <img src={"https://www.olivebarandkitchen.com/img/chefchirag.jpg"}/>
      </div>
    </div>
    <h3 id="mat">Menu</h3>
    <div className='menu'>
      
        <div className='allday' id='bck'>
          <Link to="/Brandallday2"><img src='https://www.olivebarandkitchen.com/img/menu1.jpg'/></Link>
        </div>
        <div className='coctail'>  
        <Link to='/Brandallday2'><img src='https://www.olivebarandkitchen.com/img/menu2.jpg'/></Link>
        </div>
        <div className='bar'>
          <Link to="/Brandallday2"><img src='https://www.olivebarandkitchen.com/img/menu3.jpg'/></Link>
        </div>        
     </div>
     <div className='menutext'>
        <div>All Day Menu</div>
        <div>coctail Menu</div>
        <div>Bar Menu</div>
      </div>
      <div className='caucon'>
        <img src={a[i]}/>
        <div className='gt' onClick={fun}><i class="fa-solid fa-greater-than"></i></div>
        <div className='lt' onClick={backward}><i class="fa-solid fa-less-than"></i></div>
        <div className='circon'>
      <i class={i==0?"fa-solid fa-circle":"fa-regular fa-circle"}onClick={()=>chgi(0)}></i>
      <i class={i==1?"fa-solid fa-circle":"fa-regular fa-circle"}onClick={()=>chgi(1)}></i>
      <i class={i==2?"fa-solid fa-circle":"fa-regular fa-circle"}onClick={()=>chgi(2)}></i>
      <i class={i==3?"fa-solid fa-circle":"fa-regular fa-circle"}onClick={()=>chgi(3)}></i>
      <i class={i==4?"fa-solid fa-circle":"fa-regular fa-circle"}onClick={()=>chgi(4)}></i>
      </div>
      </div>
      <div className='thcu'>
      {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
        <Link to="/Brands/Celeb"><img key={index} src={image} alt={`Image ${index + 1}`} /></Link>
            ))}
           <div className='gta' onClick={handleNext}><i class="fa-solid fa-greater-than"></i></div>
        <div className='lta' onClick={handlePrevious}><i class="fa-solid fa-less-than"></i></div>
      </div>
     
    </>
  )
}

export default Brands