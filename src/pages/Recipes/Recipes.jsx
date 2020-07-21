import React, {useState, useEffect} from 'react'
import {getRecipeData} from '../../services/api-calls';
import Recipe from '../Recipes/Recipe'


export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('')

useEffect(() => {
    getRecipeData(query);
}, [query])

function updateSearch(event) {
    setSearch(event.target.value)
} 

function getSearch(event) {
    event.preventDefault();
    setQuery(search);
    setSearch('')
}

    return (
        <div>
            <form onSubmit={getSearch} className="search-form">
        <input className='search-bar' type="text" value={search} onChange={updateSearch}/>
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
