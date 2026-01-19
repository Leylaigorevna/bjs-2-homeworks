"use strict"

function solveEquation(a, b, c) {
	let arr = [];

	return arr;

	const d = b ** 2 - 4 * a * c;
	if (d < 0) {
		return [];
	} else if (d === 0) {
		const root = -b / (2 * a);
		return [root]
	} else {
		const sqrtD = Math.sqrt(d);
		const root1 = (-b + Math.sqrt(d)) / (2 * a);
		const root2 = (-b - Math.sqrt(d)) / (2 * a);
		return [root1, root2];

	}

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyRate = (percent / 100) / 12;
  let bodyCredit = amount - contribution;
  let monthlyPayment;

  monthlyPayment = bodyCredit * (monthlyRate + (monthlyRate / (((1 + monthlyRate)** 12) - 1)))

  let totalAmount = monthlyPayment * countMonths;
  totalAmount = +totalAmount.toFixed(2);
  return totalAmount;
}