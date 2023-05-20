import React, { useEffect, useState } from 'react';
import { useActionData } from 'react-router-dom';

const OrderRow = ({ order, handleDelete, handleUpdate, isDisable }) => {

    const [service, setService] = useState({})


    useEffect(() => {
        fetch(`http://localhost:5000/services/${order.serviceId}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [order.serviceId])



    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-24 h-24">
                            <img src={service.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{order.name}</div>
                        <div className="text-sm opacity-50">{order.phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {order.serviceTitle}
                <br />
                <span className="badge badge-ghost badge-sm">Price : {order.price}</span>
            </td>
            <td>{order.phone}</td>
            <th>
                <button disabled={order.status ? { isDisable } : order.status} onClick={() => handleUpdate(order._id)} className="btn  btn-xs">{order.status ? order.status : "pending"}</button>
                <button onClick={() => handleDelete(order._id)} className="btn  btn-xs">Delete</button>
            </th>
        </tr>

    );
};

export default OrderRow;