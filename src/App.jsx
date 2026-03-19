import { useState } from 'react'
import "./App.css";
import ColorSettings from './components/ColorSettings.jsx'

const COLORS = 'color-settings', CITIES = 'city-list'

function App() {
	const [view, setView] = useState(COLORS)

	return (
		<>
			<header>
				<button onClick={() => setView(COLORS)}> Favoritfärg + lista </button>
				<button onClick={() => setView(CITIES)}> Lista med städer </button>
			</header>

			{view === COLORS && <ColorSettings />}
		</>
	);
}

export default App;
