import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register } from '../services/admin'



function Register(){

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()

    const onRegister = async () => {
        if(firstName.length == 0){
            toast.error("Please enter first Name")
        }
        else if (lastName.length == 0){
            toast.error("Please enter the Last Name")
        }
        else if (email.length == 0){
            toast.error("Please enter the email id")
        }
        else if (password.length == 0){
            toast.error("Please enter the password")
        }
        else if (confirmPassword.length == 0){
            toast.error("Please confirm the Password")
        }
        else if (password != confirmPassword){
            toast.error("Password does not match")
        }
        else{
            const result = await register(firstName, lastName, email, password)
            if(result['status'] == 'success'){
                toast.success("Successfully Registered !!")
                navigate('/login')
            }
            else{
                toast.error(result['error'])
            }
            
        }
        
    }

    return (
        <div>
            <h1 className="page-header mb-5">Register</h1>
            <div className=" row mt-5">
                <div className="col"></div>
                <div className="col">
                    <div className="form">
                        <div className='mb-3'>
                            <label>First Name</label>
                            <input onChange={(e) => setFirstName(e.target.value)} 
                            type="text" className="form-control" />
                        </div>
                        <div className='mb-3'>
                            <label>Last Name</label>
                            <input onChange={(e) => setLastName(e.target.value)} 
                            type="text" className="form-control" />
                        </div>
                        <div className='mb-3'>
                            <label>Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} 
                            type="text" className="form-control" />
                        </div>
                        <div className='mb-3'>
                            <label>Password</label>
                            <input onChange={(e) => setPassword(e.target.value)}
                            type="text" className="form-control" />
                        </div>
                        <div className='mb-3'>
                            <label>Confirm Password</label>
                            <input onChange={(e) => setConfirmPassword(e.target.value)}
                            type="text" className="form-control" />
                        </div>

                        <div className='mb-3'>
                        <div>
                            Already have an account ? <Link to='/login'>Login here</Link>
                        </div>
                        <button onClick={onRegister} className='btn btn-success mt-2'>
                            Register
                        </button>
                        </div>

                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
} 

export default Register 