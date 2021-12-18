import React, { useEffect} from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Featchers = (props) => {
    useEffect(() => {
        Aos.init({ duration : 2000})
    }, []);
    console.log(props.fetchersSection)
    return (
        <>
                
                <div className="fetcher text-center mt-5 mb-5">
                    <div ref={props.fetchersSection} className="section-title mb-5 mt-5">
                        <h5 className='title' >My Service</h5>
                    </div>
                    <div className="fetch">
                            <div className="row text-center m-auto">
                                <div data-aos='fade-up' className='col-sm-10 col-md-6 col-lg-4 works works4 mb-5'>
                                    <div className="service-card">
                                    <div className="icon">
                                        <img src="/image/icons/004-app-development.png" alt="" />
                                        </div>
                                        <h5>Front-end Developer</h5>
                                        <p>
                                            There are many variations of pssages of Lorm available,
                                            bu in some form, Lorem Ipsum is simply dummy text.

                                        </p>
                                    </div>
                                </div>
                                <div data-aos='fade-up' data-aos-delay="200" className='col-sm-10 col-md-6 col-lg-4 works works4 mb-5'>
                                    <div className="service-card">
                                    <div className="icon">
                                        <img src="/image/icons/009-coding-1.png" alt="" />
                                        </div>
                                        <h5>Web Developer</h5>
                                        <p>
                                            There are many variations of pssages of Lorm available,
                                            bu in some form, Lorem Ipsum is simply dummy text.

                                        </p>
                                    </div>
                                </div>
                                <div data-aos='fade-up' data-aos-delay="400" className='col-sm-10 col-md-6 col-lg-4 works works4 mb-5'>
                                    <div className="service-card">
                                        <div className="icon">
                                        <img src="/image/icons/001-growth.png" alt="" />
                                        </div>
                                        <h5>Markiting</h5>
                                        <p>
                                            There are many variations of pssages of Lorm available,
                                            bu in some form, Lorem Ipsum is simply dummy text.

                                        </p>
                                    </div>
                                </div>

                               
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Featchers;
