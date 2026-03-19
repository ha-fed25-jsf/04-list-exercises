import { useState } from 'react'
import CityItem from './CityItem.jsx'


const CityList = ({ data }) => {
	const [cities, setCities] = useState(data)

	const removeCity = id => setCities(cities.filter(c => c.id != id))

	return (
		<section>
		<ul>
			{cities.map(city => (
				<CityItem key={city.id} city={city} removeCity={removeCity} />
			))}
		</ul>
		</section>
	)
}

export default CityList

// 1 LiSkapa
// 2 CreateLi
// 3 ListCreator
// 4 CreateList
// 5 DisplayList
// *6 DisplayCity
// 7 City
// 8 CityInformation
// 9 ListItem
// *10 CityListItem
// *11 CityItem
// *12 DisplayCityItem
// 13 ShowCityItem