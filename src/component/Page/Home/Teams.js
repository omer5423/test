import axios from 'axios';
import React, { useState ,useEffect} from 'react';

const Teams = () => {
    const [ person , setPreson ] = useState({name: '', email: '', description: ''})

    useEffect( () => {
        const data =  axios.get('http://localhost:5000/api/v1/')
        console.log(data)
    })

    return (
        <div className="container mb-5 mt-5">
                    <div className="des text-center">
                        <div className="section-title">
                            <h5 className='title' >Our Team</h5>
                        </div>
                    </div>
                    <div className="row mt-5">
                        
                        <div className="col-lg-4 col-md-6 col-sm-10 profile mb-5">
                            <div className="card-profile">
                                <div className="profile">
                                <div className="image-profile">
                                    <img className="mx-100" src='/image/head.png' alt="Card image cap" />
                                </div>
                                    <div className="name">
                                        <h5> Name some one</h5>
                                        <p>email@email.com</p>
                                    </div>
                                </div>

                                <div className="card-profile-body mt-3">
                                    <p>
                                        It is a long established fact that a reader will be
                                        distracted by the readable content of a page when looking
                                        at its layout. The point of using Lorem Ipsum is that it has
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10 profile mb-5">
                            <div className="card-profile">
                                <div className="profile">
                                <div className="image-profile">
                                    <img className="mx-100" src='/image/head.png' alt="Card image cap" />
                                </div>
                                    <div className="name">
                                        <h5> Name some one</h5>
                                        <p>email@email.com</p>
                                    </div>
                                </div>

                                <div className="card-profile-body mt-3">
                                    <p>
                                        It is a long established fact that a reader will be
                                        distracted by the readable content of a page when looking
                                        at its layout. The point of using Lorem Ipsum is that it has
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10 profile mb-5">
                            <div className="card-profile">
                                <div className="profile">
                                <div className="image-profile">
                                    <img className="mx-100" src='/image/head.png' alt="Card image cap" />
                                </div>
                                    <div className="name">
                                        <h5> Name some one</h5>
                                        <p>email@email.com</p>
                                    </div>
                                </div>

                                <div className="card-profile-body mt-3">
                                    <p>
                                        It is a long established fact that a reader will be
                                        distracted by the readable content of a page when looking
                                        at its layout. The point of using Lorem Ipsum is that it has
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
        </div>
    );
}

export default Teams;
