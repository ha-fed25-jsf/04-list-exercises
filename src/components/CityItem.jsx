

const CityItem = ({ city, removeCity }) => {

	return (
		<li>
			{city.name}, {city.population} invånare

			<button onClick={() => removeCity(city.id)}> Ta bort </button>
		</li>
	)
}

export default CityItem
