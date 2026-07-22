import React, { useState } from "react"
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import LOGO from "../assets/images/logo.png";
const Header = () => {
    const [logBtn,setLogBtn] = useState('Log in')
    const {onlineStatus} = useOnlineStatus()
    return (
        <div className='flex justify-between bg-pink-400' >
            <img 
                className='w-20 h-20 object-contain'
                src={LOGO}
                alt='Food app logo'
            />
            <div className='nav-items' >
                <ul className="flex justify-between" >
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    <li>
                        <Link to='/about' >About us</Link>
                        
                    </li>
                    <li>
                        <Link to='/contact' >Contact Us</Link>
                        
                    </li>
                    <li>
                        <Link to='/grocery' >Grocery</Link>
                        
                    </li>
                    <li>Cart</li>
                    {onlineStatus ? '1111': '00000'}
                    <button className="login" onClick={()=>{setLogBtn(logBtn === 'Log in' ?'Log out' : 'Log in')}} >{logBtn}</button>
                </ul>
            </div>
        </div>
        
    )
}

export default Header