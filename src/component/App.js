import React, { useState ,useEffect , useRef } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Navbar from './Navbar/Navbar'
import Home from './Page/Home/Home'
import '../style.css'


function App() {
    
    useEffect(() => {
        Aos.init({ duration : 5000})
    }, []);

    const [ sidebarId , setSidebarId] = useState('')
    const [ navScroll , setNavScroll] = useState(false)
    const [ loading , setLoading] = useState(true)
    const homeSection = useRef(null)
    const fetchersSection = useRef(null)
    const aboutSection = useRef(null)
    const portfolioSection = useRef(null)
    const blogSection = useRef(null)
    const contactSection = useRef(null)

        const goTOhomeSection = () => {
            window.scrollTo({
                top: homeSection.current.offsetTop ,
                behavior : "smooth"
            })
        }
        const goTOFetchersSection = () => {
            window.scrollTo({
                top: fetchersSection.current.offsetTop ,
                behavior : "smooth"
            })
        }
        const goTOAboutSection = () => {
            window.scrollTo({
                top: aboutSection.current.offsetTop ,
                behavior : "smooth"
            })
        }
        const goTOPortfolioSection = () => {
            window.scrollTo({
                top: portfolioSection.current.offsetTop ,
                behavior : "smooth"
            })
        }
        const goTOBlogSection = () => {
            window.scrollTo({
                top: blogSection.current.offsetTop ,
                behavior : "smooth"
            })
        }
        const goTOContactSection = () => {
            window.scrollTo({
                top: contactSection.current.offsetTop ,
                behavior : "smooth"
            })
        }
    

    const toggleBackground = () => {
        if(window.scrollY >= 100 ) {
            setNavScroll(true)
        } else {
            setNavScroll(false)
        }
        console.log(navScroll)
    }

    setTimeout(() => {
        if(loading){
            setLoading(false)
        }
    }, 2000);
    
    
    window.addEventListener('scroll', toggleBackground)
    
    function toggleSidebar() {
        switch (sidebarId) {
        case '':
            setSidebarId('show-sidebar')
            
            break;
        case 'show-sidebar':
            setSidebarId('')
            break;
        
        default:
            break;
        }
    }
    const app = (
        <div className='app'>
                <BrowserRouter>
                    <Navbar 
                        goTOContactSection={goTOContactSection}
                        goTOhomeSection={goTOhomeSection}
                        goTOBlogSection={goTOBlogSection} 
                        goTOPortfolioSection={goTOPortfolioSection}
                        goTOAboutSection={goTOAboutSection} 
                        goTOFetchersSection={goTOFetchersSection} 
                        navScroll={navScroll}
                        toggleSidebar={toggleSidebar}
                        sidebarId={sidebarId}   />
                </BrowserRouter>
                    
                    <Home
                        homeSection={homeSection}
                        blogSection={blogSection} 
                        aboutSection={aboutSection}  
                        portfolioSection={portfolioSection}  
                        contactSection={contactSection}  
                        fetchersSection={fetchersSection} /> 
        </div>
    )
    const loadingImage = (
        <div className="loading">
            <div className="spinner1 spinnerMax">
                <div className="spinner1 spinnerMid">
                    <div className="spinner1 spinnerMin"></div>
                </div>
            </div>
        </div>
    )

        return (
            <>
                {loading ? loadingImage : app}
            </>
        )
}

export default App
