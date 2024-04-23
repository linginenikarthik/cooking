import React, { useEffect, useState } from 'react';
import styles from './Brandallday.module.css';
import { useNavigate } from 'react-router-dom';

function useCarousel() {
  const [activeMenu, setActiveMenu] = useState({
    allDay: true,
    cocktail: false,
    bar: false
  });

  const handleClick = (menuType) => {
    setActiveMenu({
      allDay: menuType === 'allDay',
      cocktail: menuType === 'cocktail',
      bar: menuType === 'bar'
    });
  };

  return { activeMenu, handleClick };
}

function Brandallday(prop) {
  const navigation = useNavigate();
  const { activeMenu, handleClick } = useCarousel();

  useEffect(() => {
    prop.upd(false);
    return () => prop.upd(true);
  }, []);

  const close = () => {
    navigation('/Brands');
  };

  return (
    <div className={styles.conbr}>
      <div className={`${styles.opt} opt`}>
        <div>
          <h6
            style={{
              border: activeMenu.allDay ? '1px solid white' : 'none',
            }}
            onClick={() => handleClick('allDay')}
          >
            All Day Menu
          </h6>
          <h6
            style={{
              border: activeMenu.cocktail ? '1px solid white' : 'none',
            }}
            onClick={() => handleClick('cocktail')}
          >
            Cocktail Menu
          </h6>
          <h6
            style={{
              border: activeMenu.bar ? '1px solid white' : 'none',
            }}
            onClick={() => handleClick('bar')}
          >
            Bar Menu
          </h6>
        </div>
        <div className={`${styles.bt} bt`}>
          <button onClick={close}>close</button>
        </div>
      </div>

      {activeMenu.allDay && (
        <div id="carouselExampleIndicators" className={`${styles.carousel} carousel slide`} data-bs-ride="carousel">
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
      </div>
      )}
      {activeMenu.cocktail && (
       <div id="carouselExampleIndicators" className={`${styles.carousel} carousel slide`} data-bs-ride="carousel">
       <div className={`carousel-indicators ${styles.carouselindicators}`}>
         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
       </div>
       <div className={`carousel-inner ${styles.carouselslide}`}>
         <div className={`${styles.carouselitem} carousel-item active`} data-bs-interval="1000">
           <img src="https://olivebarandkitchen.com/menus/Olive%20Mumbai/cocktail/JPG/Wine%20Menu%20-%20JUNE%202018%20-%20AW-01.jpg" className="d-block " alt="..."/>
         </div>
         <div className="carousel-item" data-bs-interval="1000">
           <img src="https://olivebarandkitchen.com/menus/Olive%20Mumbai/cocktail/JPG/Wine%20Menu%20-%20JUNE%202018%20-%20AW-02.jpg" className="d-block w-100" alt="..."/>
         </div>
         <div className="carousel-item" data-bs-interval="1000">
           <img src="https://olivebarandkitchen.com/menus/Olive%20Mumbai/cocktail/JPG/Wine%20Menu%20-%20JUNE%202018%20-%20AW-03.jpg" className="d-block w-100" alt="..."/>
         </div>
         <div className="carousel-item" data-bs-interval="1000">
           <img src="https://olivebarandkitchen.com/menus/Olive%20Mumbai/cocktail/JPG/Wine%20Menu%20-%20JUNE%202018%20-%20AW-04.jpg" className="d-block w-100" alt="..."/>
         </div>
         <div className="carousel-item" data-bs-interval="1000">
           <img src="https://olivebarandkitchen.com/menus/Olive%20Mumbai/cocktail/JPG/Wine%20Menu%20-%20JUNE%202018%20-%20AW-05.jpg" className="d-block w-100" alt="..."/>
         </div>
         <div className="carousel-item" data-bs-interval="1000">
           <img src="https://olivebarandkitchen.com/menus/Olive%20Mumbai/cocktail/JPG/Wine%20Menu%20-%20JUNE%202018%20-%20AW-06.jpg" className="d-block w-100" alt="..."/>
         </div>
         <div className="carousel-item" data-bs-interval="1000">
           <img src="https://olivebarandkitchen.com/menus/Olive%20Mumbai/cocktail/JPG/Wine%20Menu%20-%20JUNE%202018%20-%20AW-07.jpg" className="d-block w-100" alt="..."/>
         </div>
         <div className="carousel-item" data-bs-interval="1000">
           <img src="https://olivebarandkitchen.com/menus/Olive%20Mumbai/cocktail/JPG/Wine%20Menu%20-%20JUNE%202018%20-%20AW-08.jpg" className="d-block w-100" alt="..."/>
         </div>
         <div className="carousel-item" data-bs-interval="1000">
           <img src="https://olivebarandkitchen.com/menus/Olive%20Mumbai/cocktail/JPG/Wine%20Menu%20-%20JUNE%202018%20-%20AW-09.jpg" className="d-block w-100" alt="..."/>
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
     </div>
      )}
      {activeMenu.bar && (
        <div id="carouselExampleIndicators" className={`${styles.carousel} carousel slide`} data-bs-ride="carousel">
        <div className={`carousel-indicators ${styles.carouselindicators}`}>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
        </div>
        <div className={`carousel-inner ${styles.carouselslide}`}>
          <div className={`${styles.carouselitem} carousel-item active`} data-bs-interval="1000">
            <img src="https://olivebarandkitchen.com/menus/Olive%20Mumbai/bar/OBK_BAR-01.jpg" className="d-block " alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src="https://olivebarandkitchen.com/menus/Olive%20Mumbai/bar/OBK_BAR-02.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src="https://olivebarandkitchen.com/menus/Olive%20Mumbai/bar/OBK_BAR-03.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src="https://olivebarandkitchen.com/menus/Olive%20Mumbai/bar/OBK_BAR-04.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src="https://olivebarandkitchen.com/menus/Olive%20Mumbai/bar/OBK_BAR-05.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src="https://olivebarandkitchen.com/menus/Olive%20Mumbai/bar/OBK_BAR-06.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src="https://olivebarandkitchen.com/menus/Olive%20Mumbai/bar/OBK_BAR-07.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src="https://olivebarandkitchen.com/menus/Olive%20Mumbai/bar/OBK_BAR-08.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img src="https://olivebarandkitchen.com/menus/Olive%20Mumbai/bar/OBK_BAR-09.jpg" className="d-block w-100" alt="..."/>
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
     </div>
      )}
    </div>
  );
}

export default Brandallday;
