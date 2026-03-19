import { useState } from 'react'
import CartItem from './CartItem.jsx'
import './ShoppingCart.css'

const defaultCart = [
	{ id: 1, product: { name: 'strumpor' }, amount: 1 },
	{ id: 2, product: { name: 'byxor' }, amount: 2 }
]

const ShoppingCart = () => {
	const [items, setItems] = useState(defaultCart)

	const modifyAmount = (id, diff) => setItems(items.map(
		item => item.id === id ? { ...item, amount: item.amount + diff } : item
	))

	// Räknas ut baserat på state - ska inte vara egen state-variabel
	let totalCount = 0
	items.forEach(item => totalCount += item.amount)

	return (
		<div className="shopping-cart">
			<section>
			{items.map(item => (
				<CartItem key={item.id} item={item} modifyAmount={modifyAmount} />
			))}
			</section>
			<p> Du har {totalCount} varor i kundvagnen. </p>
		</div>
	)
}

export default ShoppingCart
