import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import useTitle from '../hooks/useTitle';

const ChefDetails = () => {
    const eachChefData = useLoaderData();
    const { id, chefPicture, chefName, bio, yearsExperience, numRecipes, likes, recipes } = eachChefData;
    useTitle('Chef Recipes');
    return (
        <div className='px-3 md:lg:px-0'>
            <div className='bg-image flex flex-col-reverse md:lg:flex-row gap-6 items-center justify-center my-8 bg-purple-100 px-8 py-8 rounded-lg'>
                <div className='w-full'>
                    <div className='mb-4 md:lg:mb-12 text-center md:lg:text-left'>
                        <p className='text-zinc-600 font-bold text-3xl md:text-5xl lg:text-6xl drop-shadow-xl mb-3'>{chefName}</p>
                        <div className='text-gray-500 text-lg md:lg:text-2xl font-semibold '>
                            <p className=''>Years of Experiences: {yearsExperience} years</p>
                            <p className=''>Number of Recipes: {numRecipes} items</p>
                            <p className=''>{likes} peoples likes him</p>
                        </div>
                    </div>

                    <p className='text-slate-600 mb-6 text-xl text-justify md:lg:text-3xl'>"{bio}"</p>
                    <div className='text-center md:lg:text-left'>
                        <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Join with Me</button>
                    </div>
                </div>
                <div className='w-full'>
                    <img className='rounded-full drop-shadow-lg' src={chefPicture} alt="" />
                </div>
            </div>
            <div className='my-16'>
                <h1 className='mb-8 text-amber-400 text-center'>All Recipes</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        recipes.map(recipe => <Recipe
                            key={recipe.id}
                            recipe={recipe}
                        ></Recipe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;