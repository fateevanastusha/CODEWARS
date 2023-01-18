var number=function(array){
  return array.map(function(elem,index){
    return index+1 + ": " + elem
  })
}