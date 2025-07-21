import React, { useEffect, useState } from 'react';

const statusColor = {
  'In Transit': 'bg-blue-100 text-blue-500',
  'Delivered': 'bg-green-100 text-green-600',
};

const Book = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('orders');
    if (stored) {
      setOrders(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-xl p-5 mb-4 border"
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="font-semibold text-lg">Order #{order.id}</h2>
                <p className="text-sm text-gray-500">Tracking: {order.tracking}</p>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor[order.status] || 'bg-gray-100 text-gray-500'}`}
              >
                {order.status}
              </div>
              <div className="text-xl font-semibold text-blue-600">
                {order.price}
              </div>
            </div>

            <div className="text-sm text-gray-600 mb-3">
              <p><strong>Service:</strong> {order.service}</p>
              <p><strong>Order Date:</strong> {order.date}</p>
              <p><strong>From:</strong> {order.from} <strong>To:</strong> {order.to}</p>
            </div>

            <div className="flex gap-3">
              <button className="border rounded-md px-4 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700">
                Track Shipment
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Book;
