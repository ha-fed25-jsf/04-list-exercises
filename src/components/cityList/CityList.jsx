import { useState } from 'react'
import CityItem from './CityItem.jsx'
import './CityList.css'


const CityList = ({ data }) => {
	const [cities, setCities] = useState(data)

	const removeCity = id => setCities(cities.filter(c => c.id != id))

	/* Enklare version
	const editCity = newCity => {
		const citiesCopy = [ ...cities ]
		const index = citiesCopy.findIndex(city => city.id === newCity.id)
		citiesCopy[index] = newCity
		setCities(citiesCopy)
	}*/
	// Mest populär version
	const editCity = newCity => setCities(cities.map(city => (
		city.id === newCity.id ? newCity : city
	)))

	return (
		<section>
		<ul className="city-list">
			{cities.map(city => (
				<CityItem key={city.id}
					city={city}
					removeCity={removeCity}
					editCity={editCity}
					/>
			))}
		</ul>
		</section>
	)
}

export default CityList
