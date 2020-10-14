import React from 'react'
import {NavLink} from 'react-router-dom';



function Lyout({
    children,
    
}){
return <div>
        <ul className='horizontal'>
            <li>
                <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/tomas">Tomas</NavLink>
            </li>
        </ul>
        {
            children
        }
         </div>
         
}

export default Lyout;
