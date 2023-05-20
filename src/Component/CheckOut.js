import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData()
    const { img, title, price, _id } = service;
    const { user } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.email.value;
        console.log(name, phone, email, message)

        const order = {
            serviceId: _id,
            serviceTitle: title,
            name,
            price,
            phone,
            email,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset()
                alert('success')
            })
    }

    return (
        <div className='mx-auto' style={{ width: '1140px' }}>
            <form onSubmit={handleSubmit}>
                <img className='h-80 w-full' src={img} alt="" />
                <h2 className="text-4xl text-orange-600">{title}</h2>
                <h2 className="text-2xl text-orange-600">Price: $ {price}</h2>
                <div className='bg-gray-100 py-10 my-10'>
                    <div className='grid lg:grid-cols-2 gap-6 w-4/5 mx-auto mt-6'>
                        <input name="firstName" type="text" placeholder="Your first name" className="input input-bordered w-full" />
                        <input name="lastName" type="text" placeholder="Your last name" className="input input-bordered w-full" />
                        <input name="phone" type="phone" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name="email" type="email" placeholder="Your email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />

                    </div>
                    <div className='w-4/5 mx-auto my-6'>
                        <textarea name="message" className="textarea textarea-bordered w-full" placeholder="Write your message"></textarea>
                        <input className='btn w-full mt-6' type="submit" value="Place Order" />
                    </div>
                </div>

            </form>
        </div>
    );
};

export default CheckOut;