import { useState } from 'react'
import "./App.css";
import ColorSettings from './components/ColorSettings.jsx'
import CityList from './components/cityList/CityList.jsx';
import Pronto from './components/pronto/Pronto.jsx'
import { cities } from './data/cities.js';
import ProntoZ from './components/pronto/ProntoZ.jsx';

const COLORS = 'color-settings', CITIES = 'city-list', PRONTO = 'pronto', PRONTOZ = 'pronto Zustand'

function App() {
	const [view, setView] = useState(PRONTO)

	return (
		<>
			<header>
				<button onClick={() => setView(COLORS)}> Favoritfärg + lista </button>
				<button onClick={() => setView(CITIES)}> Lista med städer </button>
				<button onClick={() => setView(PRONTO)}> Pronto </button>
				<button onClick={() => setView(PRONTOZ)}> Pronto (Zustand) </button>
			</header>

			{view === COLORS && <ColorSettings />}
			{view === CITIES && <CityList data={cities} />}
			{view === PRONTO && <Pronto />}
			{view === PRONTOZ && <ProntoZ />}
		</>
	);
}

export default App;
