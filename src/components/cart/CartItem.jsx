
const CartItem = ({ item, modifyAmount }) => {
	// console.log('CartItem: item.name=', item.name, '   item=', item)

	return (
		<div className="cart-item">
			{item.product.name}
			<span className="separator"></span>
			<div className="amount-container">
			<button onClick={() => modifyAmount(item.id, -1)}> -1 </button>
			{item.amount}
			<button onClick={() => modifyAmount(item.id, +1)}> +1 </button>
			</div>
		</div>
	)
}

export default CartItem
