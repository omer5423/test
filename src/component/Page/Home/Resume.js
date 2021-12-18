import React, { useState } from 'react';
import './Resume.css'

const Resume = () => {
    const [item1 , setItem1] = useState(true)
    const [item2 , setItem2] = useState(false)
    const [item3 , setItem3] = useState(false)
    const [item4 , setItem4] = useState(false)
    const [item5 , setItem5] = useState(false)

    function activeItem1 () {
        setItem1(true)
        setItem2(false)
        setItem3(false)
        setItem4(false)
        setItem5(false)
    }
    function activeItem2 () {
        setItem1(false)
        setItem2(true)
        setItem3(false)
        setItem4(false)
        setItem5(false)
    }
    function activeItem3 () {
        setItem1(false)
        setItem2(false)
        setItem3(true)
        setItem4(false)
        setItem5(false)
    }
    function activeItem4 () {
        setItem1(false)
        setItem2(false)
        setItem3(false)
        setItem4(true)
        setItem5(false)
    }
    function activeItem5 () {
        setItem1(false)
        setItem2(false)
        setItem3(false)
        setItem4(false)
        setItem5(true)
    }
    const Education = ('Education')
    const Work = ('Work History')
    const programming = (
        <div className='programming'>
            <h5>React</h5>
            <div className="progress w-80 mb-3" style={{height: '10px'}}>
                <div className="progress-bar progress-bar-animated"
                 style={{width: '70%', background :  '#2f5d88'}}></div>
                <div className="progress-bar" style={{width: '30%', background :  '#bbbb'}}></div>
            </div>
            <h5>HTML</h5>
            <div className="progress w-80 mb-3" style={{height: '10px'}}>
                <div className="progress-bar progress-bar-animated"
                 style={{width: '70%', background :  '#2f5d88'}}></div>
                <div className="progress-bar" style={{width: '30%', background :  '#bbbb'}}></div>
            </div>
            <h5>CSS</h5>
            <div className="progress w-80 mb-3" style={{height: '10px'}}>
                <div className="progress-bar progress-bar-animated"
                 style={{width: '70%', background :  '#2f5d88'}}></div>
                <div className="progress-bar" style={{width: '30%', background :  '#bbbb'}}></div>
            </div>
            <h5>Node js</h5>
            <div className="progress w-80 mb-3" style={{height: '10px'}}>
                <div className="progress-bar progress-bar-animated"
                 style={{width: '70%', background :  '#2f5d88'}}></div>
                <div className="progress-bar" style={{width: '30%', background :  '#bbbb'}}></div>
            </div>
            <h5>Express</h5>
            <div className="progress w-80 mb-3" style={{height: '10px'}}>
                <div className="progress-bar progress-bar-animated"
                 style={{width: '70%', background :  '#2f5d88'}}></div>
                <div className="progress-bar" style={{width: '30%', background :  '#bbbb'}}></div>
            </div>
            <h5>Mongodb</h5>
            <div className="progress w-80 mb-3" style={{height: '10px'}}>
                <div className="progress-bar progress-bar-animated"
                 style={{width: '70%', background :  '#2f5d88'}}></div>
                <div className="progress-bar" style={{width: '30%', background :  '#bbbb'}}></div>
            </div>
           
        </div>
    )
    const project = ('project')
    const interests = ('interests')

    return (
        <div className='resume'>
            <div className="container">
            <div className="left"></div>
                <div className="row">
                    <div className="col-4 mt-5 mb-5">
                        <div id='item1' onClick={activeItem1} className={item1 ? 'item item-active mt-3 mb-3' : 'item item1 mt-3 mb-3'}>
                            <i className="fa fa-graduation-cap"></i><span className={item1 ? 'title-active' : 'title-resume'}>Education</span>
                        </div>
                        <br />
                        <div id='item2' onClick={activeItem2} className={item2 ? 'item item-active mt-3 mb-3' : 'item item1 mt-3 mb-3'}>
                            <i className="fa fa-history"></i><span className={item2 ? 'title-active' : 'title-resume'}>Work History</span>
                        </div>
                        <br />
                        <div id='item3' onClick={activeItem3} className={item3 ? 'item item-active mt-3 mb-3' : 'item item1 mt-3 mb-3'}>
                            <i className="fa fa-desktop"></i><span className={item3 ? 'title-active' : 'title-resume'}>programming Skills</span>
                        </div>
                        <br />
                        <div id='item4' onClick={activeItem4} className={item4 ? 'item item-active mt-3 mb-3' : 'item item1 mt-3 mb-3'}>
                            <i className="fa fa-university"></i><span className={item4 ? 'title-active' : 'title-resume'}>Project</span>
                        </div>
                        <br />
                        <div id='item5' onClick={activeItem5} className={item5 ? 'item item-active mt-3 mb-3' : 'item item1 mt-3 mb-3'}>
                            <i className="fa fa-paint-brush"></i><span className={item5 ? 'title-active' : 'title-resume'}>Intersts</span>
                        </div>
                    </div>
                    <div className="col-8 resume-details">
                        { item1 ? Education : ''}
                        { item2 ? Work : ''}
                        { item3 ? programming : ''}
                        { item4 ? project : ''}
                        { item5 ? interests : ''}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;
