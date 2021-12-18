import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
           
                
            <div className="footer p-t-60 p-b-20 mt-5">
                <div className="container">
                    <div data-aos='fade-down' className='social'>
                        <div className='icon'>
                            <i className='fab fa-facebook'></i>
                        </div>
                        <div className='icon'>
                            <i className='fab fa-twitter'></i>
                        </div>
                        <div className='icon'>
                            <i className='fab fa-whatsapp'></i>
                        </div>
                        <div className='icon'>
                            <i className='fab fa-telegram'></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright">
                                <p>Copyright © 2021 OmerDesigner. All rights reserved. Template by <a href="#">OmerDesigner</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
         
        )
    }
}

export default Footer
