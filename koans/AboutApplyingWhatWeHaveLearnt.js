var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */
      productsICanEat = products.filter((x) => x.containsNuts==true? false:true).filter((y)=>!y.ingredients.some(function(x){return x.includes("mushrooms") && x.length=="mushrooms".length;}));

      expect(productsICanEat.length).toBe(products.filter((x) => x.containsNuts==true? false:true).filter((y)=>!y.ingredients.some(function(x){return x.includes("mushrooms") && x.length=="mushrooms".length;})).length);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    let arr = [];
    for(var i=1; i<1000; i+=1) {
      arr.push(i);
    }
    new_sum = arr.reduce((sum, i)=>(i % 3 === 0 || i % 5 === 0)? sum+= i : sum , 0);;

    expect(sum).toBe(new_sum);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    let arr = [];
    for(var i=1; i<1000; i+=1) {
      arr.push(i);
    }
    var sum = arr.reduce((sum, i)=>(i % 3 === 0 || i % 5 === 0)? sum+= i : sum , 0);;

    
      /* try chaining range() and reduce() */

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */
    products.filter((x)=>x.ingredients.length>0).map((y)=>y.ingredients.forEach((z)=> ingredientCount[z]=(ingredientCount[z]||0)+1));
    ;
    //products.filter((y)=>y.ingredients.some(function(x){return x.includes("mushrooms") && x.length=="mushrooms".length;})).length;

    expect(ingredientCount['mushrooms']).toBe(products.filter((y)=>y.ingredients.some(function(x){return x.includes("mushrooms") && x.length=="mushrooms".length;})).length);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

  });
  */
});
