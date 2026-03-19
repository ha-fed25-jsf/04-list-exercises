
const CityList = ({ data }) => {

	return (
		<section>
		<ul>
			{data.map(city => (
				<li key={city.id}> {city.name}, {city.population} invånare </li>
			))}
		</ul>
		</section>
	)
}

export default CityList

