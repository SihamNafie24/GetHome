import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircleIcon, TruckIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function OrderConfirmation() {
  // In a real application, this would come from the order context or API
  const orderDetails = {
    orderNumber: 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    date: new Date().toLocaleDateString(),
    estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    items: [
      {
        id: 1,
        name: 'Smart Kitchen Scale',
        price: 49.99,
        quantity: 1,
        image: '/images/products/product-1.jpg',
      },
      {
        id: 2,
        name: 'Digital Food Thermometer',
        price: 29.99,
        quantity: 2,
        image: '/images/products/product-2.jpg',
      },
    ],
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
    },
    paymentMethod: {
      type: 'Credit Card',
      last4: '4242',
    },
    subtotal: 109.97,
    shipping: 0,
    tax: 11.00,
    total: 120.97,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500" />
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
          Thank you for your order!
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Your order has been placed and will be processed shortly.
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Order number: {orderDetails.orderNumber}
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Order Details */}
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Order Details</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Items</h3>
              <ul className="mt-4 divide-y divide-gray-200">
                {orderDetails.items.map((item) => (
                  <li key={item.id} className="py-4 flex">
                    <div className="flex-shrink-0 w-20 h-20 border border-gray-200 rounded-md overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h4>{item.name}</h4>
                          <p className="ml-4">${item.price}</p>
                        </div>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {item.quantity}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between text-sm text-gray-600">
                <p>Subtotal</p>
                <p>${orderDetails.subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <p>Tax</p>
                <p>${orderDetails.tax.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900 mt-4">
                <p>Total</p>
                <p>${orderDetails.total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping & Payment Info */}
        <div className="space-y-8">
          <div className="bg-white shadow-sm rounded-lg p-6">
            <div className="flex items-center">
              <TruckIcon className="h-6 w-6 text-gray-400" />
              <h2 className="ml-2 text-lg font-medium text-gray-900">Shipping Information</h2>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p className="font-medium">{orderDetails.shippingAddress.name}</p>
              <p>{orderDetails.shippingAddress.street}</p>
              <p>
                {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state}{' '}
                {orderDetails.shippingAddress.zipCode}
              </p>
              <p>{orderDetails.shippingAddress.country}</p>
              <p className="mt-4">
                Estimated delivery: {orderDetails.estimatedDelivery}
              </p>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-lg p-6">
            <div className="flex items-center">
              <CreditCardIcon className="h-6 w-6 text-gray-400" />
              <h2 className="ml-2 text-lg font-medium text-gray-900">Payment Information</h2>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p>
                {orderDetails.paymentMethod.type} ending in {orderDetails.paymentMethod.last4}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
        >
          <HomeIcon className="h-5 w-5 mr-2" />
          Return to Home
        </Link>
      </div>
    </div>
  );
} 