import React, { useState } from "react"
import { LOGO_URL } from "../utils/constants";
const Header = () => {
    const [logBtn,setLogBtn] = useState('Log in')
    return (
        <div className='header' >
            <img 
                className='logo' 
                src={LOGO_URL} 
            />
            <div className='nav-items' >
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{setLogBtn(logBtn === 'Log in' ?'Log out' : 'Log in')}} >{logBtn}</button>
                </ul>
            </div>
        </div>
        
    )
}

export default Header