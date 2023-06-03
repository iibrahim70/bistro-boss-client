import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiousSecure';

const AllUsers = () => { 
  const [axiosSecure] = useAxiosSecure(); 
  const {data: users = [], refetch} = useQuery(['users'], async() => {
    const res = await axiosSecure.get('/users')
    return res.data;  
  })

  const handleMakeAdmin = user => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to make ${user.name} an admin?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/admin/${user._id}`, {
          method: 'PATCH'
        })
          .then(res => res.json())
          .then(data => {
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin now!`,
                showConfirmButton: false,
                timer: 1500
              });
            }
          });
      }
    });
  };

  
  const handleDelete = () => {

  }

  return (
    <div className='ps-10 mt-20 w-full h-[-webkit-fill-available] overflow-x-hidden'>
      <Helmet title='Bistro Boss || All Users' />

      <h3 className='text-3xl font-semibold'>Total Users: {users.length}</h3>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {
                    user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className='bg-orange-500 btn btn-ghost text-white'><FaUser /></button>
                  }
                </td>
                <td>
                  <button onClick={() => handleDelete(user)} className='bg-red-500 btn btn-ghost text-white'><FaTrashAlt /></button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;