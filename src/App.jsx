import RecipeItem from "./item/recipeItem"

function App() {

  return (
    <div className=" flex m-auto justify-center mt-3">
      <RecipeItem recipe={{
      id: 1,
      "name": "Pizza"
    }}/>
    </div>
  )
}

export default App
