import React from 'react'

function App() {
  const items = [{
    "id": 1,
    "name": "Classic Margherita Pizza",
    "ingredients": [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
      "Salt and pepper to taste"
    ],
    "instructions": [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough and spread tomato sauce evenly.",
      "Top with slices of fresh mozzarella and fresh basil leaves.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
      "Slice and serve hot."
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 15,
    "servings": 4,
    "difficulty": "Easy",
    "cuisine": "Italian",
    "caloriesPerServing": 300,
    "tags": [
      "Pizza",
      "Italian"
    ],
    "userId": 45,
    "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
    "rating": 4.6,
    "reviewCount": 3,
    "mealType": [
      "Dinner"
    ]
  }];

  return (
    <div>
      {items.map((item) => {
        return <div key={item.id}>
          <div className="item-container font-mono bg-slate-300">

            {/* header */}
            <header className='text-2xl font-serif text-center m-2'>
              <h1>{item.name}</h1>
            </header>

            {/* main */}
            <main>
              <div className="item-wrapper flex mx-2 gap-2">

                <div className="image-container w-[40vw]">
                  <img className='rounded-xl border-purple-600 border-t-4 border-l-4' src={item.image} alt="" />
                </div>

                <div className="text-container w-[60vw] bg-purple-500 rounded-xl border-black border-b-4 border-r-4">
                  <div className="item-title m-2 text-center">
                    <h1>~ {item.name} ~</h1>
                  </div>
                  <div className="section-container flex gap-1 mx-1">

                    <div className="ingredient bg-slate-200">
                      <h2 className='uppercase text-xl m-1 border-b-4 border-black'>ingredient:</h2>
                      <div className="box border-black border-2 m-2">
                        <p className='p-4'>{item.ingredients}</p>
                      </div>
                    </div>

                    <div className="instruction bg-slate-200">
                      <h2 className='uppercase text-xl m-1 border-black border-b-4'>instruction:</h2>
                      <div className="box border border-black border-2 m-2">
                        <p className='p-4'>{item.instructions}</p>
                      </div>
                    </div>
                  </div>
                  <div className="section-container-2 flex justify-around">
                    <div className="text bg-slate-200 rounded-3xl p-2 m-2 text-sm">
                      <h1 className='text-lg border-black border-b-2'>Details:</h1>
                      <p>Prep time: {item.prepTimeMinutes} minutes</p>
                      <p>Cooking time: {item.cookTimeMinutes} minutes</p>
                      <p>Servings: {item.servings} per servings</p>
                      <p>Difficulity: {item.difficulty}</p>
                    </div>
                    <div className="text-2  bg-slate-200 rounded-3xl p-2 m-2 text-sm ">
                      <h1 className='text-lg border-black border-b-2'>Nutritions:</h1>
                      <p>calories Per Serving: {item.caloriesPerServing}</p>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <footer className='flex mx-6 justify-between'>
              <div className='flex gap-7'>
                <div className="m-2">
                  <h2 className='border-black border-b-2'>Rating: {item.rating}</h2>
                  <h2 className='border-black border-b-2'>Review count: {item.reviewCount}</h2>
                </div>
                <div className="m-2 ">
                  <h2 className='border-black border-b-2'>Cousine Type: {item.cuisine}</h2>
                  <h2 className='border-black border-b-2'>Meal Type: {item.mealType}</h2>
                </div>
              </div>
              <div className="tags m-2">
                <h2>Tags:</h2>
                <p className='border-black border-b-2'>#{item.tags}</p>
              </div>
            </footer>
          </div>
        </div>
      })}
    </div>
  )
}

export default App