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
                console.log(data);
                //console.log(data.recipes[0].analyzedInstructions[0].steps)
                //console.log()
                //console.log()
                //console.log(data.recipes[0].cookingMinutes)
                //console.log()

                

                let output =



///NEW


                `            <div class="img-body">
                <div class="image-cropper">
                    <img src="${data.recipes[0].image}"
                        class="card-img-top" alt="">
                </div>
            </div>

            <div class="card">

                <div class="card-body">
                    <h2 class="card-title">${data.recipes[0].title}</h2>
                    <div class="serving-wrapper">
                        <div class="serving">
                            <p>🍽 ${data.recipes[0].servings}</p>

                        </div>
                        <div class="estimated-time">
                            <p>🕣 ${data.recipes[0].readyInMinutes} min</p>


                        </div>
                    </div>
                    <h3>Ingredients</h3>
                    <ul class="ingredients" id="ingredientList">
                        
                    </ul>

                    <h3>Instructions</h3>
                    <ol class="instruction" id="instructionlist">
                            </ol>

                </div>
            </div>`;
                document.querySelector("#recipe").innerHTML = output;

                
                //Ingredients forEach function
                const ingredients = data.recipes[0].extendedIngredients;

                ingredients.forEach((item) =>{
                    let liEl = document.createElement("LI");
                    //<li>${item.name} ${item.measures.metric.amount} ${item.measures.metric.unitShort} </li>

                    liEl.innerHTML = `${item.measures.metric.amount} ${item.measures.metric.unitShort} ${item.name }`;
                    document.querySelector("#ingredientList").append(liEl);
                });

                //Instruction forEach function
                const instruction = data.recipes[0].analyzedInstructions[0].steps;

                instruction.forEach((res) => {
                    let liEl1 = document.createElement("LI");
                    //<li>${item.name} ${item.measures.metric.amount} ${item.measures.metric.unitShort} </li>

                    liEl1.innerHTML = `${res.step}`;
                    document.querySelector("#instructionlist").append(liEl1);
                });
            })
            .catch(err => {
                console.log(err);
            });
    });