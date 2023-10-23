
import React from 'react'

const Juices = () => {
    const listOfFruits = [
		{ name: 'Orange', price: 123 },
		{ name: 'Apple', price: 343 },
		{ name: 'Watermelon', price: 563 },
		{ name: 'berry', price: 132 },
		{ name: 'jackfruits', price: 152 }
	]

	return (
		<ul>
			<div className="nav-center">
				{listOfFruits.map((elements) => {
					const { name, price } = elements

					return <li>{name}</li>
				})}
			</div>
		</ul>
	)

}

export default Juices