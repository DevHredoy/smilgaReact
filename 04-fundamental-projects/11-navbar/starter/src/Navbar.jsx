import React from 'react'
import { useState } from 'react'
import logo from './logo.svg'
import { FaBars } from 'react-icons/fa'
import { links } from './data'
const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false)

	return (
		<nav>
			<div className="nav -center">
				<div className="nav-header">
					<img src={logo} className="logo" alt="logo"></img>

					<button
						className="nav-toggle"
						onClick={() => {
							setShowLinks(!showLinks)
							console.log(showLinks)
						}}>
						<FaBars />
					</button>
				</div>
				//this below block will show anly iif showlinds is true , there will be a button (nav-toggle) which will control if it will //show or not
				{showLinks && (
					<div className="links-container">
						<ul className="Links">
							{links.map((link) => {
								const { id, url, text } = link
								return (
									<li key={id}>
										<a href={url}>{text}</a>
									</li>
								)
							})}
						</ul>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
