import Header from "../Header";
import { Link } from "react-router-dom";
export default function LoginPage() 
{
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <form action="" className="max-w-md mx-auto">
                <input type="email" placeholder="your@email.com" className=""/>
                <input type="password" placeholder="password" className=""/>
                <button className="w-full bg-primary py-2 px-3 text-white shadow-sm rounded-2xl">Login</button>

                <div className="text-center  py-2 text-gray-500">
                    Don't registred yet? <Link to={'/register'}> <span className="text-primary underline font-bold"> Register now </span></Link>
                </div>

            </form>   
            </div>
        </div>
    );    
}