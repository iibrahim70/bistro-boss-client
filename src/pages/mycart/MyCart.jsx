import React from 'react';
import { Helmet } from 'react-helmet-async';
import UseCart from '../../hooks/UseCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
  
  const [cart, refetch] = UseCart(); 
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = item => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/carts/${item._id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0) {
            refetch(); 
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            ) 
          } 
        })
      }
    })
  }

  return (
    <div className='ps-10 mt-20 w-full h-full '>
      <Helmet title='Bistro Boss || My Cart' />
      <div className='flex justify-evenly items-center h-10 font-semibold uppercase'>
        <h3 className='text-3xl'>Total Items: {cart.length}</h3>
        <h3 className='text-3xl'>Total Price: ${total}</h3>
        <button className='btn btn-warning  btn-sm'>Pay</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          
          <tbody>
            {/* row 1 */}
            {
              cart.map((item, index) => <tr key={item._id}>
                <td>{index + 1}</td>

                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                </td>

                <td>{item.name}</td>

                <td className='text-end'>${item.price}</td>
                <th>
                  <button onClick={() => handleDelete(item)} className='bg-red-500 btn btn-ghost text-white'><FaTrashAlt/></button>
                </th>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;