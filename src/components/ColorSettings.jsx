import { useState } from 'react'
import './ColorSettings.css'

const ColorSettings = () => {
	const [data, setData] = useState({ name: 'Tim', color: 'Blå' })
	const [isEditing, setIsEditing] = useState(false)
	const [saved, setSaved] = useState([])

	// skapa klickfunktioner som ändrar isEditing
	// fixa onChange på input-fälten -> spara ändringar i data-variabeln
	// spara ska dessutom lägga till objektet i en lista (state-variabel)
	// visa listan med sparade objekt

	const handleEdit = () => {
		setIsEditing(true)
	}
	const handleSave = () => {
		setIsEditing(false)
		// randomUUID skapar ett "unique user id", som vi kan använda till våra objekt - men den finns inte när vi kör på localhost :(
		const id = generateId() //Crypto.randomUUID()
		const dataCopy = { ...data, id: id }
		setSaved([ ...saved, dataCopy ])

		// Alternativt kan man göra det så här:
		// setSaved([ ...saved, { ...data, id: generateId() } ])
	}

	return (
		<>
		{isEditing
		? (
			<section className="color-settings">
				<p>
					<input type="text"
						onChange={event => setData({ ...data, name: event.target.value })}
						value={data.name}
						/>
				</p>
				<p>
					<input type="text"
						onChange={event => setData({ ...data, color: event.target.value })}
						value={data.color}
						/>
				</p>
				<button onClick={handleSave}> Spara </button>
			</section>
		)
		: (
			<section className="color-settings">
				<p>     {data.name}     </p>
				<p>     {data.color}     </p>
				<button onClick={handleEdit}> Ändra </button>
			</section>
		) }

		<section className="color-settings">
		{saved.length === 0
		? <p> Inga sparade färger... </p>
		: saved.map(({ id, name, color }) => (
			<p key={id}> {name} tycker om {color}.
				<button onClick={() => setSaved(
					saved.filter( item => item.id !== id )
				)}> Ta bort </button>
			</p>
		))}
		</section>
		</>
	)
}
export default ColorSettings


function generateId() {
	let r = Math.random() * 10000000
	return Math.round(r)
}
