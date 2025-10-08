import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { TrashIcon, MinusIcon, PlusIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Cart() {
  const navigate = useNavigate();
  const { cart, total, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleDecrement = (itemId, currentQty) => {
    const nextQty = currentQty - 1;
    if (nextQty <= 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, nextQty);
    }
  };

  const handleIncrement = (itemId, currentQty) => {
    updateQuantity(itemId, currentQty + 1);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
          <p className="mt-2 text-gray-600">Browse products and add items to your cart.</p>
          <Link
            to="/products"
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow p-4 flex">
              <div className="w-24 h-24 flex-shrink-0 border border-gray-200 rounded-md overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center" />
              </div>
              <div className="ml-4 flex-1 min-w-0">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 truncate">{item.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                    <p className="text-xs text-gray-500">${item.price.toFixed(2)} each</p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="inline-flex items-center border rounded-md">
                    <button
                      type="button"
                      onClick={() => handleDecrement(item.id, item.quantity)}
                      className="p-2 hover:bg-gray-50"
                      aria-label="Decrease quantity"
                    >
                      <MinusIcon className="h-4 w-4 text-gray-600" />
                    </button>
                    <span className="px-4 py-1 text-sm text-gray-900 min-w-[2rem] text-center">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => handleIncrement(item.id, item.quantity)}
                      className="p-2 hover:bg-gray-50"
                      aria-label="Increase quantity"
                    >
                      <PlusIcon className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="inline-flex items-center text-sm text-red-600 hover:text-red-700"
                  >
                    <TrashIcon className="h-5 w-5 mr-1" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4">
          <div className="bg-white rounded-lg shadow p-6 sticky top-6">
            <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (10%)</span>
                <span>${(total * 0.1).toFixed(2)}</span>
              </div>
              <div className="pt-2 mt-2 border-t flex justify-between text-base font-semibold text-gray-900">
                <span>Total</span>
                <span>${(total + total * 0.1).toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={() => navigate('/checkout')}
                className="w-full inline-flex items-center justify-center px-4 py-2 rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Proceed to Checkout <ArrowRightIcon className="h-5 w-5 ml-2" />
              </button>
              <button
                type="button"
                onClick={clearCart}
                className="w-full inline-flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Clear Cart
              </button>
              <Link
                to="/products"
                className="block text-center text-sm text-primary-600 hover:text-primary-700"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


