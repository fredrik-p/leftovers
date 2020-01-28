/**
 * Random recipe generator
 *
 */


// Fetching from API
const getRandomRecipe = async () => {
    const response = await fetch(`
};

getRandomRecipe()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });