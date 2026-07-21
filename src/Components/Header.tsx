import React, { useState } from "react"
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import { useOnlineStatus } from "../utils/useOnlineStatus";
const Header = () => {
    const [logBtn,setLogBtn] = useState('Log in')
    const {onlineStatus} = useOnlineStatus()
    return (
        <div className='header' >
            <img 
                className='logo' 
                src={LOGO_URL} 
            />
            <div className='nav-items' >
                <ul>
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    <li>
                        <Link to='/about' >About us</Link>
                        
                    </li>
                    <li>
                        <Link to='/contact' >Contact Us</Link>
                        
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