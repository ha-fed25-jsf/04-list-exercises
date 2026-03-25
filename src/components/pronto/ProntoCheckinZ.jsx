import { useProntoStore } from "../../data/store"

const ProntoCheckinZ = ({ name }) => {
	const changeCount = useProntoStore(state => state.countMutator)

	return (
		<div className="pronto-checkin">
			{name}
			<button onClick={() => changeCount(1)} > Gå in </button>
			<button onClick={() => changeCount(-1)}> Gå ut </button>
		</div>
	)
}

export default ProntoCheckinZ
