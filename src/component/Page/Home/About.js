import React , { useEffect}  from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = (props) => {
    useEffect(() => {
        Aos.init({ duration : 2000})
    }, []);

    return (
        <>
        <div className="about mb-3 mt-5" ref={props.aboutSection}>
                    <div className="container work">
                    <div className="row">
                    
                        <div className="col-lg-6 col-md-6 col-sm-12 about-text">
                            <h5 className='title' >About Me</h5>
                            <p  data-aos='fade-up'>Visual Designer & Web Developer</p>
                            <p  data-aos='fade-up'>
                                It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking
                                at its layout. The point of using Lorem Ipsum is that it has
                                It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking

                            </p>
                            <button className='btn2 btn-slide-left2'>hire me</button>
                            <button className='btn1 btn-slide-left'>download cv</button>
                        </div>
                        <div data-aos='fade-left' className="col-lg-6 col-md-6 col-sm-12 image">
                            <img className='image-me' src="/image/head3.png" alt="" />
                        </div>
                    </div>                        
                    </div>
        </div>
        </>
    );
}

export default About;
