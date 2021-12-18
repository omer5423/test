import React , { useState ,useEffect} from 'react';
import axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = (props) => {
    
    useEffect(() => {
        Aos.init({ duration : 1000})
    }, []);


    const [name, setName] = useState('');
    const [lastname , setLastName] = useState('')
    const [email , setEmail] = useState('')
    const [message , setMessage] = useState('')
    // const [sent , setSent] = useState(false)
    const [response , setResponse] = useState('')
    const [error , setError] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault()
        try {
            const data = {name , lastname , email , message}
            const res = await axios.post('http://localhost:5000/api/v1/contact', data)
            console.log(res.data.message)
            if(res.data.error){
                setError(res.data.error)
            } else {
                setResponse(res.data.message)
            }
            setResponse(res.data.message)
        } catch (error) {
            console.log(error)
        }
        
    }
    setTimeout(() => {
        if(response)
        {
            setResponse('')
        }
    }, 4000);
    setTimeout(() => {
        if(error)
        {
            setError('')
        }
    }, 4000);

    const alert = (
        <div style={{textAlign: 'center', fontSize: '25px'}} className="alert alert-success">
            {response}
        </div>
    )
    const alertError = (
        <div style={{textAlign: 'center', fontSize: '25px'}} className="alert alert-danger">
            {error}
        </div>
    )
    return (
        <>
            
            <div className="contact mt-5 mb-5"  ref={props.contactSection}>
                <div className="section-title mt-5">
                <h5 className='title'>Contact Info</h5>
                    <div className="under-title">
                        I love what I do. I take great pride in what I do.
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-5 contact-details" data-aos='fade-up'>
                            <h3>Get in touch</h3>
                            <div className="details">
                                <div className="name item-details">
                                    <div className="icon">
                                        <i className="fa fa-user"></i> 
                                    </div>
                                    <div className="item">
                                        <span className='main'>Omer Ibrahim</span>
                                    </div>
                                </div>
                                <div className="address item-details">
                                    <div className="icon">
                                        <i className="fa fa-map-marker mt-3"></i>
                                    </div>
                                    <div className="item item-details">
                                        <span className='main'> Address : Khartoum Sudan</span>
                                    </div>
                                </div>
                                <div className="email item-details">
                                    <div className="icon">
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <div className="item">
                                        <span className='main'> Email : omer@omer.com</span>
                                    </div>
                                </div>
                                <div className="email item-details">
                                    <div className="icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="item">
                                        <span className='main'> Phone : +249 987 654 321</span>
                                    </div>
                                </div>
                                <div className="email item-details">
                                    <div className="icon">
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <div className="item">
                                        <span className='main'>omer@omer.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-7" data-aos='fade-up'>
                        <h3 className='mb-5'>Message me</h3>
                        {error ? alertError  : ''}
                        {response ? alert  : ''}
                            
                            <form onSubmit={sendMessage}>
                                <input
                                    className='input-contact'
                                    placeholder='Your Name'
                                    type="text"
                                    name="name" 
                                    defaultValue={name}
                                    onChange={(e) => setName( e.target.value)}
                                    id="name" 
                                />
                                <input 
                                    className='input-contact'
                                    placeholder='Last Name'
                                    type="text"
                                    name="lastname" 
                                    defaultValue={lastname}
                                    onChange={(e) => setLastName( e.target.value)}
                                    id="email" 
                                />
                                <input
                                    className='input-contact'
                                    placeholder='Your Email'
                                    type="email"
                                    name="email" 
                                    defaultValue={email}
                                    onChange={(e) => setEmail( e.target.value)}
                                    id="subject"
                                />
                                <textarea
                                    className='input-contact'
                                    placeholder='Your Message'
                                    name="message" 
                                    defaultValue={message}
                                    onChange={(e) => setMessage( e.target.value)}
                                    id="message"
                                    cols="30"
                                    rows="10"
                                >
                            </textarea>
                                <input
                                    type="submit" 
                                    className='btn1 btn-slide-left mt-3'
                                    value="Send message"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    );
}

export default Contact;
