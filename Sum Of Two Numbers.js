function cakes(recipe, available) {
    const recipeArray = Object.entries(recipe);
    const availableArray = Object.entries(available);
    let availableSortedArray = [];
    for (let recipeIndex = 0 ; recipeIndex < recipeArray.length; recipeIndex ++){
        for (let availableIndex = 0; availableIndex < availableArray.length; availableIndex ++){
             if ( availableArray[availableIndex][0] === recipeArray[recipeIndex][0]) {
                 availableSortedArray.push([availableArray[availableIndex][0], availableArray[availableIndex][1]])
             } else {
                 availableSortedArray.push([availableArray[availableIndex][0], 0])
             }

        }
    }
    const ingredientMap = new Map();
    console.log(availableSortedArray)
    availableSortedArray = availableSortedArray.filter(([ingredient, amount]) => {
        if (amount !== 0 && !ingredientMap.has(ingredient)) {
            ingredientMap.set(ingredient, true);
            return true;
        }
        return false;
    });
    console.log(availableSortedArray)
    return availableSortedArray.map((ingr, index) => {
        if(ingr[1] < recipeArray[index][1]) return 0
        return  Math.floor(ingr[1] /recipeArray[index][1])
    }).sort ((a,b)=> a - b)[0]

}

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};

console.log(cakes(recipe, available))