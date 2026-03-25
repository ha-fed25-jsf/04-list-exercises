import { useState } from 'react'
import ProntoCheckin from './ProntoCheckin'

const Pronto = () => {
	const [count, setCount] = useState(0)

	const changeCount = diff => {
		if( count + diff >= 0 )
			setCount(count + diff)
		// Krångligare lösning - undvik
		// count + diff >= 0 && setCount(count + diff)
	}

	const peopleText = count === 1 ? 'person' : 'personer'

	return (
		<section className="pronto">
			<h2> Passersystemet Pronto </h2>
			<p> Det finns {count} {peopleText} i lokalen. </p>

			<ProntoCheckin name="Ingång A" changeCount={changeCount} />
			<ProntoCheckin name="Ingång B" changeCount={changeCount} />
		</section>
	)
}

export default Pronto
