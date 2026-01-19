"use strict"

function solveEquation(a, b, c) {

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
    if (monthlyRate === 0) {
        monthlyPayment = bodyCredit / countMonths;
    } else {
        monthlyPayment = bodyCredit * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));
    }

    let totalAmount = monthlyPayment * countMonths;

    totalAmount = +totalAmount.toFixed(2);

    return totalAmount;
}