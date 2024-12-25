import { useState, useEffect, useRef } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import IngredientsList from "./components/IngredientsList.jsx"
import ClaudeRecipe from './components/ClaudeRecipe.jsx'
import getRecipeFromMistral from './data/ai.js'

function App() {
  // function handleSubmit (event) {
  //   event.preventDefault()  // turns off page refresh on form submit
  //   console.log('Form submitted!')
  //   const formData = new FormData(event.currentTarget)
  //   const newIngredient = formData.get('ingredient')  // form name
  //   console.log(newIngredient)
  //   setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  // }
  //
  // function addFavoriteThing () {
  //   // setMyFavoriteThings(prevFavThings => [...prevFavThings, 'test'])
  //   setMyFavoriteThings(prevFavThings => [...prevFavThings, allFavoriteThings[prevFavThings.length]])
  // }

  // function toggleFavorite () {
  //   setContact(prevContact => ({
  //       ...prevContact,
  //       isFavorite: !prevContact.isFavorite
  //   }))
  // }

  // function signUp (formData) {
  //   // const data = Object.fromEntries(formData) // all form data
  //   const email = formData.get('email')
  //   const password = formData.get('password')
  //   console.log(email)
  //   console.log(password)
  // }

  function addIngredient (formData) {
    const newIngredient = formData.get('ingredient')  // form name
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  const [ingredients, setIngredients] = useState([''])
  
  const [recipe, setRecipe] = useState('')
  const recipeSection = useRef(null)

  useEffect(() => {
    if (recipe !== '' && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({behavior: 'smooth'})
    }
  }, [recipe])

  async function getRecipe () {
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    setRecipe(recipeMarkdown)
  }

  return (
    <>
      <Header />
      <Main addIngredient={addIngredient}/>
      {ingredients.length > 0 && <IngredientsList 
        ingredients={ingredients}
        getRecipe={getRecipe}
        ref={recipeSection} />}
      {recipe && <ClaudeRecipe 
        recipe={recipe}/>}
    </>
  )
}

export default App