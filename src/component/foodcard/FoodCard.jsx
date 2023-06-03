import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import UseCart from '../../hooks/UseCart';

const FoodCard = ({item}) => {

  const { name, image, price, recipe, _id } = item;
  const {user} = useContext(AuthContext);
  const [, refetch] = UseCart(); 
  const navigate = useNavigate();  
  const location = useLocation(); 
  
  const handleAddToCart = item => {
    console.log(item);
    if(user && user.email){
      const cartItem = {itemId: _id, name, image, price, email: user.email}
      fetch('http://localhost:3000/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        }, 
        body: JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Food added on the cart',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }
    else{
      Swal.fire({
        title: 'Please singin to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Signin Now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/signin', {state: {from: location}});
        }
      })
    }
  }

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure><img src={image} alt="Shoes" /></figure>
      <p className='absolute right-0 mr-5 mt-5 px-2 rounded bg-slate-900 text-white'>${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 bg-slate-100 border-yellow-500">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;