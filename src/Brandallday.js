import React, { useContext, useEffect } from 'react';
import styles from './Brandallday.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Brandallday(prop) {
  useEffect(()=>{
    prop.upd(false)
    return ()=>prop.upd(true)},[])
    let navigation=useNavigate()
    let close=()=>{
        navigation('/Brands')
    }
    const [activeMenu, setActiveMenu] = useState(null);
    let[flag,setFlag]=useState(true)
    
    const handleClick = (menuId) => {
     setActiveMenu(menuId);
    setFlag(false)
    }
    let resetflag=()=>{
        setFlag(true)
    }
    
    
  return (
    <div className={styles.conbr}>
        <div className={`${styles.opt} opt`}>
      <div>
        <h6 id='adm' style={{ border: activeMenu === 'adm' ? '1px solid white' : 'none', }} onClick={() => handleClick('adm')}>All Day Menu</h6>
        <h6 id='cm' style={{ border: activeMenu === 'cm' ? '1px solid white' : 'none' }} onClick={() => handleClick('cm')}>Coctail Menu</h6>
        <h6 id='bm' style={{ border: activeMenu === 'bm' ? '1px solid white' : 'none' }} onClick={() => handleClick('bm')}>Bar Menu</h6>
      </div>
      <div>
        <button onClick={close}>close</button>
      </div>
    </div>
      {flag &&  <div id="carouselExampleIndicators" className={`${styles.carousel} carousel slide`} data-bs-ride="carousel">
        <div className={`carousel-indicators ${styles.carouselindicators}`}>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className={`carousel-inner ${styles.carouselslide}`}>
          <div className={`${styles.carouselitem} carousel-item active`} data-bs-interval="1000">
            <img src="https://www.olivebarandkitchen.com/menus/Olive%20Mumbai/all_day/OBK_FOOD-01.jpg" className="d-block " alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src="https://www.olivebarandkitchen.com/menus/Olive%20Mumbai/all_day/OBK_FOOD-02.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src="https://www.olivebarandkitchen.com/menus/Olive%20Mumbai/all_day/OBK_FOOD-03.jpg" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className={`carousel-control-prev ${styles.carouselcontrolprev}`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className={`carousel-control-prev-icon ${styles.carouselcontrolprevicon}`} aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className={`carousel-control-next ${styles.carouselcontrolnext}`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className={`carousel-control-next-icon ${styles.carouselcontrolnexticon}`} aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>}

      { flag && <div id="carouselExampleIndicators" className={`${styles.carousel} carousel slide`} data-bs-ride="carousel">
        <div className={`carousel-indicators ${styles.carouselindicators}`}>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className={`carousel-inner ${styles.carouselslide}`}>
          <div className={`${styles.carouselitem} carousel-item active`} data-bs-interval="1000">
            <img src="https://www.olivebarandkitchen.com/menus/Olive%20Mumbai/all_day/OBK_FOOD-01.jpg" className="d-block " alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src="https://www.olivebarandkitchen.com/menus/Olive%20Mumbai/all_day/OBK_FOOD-02.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src="https://www.olivebarandkitchen.com/menus/Olive%20Mumbai/all_day/OBK_FOOD-03.jpg" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className={`carousel-control-prev ${styles.carouselcontrolprev}`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className={`carousel-control-prev-icon ${styles.carouselcontrolprevicon}`} aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className={`carousel-control-next ${styles.carouselcontrolnext}`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className={`carousel-control-next-icon ${styles.carouselcontrolnexticon}`} aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>}

    </div>
  );
}

export default Brandallday;
