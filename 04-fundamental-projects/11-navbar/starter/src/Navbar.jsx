import React from 'react'
import { useState } from 'react'
import logo from './logo.svg'
import { FaBars } from 'react-icons/fa'
import { links } from './data'
const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false)

	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} className="logo" alt="logo"></img>
				
                <button className='nav-toggle'>

<FaBars/>


                </button>
                </div>
			<div className="links-container"> 
            
            <ul className="Links">
                {links.map(()=>{
                        const{id,url,text}=link
                        return(
                                <li key={id}>
                                    <a href></a>
                                </li>


                        )


}

                )}

            </ul>
             </div>
            
            
            </div>
		</nav>
	)
}

export default Navbar
