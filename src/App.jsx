import { useState } from 'react'
import "./App.css";
import ColorSettings from './components/ColorSettings.jsx'
import CityList from './components/cityList/CityList.jsx';
import { cities } from './data/cities.js';

const COLORS = 'color-settings', CITIES = 'city-list'

function App() {
	const [view, setView] = useState(CITIES)

	return (
		<>
			<header>
				<button onClick={() => setView(COLORS)}> Favoritfärg + lista </button>
				<button onClick={() => setView(CITIES)}> Lista med städer </button>
			</header>

			{view === COLORS && <ColorSettings />}
			{view === CITIES && <CityList data={cities} />}
		</>
	);
}

export default App;
