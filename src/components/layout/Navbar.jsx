import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">GetHome</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Products
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <Link
              to="/cart"
              className="relative p-2 text-gray-500 hover:text-gray-900"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-primary-600 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="ml-4 flex items-center">
                <span className="text-sm text-gray-700 mr-2">
                  Welcome, {user?.name}
                </span>
                <button
                  onClick={logout}
                  className="btn btn-secondary text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                <UserIcon className="h-5 w-5 mr-2" />
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 