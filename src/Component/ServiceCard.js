import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, title, _id, price } = service;
    return (
        <div className="card p-6 card-compact w-80 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-orange-600 font-bold '>Price : $ {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;