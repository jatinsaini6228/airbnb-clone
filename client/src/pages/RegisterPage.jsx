import Header from "../Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() 
{
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function RegisterUser(ev) {
        ev.preventDefault();
        alert(name)
        axios.post('/register', {name, email, password})
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form onSubmit={RegisterUser} className="max-w-md mx-auto">
                <input type="text" placeholder="Jhon Doe" className="" value={name} onChange={ev => setName(ev.target.value)} />
                <input type="email" placeholder="your@email.com" className="" value={email} onChange={ev => setEmail(ev.target.value)} />
                <input type="password" placeholder="password" className="" value={password} onChange={ev => setPassword(ev.target.value)} />
                <button className="w-full bg-primary py-2 px-3 text-white shadow-sm rounded-2xl">Login</button>

                <div className="text-center  py-2 text-gray-500">
                    Already Registered? <Link to={'/login'}> <span className="text-primary underline font-bold"> Login </span></Link>
                </div>

            </form>   
            </div>
        </div>
    );    
}