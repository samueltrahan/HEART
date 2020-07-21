export function getRecipeData(query){
    const recipes = fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`, {mode: "cors"})
    .then(res => res.json())
    return recipes;
}