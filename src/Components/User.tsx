import { useState } from "react";

const User = (props:{name:string, location:string}) => {
    const {name, location} = props

    const [count] = useState(0)
    return (
        <div className="user-card" >
            <h2>Name: {name}</h2>
            <h2>Loacation: {location}</h2>
            <h3>{count}</h3>
        </div>
    )
}

export default User