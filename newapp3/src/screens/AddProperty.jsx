import { useState } from "react"
import Navbar from "../components/navbar"
function AddProperty(){

        const [title, setTitle] = useState('')
        const [contactName, setContactName] = useState('')
        const [contactNumber, setContactNumber] = useState('')
        const [details, setDetails] = useState('')
        const [address, setAddress] = useState('')
        const [guests, setGuests] = useState('')
        const [bedrooms, setBedrooms] = useState('')
        const [beds, setBeds] = useState('')

        const [isLakeView, setLakeView] = useState('')



    return(
        
        <div>
            <Navbar/>
            <h2 className="page-header">Add Property</h2>
            <div className='form'>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                        <label>Title</label>
                        <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                        <label>Contact Name</label>
                        <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                        <label>Contact Number</label>
                        <input className="form-control" type="text" />
                        </div>
                    </div>

                </div>

                <div className='row mb-3'>
                    <div className='col'>
                        <label htmlFor=''>Address</label>
                        <textarea
                        onChange={(e) => setAddress(e.target.value)}
                        rows={3}
                        className='form-control'
                        ></textarea>
                    </div>
                    <div className='col'>
                        <label htmlFor=''>Details</label>
                        <textarea
                        onChange={(e) => setDetails(e.target.value)}
                        rows={3}
                        className='form-control'
                        ></textarea>
                    </div>
                </div>

                <div className='row mb-3'>
                    <div className='col'>
                        <label htmlFor=''># Guests</label>
                        <input
                        onChange={(e) => setGuests(e.target.value)}
                        type='text'
                        className='form-control'
                        />
                    </div>
                    <div className='col'>
                        <label htmlFor=''># Bedrooms</label>
                        <input
                        onChange={(e) => setBedrooms(e.target.value)}
                        type='text'
                        className='form-control'
                        />
                    </div>
                    <div className='col'>
                        <label htmlFor=''># Beds</label>
                        <input
                        onChange={(e) => setBeds(e.target.value)}
                        type='text'
                        className='form-control'
                        />
                    </div>
                </div>

                <div className='row mb-3'>
                    <div className='col'>
                        <label htmlFor=''># Bathrooms</label>
                        <input
                        onChange={(e) => setBathrooms(e.target.value)}
                        type='text'
                        className='form-control'
                        />
                    </div>
                    <div className='col'>
                        <label htmlFor=''>Rent</label>
                        <input
                        onChange={(e) => setRent(e.target.value)}
                        type='text'
                        className='form-control'
                        />
                    </div>
                </div>
                <h3>Amenities</h3>
                <div className='row mb-3'>
                    <div className='row'>
                        <div className='col'>
                        
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
} 

export default AddProperty