
const ProntoCheckin = ({ name, changeCount }) => {

	return (
		<div className="pronto-checkin">
			{name}
			<button onClick={() => changeCount(1)} > Gå in </button>
			<button onClick={() => changeCount(-1)}> Gå ut </button>
		</div>
	)
}

export default ProntoCheckin
