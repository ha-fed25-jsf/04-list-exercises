import { useState } from 'react'
import ProntoCheckin from './ProntoCheckin'

const Pronto = () => {
	const [count, setCount] = useState(0)

	const changeCount = diff => {
		// om count+diff är minst 0, anropa setCount <- undvik, kommentaren berättar bara vad koden gör, det kan vi läsa direkt i koden
		// Hindra att vi sätter count till ett värde mindre än 0 <- bättre, vi förklarar _varför_ koden finns
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
