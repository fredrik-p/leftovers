// /**
//  * Random recipe generator
//  *
//  */


 // Fetching from API
 const getRandomRecipe = async () => {
     const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=1bb4a5aaed654b6e9134576586d04a17`);
     return await response.json();
 };

 



    // Button

    let button = document.querySelector('.formRecipe');

    button.addEventListener('submit', (e) => {
        e.preventDefault();

        getRandomRecipe()
            .then(data => {
                //console.log(data);
                //console.log(data.recipes[0].analyzedInstructions[0].steps)
                //console.log()
                //console.log()
                //console.log(data.recipes[0].cookingMinutes)
                //console.log()

                

                let output =

                `<div class="img-body">
                    <img src="${data.recipes[0].image}" class="card-img-top" alt="">
            </div>

                    <div class="card">

                        <div class="card-body">
                            <h2 class="card-title">${data.recipes[0].title}</h2>
                            <ul class="ingredients" id="ingredientList">
                            
                            </ul>
                            <p class="card-text instructions"></p>
                            <p class="card-text instructions">${data.recipes[0].servings}Servings</p>

                        </div>
                    </div>
                </div>`;
                document.querySelector("#recipe").innerHTML = output;

                const ingredients = data.recipes[0].extendedIngredients;

                ingredients.forEach((item) =>{
                    let liEl = document.createElement("LI");
                    //<li>${item.name} ${item.measures.metric.amount} ${item.measures.metric.unitShort} </li>

                    liEl.innerHTML = `${ item.name } ${ item.measures.metric.amount } ${ item.measures.metric.unitShort }`;
                    document.querySelector("#ingredientList").append(liEl);
                });
            })
            .catch(err => {
                console.log(err);
            });
    });