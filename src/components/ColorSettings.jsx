import { useState } from 'react'
import './ColorSettings.css'

const ColorSettings = () => {
	const [data, setData] = useState({ name: 'Tim', color: 'Blå' })
	const [isEditing, setIsEditing] = useState(false)

	// skapa klickfunktioner som ändrar isEditing
	// fixa onChange på input-fälten -> spara ändringar i data-variabeln
	// spara ska dessutom lägga till objektet i en lista (state-variabel)
	// visa listan med sparade objekt

	return (
		<>
		{isEditing
		? (
			<section className="color-settings">
				<p>     <input type="text" />     </p>
				<p>     <input type="text" />     </p>
				<button> Spara </button>
			</section>
		)
		: (
			<section className="color-settings">
				<p>     {data.name}     </p>
				<p>     {data.color}     </p>
				<button> Ändra </button>
			</section>
		) }

		</>
	)
}
export default ColorSettings
