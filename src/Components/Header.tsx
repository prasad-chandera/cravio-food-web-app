import React, { useState } from "react"
import { Link } from "react-router";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import logoUrl from '../assets/images/logo.png'

const Header = () => {
    const [logBtn,setLogBtn] = useState('Log in')
    const {onlineStatus} = useOnlineStatus()

    return (
        <div className='flex justify-between items-center  bg-pink-100 shadow-lg p-2' >
            <Link to='/' >
                <img 
                    className='w-20 h-20 object-contain'
                    src={logoUrl}
                    alt='Food app logo'
                />
            </Link>
            
            <div>
                <ul className="mx-4 flex justify-between items-center" >
                    <li className="px-4 " >
                        <Link to='/' >Home</Link>
                    </li>
                    <li className="px-4" >
                        <Link to='/about' >About us</Link>
                        
                    </li >
                    <li className="px-4">
                        <Link to='/contact' >Contact Us</Link>
                        
                    </li>
                    <li className="px-4">
                        <Link to='/grocery' >Grocery</Link>
                        
                    </li>
                    <li className="px-4" >Cart</li>

                    <button  onClick={()=>{setLogBtn(logBtn === 'Log in' ?'Log out' : 'Log in')}} >{logBtn}</button>
                </ul>
            </div>
            
        </div>
        
    )
}

export default Header