export function taxFromTotal(total) {
	return total * 0.0725;
}

export function totalWithTax(total) {
	return total + taxFromTotal(total);
}
