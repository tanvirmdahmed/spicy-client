import React from 'react';

const Sliders = () => {
    return (
        <div>

            <div className="carousel w-full">
                <div id="item1" className="carousel-item rounded-lg w-full bg-sliders1 items-end">
                    <h2 className='text-sky-300 drop-shadow-xl text-5xl text-center font-bold italic uppercase pb-12 ps-8'>"Eat a lot today and again tomorrow"</h2>
                </div>
                <div id="item2" className="carousel-item rounded-lg w-full bg-sliders2 justify-center items-center">
                    <h2 className='text-amber-200 drop-shadow-xl text-5xl text-center font-bold italic uppercase pr-8 pt-8'>"Hundreds of flavors under one roof"</h2>
                </div>
                <div id="item3" className="carousel-item rounded-lg w-full bg-sliders3 justify-center items-center">
                    <h2 className='text-stone-100 drop-shadow-xl text-5xl text-center font-bold italic uppercase pr-8 pt-8'>"Something hot || Something tasty"</h2>
                </div>
                <div id="item4" className="carousel-item rounded-lg w-full bg-sliders4 justify-end items-start">
                    <h2 className='text-amber-300 drop-shadow-xl text-5xl text-center font-bold italic uppercase pr-8 pt-8'>"A taste you’ll remember"</h2>
                </div>
                
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Sliders;