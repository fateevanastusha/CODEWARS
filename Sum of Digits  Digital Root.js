function digitalRoot(n) {
  if (n < 10) return n;
  return digitalRoot(
    n.toString().split('').reduce((acc, d) => {
      console.log(d)
      return acc + +d;
    },0));
}