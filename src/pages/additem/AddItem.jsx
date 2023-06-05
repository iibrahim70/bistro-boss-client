import React from 'react';
import SectionTitle from '../shared/sectiontitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiousSecure';
import Swal from 'sweetalert2';

const imageHostingToken = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN; 
const AddItem = () => {

  const [axiosSecure] = useAxiosSecure(); 
  
  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    const formData = new FormData(); 
    formData.append('image', data.image[0]);

    fetch(imageHostingURL, {
      method: 'POST',
      body: formData,
    })
    .then(res => res.json())
    .then(imgRes => {
      if(imgRes.success){
        const imgURL =  imgRes.data.display_url; 
        const {name, price, category, recipe} = data; 
        const newItem = {name, price: parseFloat(price), category, recipe, image: imgURL}; 
        axiosSecure.post('/menu', newItem)
        .then(data => {
          if(data.insertedId){
            reset(); 
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Item added successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        }) 
      } 
    })
  };
  
  // console.log(errors);

  return (
    <div className='w-full h-full'>
      <SectionTitle subHeading="What's new" heading='add an item' />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input {...register("name", { required: true, maxLength: 120 })} type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
        </div>

        <div className='flex gap-5'>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input {...register("price", { required: true })} type="number" placeholder="price" className="input input-bordered w-full" />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Category*</span>
            </label>
            <select defaultValue='Pick One' {...register("category", { required: true })} className="select select-bordered">
              <option disabled>Pick One</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Drinks</option>
              <option>Dessert</option>
            </select>
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea {...register("recipe", { required: true})} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full" />
        </div>
        <input className='btn btn-sm' type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;



