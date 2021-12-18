import React, { useState } from 'react';
import axios from 'axios'

const Omer = () => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [description , setDescription] = useState('')
    const [file , setFile] = useState(null)
    const [added , setAdded] = useState(false)
    const [success , setSuccess] = useState('')

    const onChangeFile = async (e)=> {
        const files = e.target.files[0]
        const formData = new FormData()
        formData.append('image', files[0])
        console.log(files)
        // const res = await axios.post('http://localhost:5000/api/v1/addTeams' , formData)
        // console.log(res.data)

        // let files = e.target.files
        // let reader = new FileReader()
        // reader.readAsDataURL(files[0])

        // reader.onload = (e) => {
        //     console.log('data', e.target.result)
        //     const image = {file:e.target.result}
        //     axios.post('http://localhost:5000/api/v1/addTeams' , image)
        // }
    }
    const Add = async(e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('description', description)
        formData.append('image', file)
        const config = {
            header : {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await axios.post('http://localhost:5000/api/v1/addTeams' , formData , config)
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
        <div className='add mt-5 mb-5 container'>
            <div className="alert-add">
                <div className='head-add'>
                    <h2>Add person</h2>
                    <li className="fa fa-times"></li>
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
                        className='form-control'
                        name='image'
                        onChange={ onChangeFile }
                        required
                        value={file}
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

export default Omer;
