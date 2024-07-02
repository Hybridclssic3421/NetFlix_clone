import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import './home.css'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero relative">
        <img src={hero_banner} alt="" className='banner-img w-full' />
        <div className="hero-caption absolute w-full">
          <img src={hero_title} alt="" className='caption-img w-11/12' />
          <p>Discovering his ties to a secret ancient order, a young
            man living in modern Istanbul embarks on a quest to save the
            city from an immortal enemy.</p>
            <div className="hero-btns flex gap-2.5">
              <button className='btn text-black'><img src={play_icon} alt="" />Play</button>
              <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
            <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movie"} catagory={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} catagory={"popular"}/>
        <TitleCards title={"Upcoming"} catagory={"upcoming"}/>
        <TitleCards title={"Top Pics for You"} catagory={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home