import { useState } from 'react'
import "./App.css";
import ColorSettings from './components/ColorSettings.jsx'
import CityList from './components/cityList/CityList.jsx';
import ShoppingCart from './components/cart/ShoppingCart.jsx';
import { cities } from './data/cities.js';

const COLORS = 'color-settings', CITIES = 'city-list', CART = 'shopping-cart'

function App() {
	const [view, setView] = useState(CART)

	return (
		<>
			<header>
				<button onClick={() => setView(COLORS)}> Favoritfärg + lista </button>
				<button onClick={() => setView(CITIES)}> Lista med städer </button>
				<button onClick={() => setView(CART)}> Dela state | kundvagn </button>
			</header>

			{view === COLORS && <ColorSettings />}
			{view === CITIES && <CityList data={cities} />}
			{view === CART && <ShoppingCart />}
		</>
	);
}

export default App;
