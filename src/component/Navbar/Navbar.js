import React , {useState} from 'react'
import { NavLink } from 'react-router-dom';
import './nav.css';

import Login from './Login'

function Navbar(props)  {
    const [login, setLogin] = useState(false);
    const toggleLogin = () => {
      if(login){
        setLogin(false)
      } else {
        setLogin(true)
      }
    }
    return (
      <div className={props.navScroll ? 'activeNav1 header' : 'activeNav header'}>
          <div className="container1">
            <div className="logo">
                <span></span>
            </div>
            <div className="nav1">
                  <ul className={props.navScroll ? "list colorList" : 'list' }>
                      <li className="list-item"  onClick={props.goTOhomeSection}>
                        <NavLink  to='/'>Home</NavLink>
                      </li>
                      <li className="list-item"  onClick={props.goTOAboutSection}>
                        <NavLink  to='#'>About</NavLink>
                      </li>
                      <li className="list-item" onClick={props.goTOFetchersSection}>
                        <NavLink  to='#'>Services</NavLink>
                      </li>
                      <li className="list-item" onClick={props.goTOPortfolioSection}>
                        <NavLink  to='#'>Portfolio</NavLink>
                      </li>
                      <li className="list-item" onClick={props.goTOBlogSection}>
                        <NavLink  to='#'>Blog</NavLink>
                      </li>
                      <li className="list-item" onClick={props.goTOContactSection}>
                        <NavLink  to='#'>Contact</NavLink>
                      </li>
                      
                  </ul>
            </div>
            <div className="nav2">
                <ul className="list">
                    <li className='list-item' onClick={toggleLogin}>
                        <button className='btn1 btn-slide-left'>Login</button>
                    </li>
                </ul>
            </div>
            <div className="toggle" onClick={props.toggleSidebar} >
                <span className="hamburger-inner one"></span>
                <span className="hamburger-inner two"></span>
                <span className="hamburger-inner three"></span>
            </div>
              
              
              
              <div className="sidebar" id={props.sidebarId} >
                <div className="container">
                  <div className="header-sidebar direction-rtl  mb-5">
                      <div className="close-toggle mt-1" onClick={props.toggleSidebar}>
                        <li className="fa fa-times" ></li>
                      </div>
                      <div className="logo mb-5">
                              <span></span>
                      </div>
                  </div>
                  
                  <div classNaPme="search mt-5">
                    <form action="">
                        <input className='form-control' type="text" name="search" id="" placeholder='Search For What...' />
                    </form>
                    <button><i className='fa fa-search'></i></button>
                  </div>
                  <ul className="list-sidebar">
                      <li className="list-item">
                        <NavLink exact to='/'><i className='fa fa-desktop'></i> Home</NavLink>
                      </li>
                      <li className="list-item">
                        <NavLink to='/resume'><i className='fa fa-question-circle'></i> Resume</NavLink>
                      </li>
                      <li className="list-item">
                        <NavLink to='/contact'><i className='fa fa-envelope'></i> Contact To Me</NavLink>
                      </li>
                      <li className="list-item">
                        <NavLink to='/about'><i className='fa fa-suitcase'></i> About Me</NavLink>
                      </li>
                  </ul>

                  {/* <button className='btn sigin-btn btn-success mt-5'>Sigin</button> */}
                  <button className='btn1 btn-slide-left mt-5'>Login</button>
                </div>
              </div>

              {/* {login ? <Login /> : ''} */}

          </div>
      </div>
    )

}

export default Navbar
