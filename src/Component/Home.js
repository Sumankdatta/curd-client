import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';


const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl font-bold text-orange-600">Service</p>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className='py-7 mb-10'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;