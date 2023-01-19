function divisibleBy(numbers, divisor){
  return numbers.filter(a => a % divisor === 0)
}