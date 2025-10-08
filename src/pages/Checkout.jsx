import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { CreditCardIcon, TruckIcon } from '@heroicons/react/24/outline';

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, total, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateShippingInfo = () => {
    const newErrors = {};
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'address',
      'city',
      'state',
      'zipCode',
      'country',
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePaymentInfo = () => {
    const newErrors = {};
    const requiredFields = ['cardNumber', 'cardName', 'expiryDate', 'cvv'];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    if (formData.cardNumber && !/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }

    if (formData.cvv && !/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = 'CVV must be 3 or 4 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1 && validateShippingInfo()) {
      setStep(2);
    } else if (step === 2 && validatePaymentInfo()) {
      // Process payment and place order
      clearCart();
      navigate('/order-confirmation');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
          <p className="mt-2 text-gray-600">
            Add some products to your cart before checking out.
          </p>
          <button
            onClick={() => navigate('/products')}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-lg font-medium text-gray-900 mb-6">
                  Shipping Information
                </h2>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`block w-full rounded-md ${
                          errors.firstName ? 'border-red-300' : 'border-gray-300'
                        } shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
                      />
                      {errors.firstName && (
                        <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`block w-full rounded-md ${
                          errors.lastName ? 'border-red-300' : 'border-gray-300'
                        } shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
                      />
                      {errors.lastName && (
                        <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`block w-full rounded-md ${
                          errors.email ? 'border-red-300' : 'border-gray-300'
                        } shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className={`block w-full rounded-md ${
                          errors.address ? 'border-red-300' : 'border-gray-300'
                        } shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
                      />
                      {errors.address && (
                        <p className="mt-2 text-sm text-red-600">{errors.address}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`block w-full rounded-md ${
                          errors.city ? 'border-red-300' : 'border-gray-300'
                        } shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
                      />
                      {errors.city && (
                        <p className="mt-2 text-sm text-red-600">{errors.city}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State / Province
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className={`block w-full rounded-md ${
                          errors.state ? 'border-red-300' : 'border-gray-300'
                        } shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
                      />
                      {errors.state && (
                        <p className="mt-2 text-sm text-red-600">{errors.state}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="zipCode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className={`block w-full rounded-md ${
                          errors.zipCode ? 'border-red-300' : 'border-gray-300'
                        } shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
                      />
                      {errors.zipCode && (
                        <p className="mt-2 text-sm text-red-600">{errors.zipCode}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <div className="mt-1">
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={`block w-full rounded-md ${
                          errors.country ? 'border-red-300' : 'border-gray-300'
                        } shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
                      >
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        {/* Add more countries as needed */}
                      </select>
                      {errors.country && (
                        <p className="mt-2 text-sm text-red-600">{errors.country}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-lg font-medium text-gray-900 mb-6">
                  Payment Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="cardNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Card number
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        className={`block w-full rounded-md ${
                          errors.cardNumber ? 'border-red-300' : 'border-gray-300'
                        } shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
                      />
                      {errors.cardNumber && (
                        <p className="mt-2 text-sm text-red-600">{errors.cardNumber}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="cardName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name on card
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        className={`block w-full rounded-md ${
                          errors.cardName ? 'border-red-300' : 'border-gray-300'
                        } shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
                      />
                      {errors.cardName && (
                        <p className="mt-2 text-sm text-red-600">{errors.cardName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="expiryDate"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Expiry date
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          className={`block w-full rounded-md ${
                            errors.expiryDate ? 'border-red-300' : 'border-gray-300'
                          } shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
                        />
                        {errors.expiryDate && (
                          <p className="mt-2 text-sm text-red-600">{errors.expiryDate}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="cvv"
                        className="block text-sm font-medium text-gray-700"
                      >
                        CVV
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="123"
                          className={`block w-full rounded-md ${
                            errors.cvv ? 'border-red-300' : 'border-gray-300'
                          } shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
                        />
                        {errors.cvv && (
                          <p className="mt-2 text-sm text-red-600">{errors.cvv}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="mt-8 flex justify-between">
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                {step === 1 ? 'Continue to Payment' : 'Place Order'}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10 lg:mt-0 lg:col-span-5">
          <div className="sticky top-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>
            <div className="bg-white shadow-sm rounded-lg">
              <ul className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <li key={item.id} className="p-4 flex">
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
                          <h3>{item.name}</h3>
                          <p className="ml-4">${item.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {item.quantity}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-200 px-4 py-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${total}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <p>Shipping</p>
                    <p>Free</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                    <p>Tax</p>
                    <p>${(total * 0.1).toFixed(2)}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between text-base font-medium text-gray-900">
                  <p>Total</p>
                  <p>${(total + total * 0.1).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 