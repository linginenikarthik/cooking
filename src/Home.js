import React from 'react'
import './Home.css'
function Home() {
  return (
    <div>
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="1000">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/89/c5/b3/the-olive-bar-and-kitchen.jpg" className="d-block" alt="First slide" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Scroll to Set Of An Aulinary Adventure</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="1000">
        <img src="https://i.ytimg.com/vi/h49a_YCpIII/maxresdefault.jpg" className="d-block" alt="Second slide" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Scroll to Set Of An Aulinary Adventure</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="1000">
        <img src="https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/restaurant%2F110055%2FOB+0-01.jpg" className="d-block" alt="Third slide" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Scroll to Set Of An Aulinary Adventure</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <div className='content'>
      Olive, the first white walled restaurant opened by restaurateur couple AD and Sabina Singh, nestled into what was then Bombay in November 2000. A rustic hideaway, Olive became the place where good food, drink, conversation and laughter flowed.

The Olive Group has grown! Olive Qutub, Olive Beach, Olive Bistro and Bar, SodaBottleOpenerWala, Guppy and the Poke Bar, Hello Guppy, The Fatty Bao, Monkey Bar, Toast & Tonic, Olive Goa, The Grammar Room, Serai, Ek Bar, The Hoppery, Olly, Giggle Water, Olive Bandra and our newest little member, Bottlenekk.

Onwards and upwards!


      </div>
  </div>
  )
}

export default Home