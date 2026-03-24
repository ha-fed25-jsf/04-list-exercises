import { useProntoStore } from '../../data/store.js'
import ProntoCheckinZ from './ProntoCheckinZ.jsx'

const ProntoZ = () => {
	const count = useProntoStore(state => state.count)

	const peopleText = count === 1 ? 'person' : 'personer'

	return (
		<section className="pronto">
			<h2> Passersystemet Pronto (Zustand) </h2>
			<p> Det finns {count} {peopleText} i lokalen. </p>

			<ProntoCheckinZ name="Ingång A" />
			<ProntoCheckinZ name="Ingång B" />
			<ProntoCheckinZ name="Ingång C" />
			<ProntoCheckinZ name="Ingång D" />
		</section>
	)
}

export default ProntoZ
