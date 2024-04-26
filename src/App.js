import React from 'react'
import { HashRouter, Route ,Routes} from 'react-router-dom'
import Management from './Management'
import Brands from './Brands'
import Home from './Home'
import Careers from './Careers'
import Franchise from './Franchise'
import Contactus from './Contactus'
import Nav from './Nav'
// import Brandallday from './Brandallday'
import Brandallday2 from './Brandallday2'
import Cauro from './Cauro'
import { useState } from 'react'
import Celebs from './Celebs'
function App() {
  let[f,setF]=useState(true)
  let upd=(x)=>{
    console.log(x)
    setF(x)

  }
  
  return (
   <HashRouter>
   {f && <Nav/>}
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Brands" element={<Brands/>}>
      
    </Route>
    <Route path="/Management" element={<Management/>}></Route>
    <Route path="/Careers" element={<Careers/>}></Route>
    <Route path="/Franchise" element={<Franchise/>}></Route>
    <Route path="/Contactus" element={<Contactus/>}></Route>
    <Route path='/Brandallday2' element={<Brandallday2 upd={upd}/>}></Route>
    <Route path='/Brands/Celeb' element={<Celebs upd={upd}/>}></Route>
       </Routes>
   </HashRouter>
  )
}
 
export default App