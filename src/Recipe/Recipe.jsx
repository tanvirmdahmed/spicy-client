import React from 'react';

const Recipe = ({ recipe }) => {
    const { recipeName, ingredients, cookingMethod, rating } = recipe;
    return (
        <div className="card w-[90%]w[90%] bg-image border border-gray-200 rounded-lg shadow-xl">
            <div className="card-body">
                <h2 className="text-4xl text-lime-800 font-bold">{recipeName}</h2>
                <h4 className='text-xl font-bold text-slate-800'>Ingredients</h4>
                <ol>
                    {
                        ingredients.map(ingredient => <li className='list-decimal text-lg text-slate-600 ms-4 capitalize'>{ingredient}</li>)
                    }
                </ol>
                <p className='text-slate-600'>{cookingMethod}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-outline">Add Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;