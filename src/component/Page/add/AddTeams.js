import React, { useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './AddTeams.css'
import axios from 'axios'

const AddTeams = () => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [description , setDescription] = useState('')
    const [addImage , setAddImage] = useState('')
    const [added , setAdded] = useState(false)
    const [ success , setSuccess] = useState('')

    
    const Add = async(e) => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('description', description)
        formData.append('addImage', addImage)

        e.preventDefault()
        const res = await axios.post('http://localhost:5000/api/v1/AddTeams' , formData)
        console.log(res.data)
        setSuccess(res.data.person.name)
        setAdded(true)
    }
    setTimeout(() => {
        if(added){
            setAdded(false)
        }
    }, 3000)


    return (
        <div className='add mt-5'>
        <NavLink to='/'><div className="wraper"></div></NavLink>
            <div className="alert-add">
                <div className='head-add'>
                    <h2>Add person</h2>
                    <NavLink to='/'><li className="fa fa-times"></li></NavLink>
                </div>
                
                { added ? <div className='alert alert-success'>{success} Added </div> : ''}
                
                <form className='mt-5' onSubmit={Add} encType='multipart/form-data'>
                    <input
                        type="text"
                        required 
                        className='form-control mt-5'
                        name='name'
                        placeholder='Full Name...'
                        value={name}
                        onChange={ (e) => setName(e.target.value)} />
                        <br 
                    />
                    <input
                        type="email" 
                        required
                        className='form-control'
                        name='email'
                        placeholder='email...'
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                    <br />
                    <textarea
                        type="text"
                        required
                        className='form-control'
                        name='description'
                        rows='5'
                        placeholder='description...'
                        value={description}
                        onChange={ (e) => setDescription(e.target.value)}
                    ></textarea> <br />
                    <input
                        type="file"
                        className='form-control-file'
                        filename='addImage'
                        onChange={ (e) => setAddImage(e.target.file[0])}
                        required
                        value={addImage}
                    />
                    <br />
                    <input
                         type="submit"
                         className='btn btn-primary'
                         value="Add"
                    />
                    <br />
                </form>
            </div>
            
        </div>
    );

    
}

export default AddTeams;
