import { useState } from 'react'
import './CityItem.css'

const CityItem = ({ city, removeCity, editCity }) => {
	const [isEditing, setIsEditing] = useState(false)
	const [form, setForm] = useState(city)

	const handleEdit = () => {
		// Om vi klickade på "Ändra": visa input-fält
		// Om vi klickade på "Spara": dölj fälten och spara ändringarna
		if( isEditing ) {
			editCity(form)  // innehåller id
		}
		setIsEditing(!isEditing)
	}

	return (
		<li className="city-item">
			{isEditing
			? (
				<div className="edit-form">
				<input type="text"
					value={form.name}
					onChange={event => setForm({ ...form, name: event.target.value })}
					/>
				<input type="text"
					value={form.population}
					onChange={event => setForm({ ...form, population: event.target.value })}
					/>
				</div>
			)
			: (<>{city.name}, {city.population} invånare</>)}


			<div>
			<button onClick={handleEdit}> {isEditing ? 'Spara' : 'Ändra'} </button>
			<button onClick={() => removeCity(city.id)}> Ta bort </button>
			</div>
		</li>
	)
}

export default CityItem
