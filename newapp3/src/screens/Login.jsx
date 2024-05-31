import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login } from '../services/admin'


function Login(){

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    
    const navigate = useNavigate()

    const onLogin = async() => {
        if(email.length == 0){
            toast.error('Please enter email')
        }
        else if (password.length == 0){
            toast.error('Please enter the Password')
        }
        else{
            const result = await login(email, password)
            if(result['status'] == 'success'){
                const data = result['data']

                sessionStorage['name'] = data['name']
                sessionStorage['token'] = data['token']
                navigate('/home')
            }else{
                toast.error(result['error'])
            }
        }
    }

    return (
        <div>
            <h2 className="page-header">Login</h2>
            <div className="row">
                <div className="col">

                </div>

                <div className="col">
                    <div className="form">
                        <div className="mb-3 mt-5">
                            <label htmlFor="">Email</label>
                            <input onChange={(e) => {
                                setEmail(e.target.value)
                            }} type="email" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="">Password</label>
                            <input onChange={(e) => {
                                setPassword(e.target.value)
                            }} type="password" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <div>
                                Don't have an Account ? <Link to="/register">Register Here </Link>  
                                {/* Don't have an Account ? <a href="/register">Register here</a>   */}
                            </div>
                            <button onClick={onLogin} className="btn btn-primary mt-2">
                                Login
                            </button>
                        </div>
                    
                    </div>
                </div>

                <div className="col">
                    
                </div>
            </div>
        </div>
    )
} 

export default Login 