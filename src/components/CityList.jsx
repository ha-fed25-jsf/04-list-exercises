import { useState } from 'react'


const CityList = ({ data }) => {
	const [cities, setCities] = useState(data)

	return (
		<section>
		<ul>
			{cities.map(city => (
				<li key={city.id}>
					{city.name}, {city.population} invånare
					<button onClick={() => setCities(cities.filter(c => c.id != city.id))}> Ta bort </button>
				</li>
			))}
		</ul>
		</section>
	)
}

export default CityList

