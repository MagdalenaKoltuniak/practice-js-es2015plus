const btnCalculate = document.querySelector('.cart__btn-calculate');
const totalPrice = document.querySelector('.cart__total-price');

const calcTotalPrice = () => {
	const inputItems = document.getElementsByClassName('cart__quantity');
	let sum = 0;

	[...inputItems].forEach(item => {
		const { price } = item.dataset;
		const quantity = item.value;

		sum += Number(price) * Number(quantity);
	});

	return sum;
};

const renderTotalPrice = () => {
	if (!totalPrice) return;
	totalPrice.textContent = calcTotalPrice();
};

if (btnCalculate) {
	btnCalculate.addEventListener('click', renderTotalPrice);
}
