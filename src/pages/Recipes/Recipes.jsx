import React, {useState, useEffect} from 'react'
import Recipe from '../Recipes/Recipe'
import './recipes.css'


export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
   

const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=healthy ${search}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`)
    const data = await response.json();
    return data.hits
}

function updateSearch(event) {
    setSearch(event.target.value)
} 

const getSearch = async (event) => {
    event.preventDefault();
   const fetchedRecipes = await getRecipes();
   setRecipes(fetchedRecipes)
}

    return (
        <div className="recipes-list">
            <form onSubmit={getSearch} className="search-form">
        <input className='search-bar' type="text" value={search} onChange={updateSearch}/> <br/>
        <button class="btn waves-effect waves-light" type="submit" name="action">Search Recipes
    <i class="material-icons right">send</i>
  </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
      ))}
      </div>
        </div>
    )
}
