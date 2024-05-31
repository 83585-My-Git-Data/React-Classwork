import Navbar from "../components/navbar";
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function PropertyDetails(){

    const [title, setTitle] = useState('')
    const [description, SetDescription] = useState('')
    const [address, setAddress] = useState('')

    return (
        <div>
            <Navbar/>
            <div className="page-header">
                <h3>Property Details</h3>
                <div className="form">
                <div className="mb-3">
                    <label htmlFor="">Title</label>
                    <input onChange={(e) => setTitle(e.target.value)}
                     type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Description</label>
                    <textarea onChange={(e) => SetDescription(e.target.value)} 
                    rows={5} className="form-control">
                    </textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Address</label>
                    <textarea onChange={(e) => setAddress(e.target.value)} 
                    rows={2} className="form-control">
                    </textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="">Title</label>
                    <input onChange={(e) => setTitle(e.target.value)}
                     type="text" className="form-control" />
                </div>

                </div>
            </div>
        </div>
    )
} 

export default PropertyDetails