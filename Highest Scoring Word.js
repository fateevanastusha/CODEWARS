function high(x){
  let alphabet = [0,"a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  x = x.split(" ");
  const newArray = JSON.parse(JSON.stringify(x)); 
  x = x.map(function(item){
    let sum = 0;
    for (let i = 0; i < item.length; i++){
      sum = sum + alphabet.indexOf(item[i])
    }
    item = sum;
    return sum
  });
  return newArray[x.indexOf(Math.max.apply(null, x))]
}