import React, { useContext, useEffect, useState } from 'react';
import OrderRow from './OrderRow';
import { AuthContext } from '../context/AuthProvider';

const Orders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    const [isDisable, setIsDisable] = useState(false)


    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [user?.email])

    const handleDelete = (id) => {
        const agree = window.confirm('Are you want to delete?')
        if (agree) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE"

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining)
                    }
                })
        }
    }

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: 'approved' }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id)
                    const approving = orders.find(odr => odr._id === id)
                    approving.status = 'approved'
                    const newOrder = [approving, ...remaining]
                    setOrders(newOrder)
                    setIsDisable(true)
                }


            })
            .catch(err => console.error(err))
    }

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders?.map(order => <OrderRow
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                            isDisable={isDisable}
                        ></OrderRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;