import React, { useState ,useEffect} from 'react'
import './portfolio.css'
import Aos from 'aos'
import {all ,Web_design , development ,marketing} from './PortfolioItem'
import 'aos/dist/aos.css'

const Portfolio = (props) => {
    const [portfolio, setportfolio] = useState('all');
    useEffect(() => {
        Aos.init({ duration : 2000})
    }, []);
    const portfolioActive = (e) => {
        switch (e.target.id) {
            case 'all':
                    setportfolio('all')
                break;
            case 'Web_design':
                    setportfolio('Web_design')
                break;
            case 'development':
                    setportfolio('development')
                break;
            case 'marketing':
                    setportfolio('marketing')
                break;
        
            default:
                break;
        }
    }
    
    
    return (
        <div className="portfolio" ref={props.portfolioSection} >
            <div className="section-title mt-5">
                <h5 className='title'>Portfolio</h5>
                <div className="under-title">
                    I love what I do. I take great pride in what I do.
                </div>
            </div>
            <div className="container mt-5">
                <div className="portfolio-menu" data-aos='fade-left'>
                    <ul>
                        <li
                            id="all" onClick={portfolioActive}
                            className={portfolio === 'all' ? 'active' : ""}>
                            All
                        </li>
                        <li
                            id="Web_design" onClick={portfolioActive}
                            className={portfolio === 'Web_design' ? 'active' : ""}>
                            Web Design
                        </li>
                        <li
                            id="development" onClick={portfolioActive}
                            className={portfolio === 'development' ? 'active' : ""}>
                            Development
                        </li>
                        <li 
                            id="marketing" onClick={portfolioActive}
                            className={portfolio === 'marketing' ? 'active' : ""}>
                            Marketing
                        </li>
                    </ul>
                </div>
                {portfolio === 'all' ? all : ""}
                {portfolio === 'Web_design' ? Web_design : ""}
                {portfolio === 'development' ? development : ""}
                {portfolio === 'marketing' ? marketing : ""}

            </div>
            
        </div>
    )
}

export default  Portfolio
