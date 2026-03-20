const btnCalculate = document.querySelector('.cart__btn-calculate');
const totalPrice = document.querySelector('.cart__total-price');

const calcTotalPrice = () => {
	const inputItems = document.getElementsByClassName('cart__quantity');
	let sum = 0;

	[...inputItems].forEach(item => {
		const {
			dataset: { price },
			value,
		} = item;

		sum += Number(price) * Number(value);
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
