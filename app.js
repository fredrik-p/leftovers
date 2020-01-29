// /**
//  * Random recipe generator
//  *
//  */


 // Fetching from API
 const getRandomRecipe = async () => {
     const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=1bb4a5aaed654b6e9134576586d04a17`);
     return await response.json();
 };

 getRandomRecipe()
     .then(data => {
         console.log(data);
         console.log(data.recipes[0].analyzedInstructions[0].steps)
         console.log(data.recipes[0].title)
         console.log(data.recipes[0].image)
         console.log(data.recipes[0].cookingMinutes)
         console.log(data.recipes[0].servings)                     
     })
     .catch(err => {
         console.log(err);
             });





    // Button

    let button = document.querySelector('.formRecipe');

    button.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('I´ve been clicked');
    });