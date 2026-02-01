function parseCount(value) {
  const result = Number.parseFloat(value);
  if (isNaN(result)) {
    throw new Error('Невалидное значение');
  }
  return result;
}
