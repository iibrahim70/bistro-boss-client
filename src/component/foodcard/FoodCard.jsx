import React from 'react';

const FoodCard = ({item}) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure><img src={image} alt="Shoes" /></figure>
      <p className='absolute right-0 mr-5 mt-5 px-2 rounded bg-slate-900 text-white'>${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-4 bg-slate-100 border-yellow-500">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;