import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
    const [disable, setDisable] = useState(false);
    const { recipeName, ingredients, cookingMethod, rating } = recipe;

    const handleAddFavorite = () => {
        toast.success('Your favorite recipe added !', {
            position: toast.POSITION.TOP_CENTER
        });
        setDisable(!disable)
    }

    return (
        <div className="card w-[90%]w[90%] bg-image border border-gray-200 rounded-lg shadow-xl">
            <div className="card-body">
                <h2 className="text-3xl md:lg:text-4xl text-lime-800 font-bold">{recipeName}</h2>
                <h4 className='text-xl font-bold text-slate-800'>Ingredients</h4>
                <ol>
                    {
                        ingredients.map(ingredient => <li key={ingredient} className='list-decimal text-lg text-slate-600 ms-4 capitalize'>{ingredient}</li>)
                    }
                </ol>
                <p className='text-slate-600 text-justify'>{cookingMethod}</p>
                <div className='flex gap-2 items-center'>
                    <Rating className='text-gray-500 text-xl' placeholderRating={rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        readonly={true}
                    >
                    </Rating>
                    <span className='mb-1 font-bold text-gray-500'>{rating}</span>
                </div>
                <div className="card-actions justify-start">
                    {/* <button onClick={handleAddFavorite} className={disable === true ? "hidden" : "btn btn-outline"}>Add Favorite</button> */}
                    {
                        disable === true ? <button onClick={handleAddFavorite} className="btn btn-outline" disabled>Add Favorite</button> : <button onClick={handleAddFavorite} className="btn btn-outline">Add Favorite</button>
                    }
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Recipe;