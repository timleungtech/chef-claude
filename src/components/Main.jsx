export default function Main (props) {
  return (
    <main>
      <form action={props.addIngredient} className='add-ingredient-form'>
        <input 
          type='text'
          placeholder='e.g. oregano'
          aria-label='add-ingredient'
          name='ingredient'
        />
        <button>Add ingredient</button>  
      </form>
    </main>
  )
}