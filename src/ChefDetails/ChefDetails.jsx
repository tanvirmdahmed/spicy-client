import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const ChefDetails = () => {
    const eachChefData = useLoaderData();
    const { id, chefPicture, chefName, bio, yearsExperience, numRecipes, likes, recipes } = eachChefData;
    return (
        <div>
            <div className='bg-image grid grid-cols-2 items-center justify-center my-8 bg-purple-100 px-8 py-8 rounded-lg'>
                <div className=''>
                    <div className='mb-12'>
                        <p className='text-blue-700 font-bold text-4xl text-center mb-3'>{chefName}</p>
                        <div className='text-gray-500 text-lg font-semibold text-center'>
                            <p className=''>Years of Experiences: {yearsExperience} years</p>
                            <p className=''>Number of Recipes: {numRecipes} items</p>
                            <p className=''>{likes} peoples likes him</p>
                        </div>
                    </div>

                    <p className='text-slate-600 mb-6 text-center text-xl'>"{bio}"</p>
                    <div className='text-center'>
                        <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Join with Me</button>
                    </div>
                </div>
                <div className=''>
                    <img className='rounded-full' src={chefPicture} alt="" />
                </div>
            </div>
            <div className='my-16'>
                <h1 className='mb-8 text-amber-400 text-center'>All Recipes</h1>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        recipes.map(recipe => <Recipe
                            recipe={recipe}
                        ></Recipe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;