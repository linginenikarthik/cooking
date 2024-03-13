import React from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Management from './Management'
import Brands from './Brands'
import Home from './Home'
import Careers from './Careers'
import Franchise from './Franchise'
import Contactus from './Contactus'
import Nav from './Nav'
import Cauro from './Cauro'
function App() {
  return (
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Brands" element={<Brands/>}></Route>
    <Route path="/Management" element={<Management/>}></Route>
    <Route path="/Careers" element={<Careers/>}></Route>
    <Route path="/Franchise" element={<Franchise/>}></Route>
    <Route path="/Contactus" element={<Contactus/>}></Route>
   </Routes>
   
   </BrowserRouter>
  )
}

export default App