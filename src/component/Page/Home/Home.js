import React, { useState , useEffect } from 'react'
import './Home.css'
import Head from './head'
import About from './About'
import Featchers from './Featchers'
import Portfolio from './Portfolio'
import Blog from './Blog'
import Contact from './Contact'
import Omer from './Omer'
import Footer from './Footer'

import Aos from 'aos'
import 'aos/dist/aos.css'

function Home(props){
        const [ active , setActive ] = useState(false)
        
    
        useEffect(() => {
            Aos.init({ duration : 2000})
        }, []);

        const activeFetchers = () => {
            if(window.scrollY > 1000) {
                setActive(true)
            } 
        }
        

        window.addEventListener('scroll' , activeFetchers)
        return (
            <div className='home' data-aos='flip-left'>
                <Head homeSection={props.homeSection}/>
                <About aboutSection={props.aboutSection} />
                <Featchers fetchersSection={props.fetchersSection}  active={active} />
                <Portfolio  portfolioSection={props.portfolioSection} />
                <Blog blogSection={props.blogSection} />
                <Contact contactSection={props.contactSection}/>
                {/* <Omer /> */}
                <Footer />
            </div>
            
        )
}

export default Home
