import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './blog.css'

const Blog = (props) => {
    useEffect(() => {
        Aos.init({ duration : 1000})
    }, []);
    return (
        <div className="blog" ref={props.blogSection}>
            <div className="container">
                <div className="section-title mt-5">
                <h5 className='title'>Our Blog</h5>
                <div className="under-title">
                    There are many variations of pssages of Lorm available,
                    bu in some form, Lorem Ipsum is simply dummy text.
                </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-10 col-md-6 col-lg-4" data-aos='fade-up'>
                        <div className="card">
                            <img src="/image/t1.jpg" alt="" />
                            <div className="card-body">
                                <span>
                                    <ion-icon name="pricetags"></ion-icon> : By Omer
                                </span>
                                <span>
                                    <ion-icon name="time"></ion-icon> : 45 day
                                </span>
                                <h3>name of my blog</h3>
                                <p>
                                    There are many variations of pssages of Lorm available,
                                    bu in some form, Lorem Ipsum is simply dummy text.
                                </p>
                                <div className="read">
                                    <h5> Read More</h5>
                                    <div className="icon">
                                        <i className="fa fa-arrow-right"  name="arrow-forward"></i>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4" data-aos='fade-up' data-aos-delay="200" >
                        <div className="card">
                            <img src="/image/t3.jpg" alt="" />
                            <div className="card-body">
                                <span>
                                    <ion-icon name="pricetags"></ion-icon> : By Omer
                                </span>
                                <span>
                                    <ion-icon name="time"></ion-icon> : 45 day
                                </span>
                                <h3>name of my blog</h3>
                                <p>
                                    There are many variations of pssages of Lorm available,
                                    bu in some form, Lorem Ipsum is simply dummy text.
                                </p>
                                <div className="read">
                                    <h5> Read More</h5>
                                    <div className="icon">
                                        <i className="fa fa-arrow-right"  name="arrow-forward"></i>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4" data-aos='fade-up' data-aos-delay="200" >
                        <div className="card">
                            <img src="/image/t2.jpg" alt="" />
                            <div className="card-body">
                                <span>
                                    <ion-icon name="pricetags"></ion-icon> : By Omer
                                </span>
                                <span>
                                    <ion-icon name="time"></ion-icon> : 45 day
                                </span>
                                <h3>name of my blog</h3>
                                <p>
                                    There are many variations of pssages of Lorm available,
                                    bu in some form, Lorem Ipsum is simply dummy text.
                                </p>
                                <div className="read">
                                    <h5> Read More</h5>
                                    <div className="icon">
                                        <i className="fa fa-arrow-right"  name="arrow-forward"></i>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Blog
