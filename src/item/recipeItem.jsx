/* eslint-disable react/prop-types */
export default function RecipeItem ({recipe}) {
    return (
        <div className=" bg-gray-600 rounded-md m-2 p-2 w-96">
            <h3 className="mb-1 font-bold text-white text-2xl">{recipe.name}</h3>
            <button className=" bg-rose-500 border-none outline-none text-white px-2 py-1 rounded-md cursor-pointer hover:bg-rose-600 transition-colors">Add</button>
        </div>
    )
}