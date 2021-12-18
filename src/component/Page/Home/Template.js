import React, { useState } from 'react';

const Template = () => {
    const [ images , setImages ] = useState({image1 : '',mage2 : '',image3 : '',image4 : '',image5 : '',image6 : '',
    })


    function imageHover(e) {
        
        if(e.target.id){
            setImages({
                [e.target.id]: 'image'
            }) 
        }
    }
    function imageHoverOff(e){
        
            setImages({
                [e.target.id]: ''
            })
    }
    return (
        <>
            <div className="template mt-5">
            <div className="section-title">
                <h5 className='title' >Images</h5>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 col-md-6 col-lg-4">
                        <div className="image">
                            <div className="hover-image" id='image1'
                             onMouseLeave={imageHoverOff} onMouseEnter={imageHover}>
                            <button className='image-btn'>show details</button>
                            </div>
                            <img id={images.image1} src="/image/t1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4">
                        <div className="image">
                            <div className="hover-image" id='image2'
                             onMouseLeave={imageHoverOff} onMouseEnter={imageHover}>
                            <button className='image-btn'>show details</button>
                            </div>
                            <img id={images.image2} src="/image/t2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4">
                        <div className="image">
                            <div className="hover-image" id='image3'
                             onMouseLeave={imageHoverOff} onMouseEnter={imageHover}>
                            <button className='image-btn'>show details</button>
                            </div>
                            <img id={images.image3} src="/image/t3.jpg" alt="" />
                        </div>
                    </div>
                
                    <div className="col-sm-10 col-md-6 col-lg-4">
                        <div className="image">
                            <div className="hover-image" id='image4'
                             onMouseLeave={imageHoverOff} onMouseEnter={imageHover}>
                            <button className='image-btn'>show details</button>
                            </div>
                            <img id={images.image4} src="/image/t4.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4">
                        <div className="image">
                            <div className="hover-image" id='image5'
                             onMouseLeave={imageHoverOff} onMouseEnter={imageHover}>
                                <button className='image-btn'>show details</button>
                            </div>
                            <img id={images.image5} src="/image/t5.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4">
                        <div className="image">
                            <div className="hover-image" id='image6'
                             onMouseLeave={imageHoverOff} onMouseEnter={imageHover}>
                            <button className='image-btn'>show details</button>
                            </div>
                            <img id={images.image6} src="/image/t6.jpg" alt="" />
                        </div>
                    </div>
                
                </div>
                
            </div>
                
            </div>
            
        </>
    );
}

export default Template;
