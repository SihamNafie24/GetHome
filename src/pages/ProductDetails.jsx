import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { StarIcon } from '@heroicons/react/20/solid';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

// Mock data for products (replace with actual API call)
const mockProducts = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 900) + 100,
  category: ['Kitchen Tools', 'Home Appliances', 'Storage Solutions', 'Smart Home'][
    Math.floor(Math.random() * 4)
  ],
  images: [
    `/images/products/product-${(i % 10) + 1}.jpg`,
    `/images/products/product-${((i + 1) % 10) + 1}.jpg`,
    `/images/products/product-${((i + 2) % 10) + 1}.jpg`,
  ],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  features: [
    'Premium quality materials',
    'Easy to use and maintain',
    'Durable and long-lasting',
    'Modern design',
    'Energy efficient',
  ],
  specifications: {
    dimensions: '10" x 5" x 3"',
    weight: '2.5 lbs',
    material: 'Stainless Steel',
    warranty: '2 years',
  },
  rating: 4.5,
  reviews: 128,
}));

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  // Show only a single main image
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulate API call
    const foundProduct = mockProducts.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/products');
    }
  }, [id, navigate]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main image */}
        <div className="lg:max-w-lg">
          <div className="rounded-xl overflow-hidden bg-white shadow flex items-center justify-center h-96">
            <img
              src={product.image || (product.images && product.images[0])}
              alt={product.name}
              className="max-h-full w-auto object-contain"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mt-2 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {product.name}
          </h1>

          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">${product.price}</p>
          </div>

          {/* Reviews */}
          <div className="mt-3">
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={`h-5 w-5 flex-shrink-0 ${
                      product.rating > rating
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="ml-2 text-sm text-gray-500">
                {product.reviews} reviews
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-700">{product.description}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Features</h3>
            <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Specifications</h3>
            <dl className="mt-2 text-sm text-gray-700">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2">
                  <dt className="font-medium text-gray-900">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-6">
            <div className="flex items-center">
              <label htmlFor="quantity" className="mr-4 text-sm font-medium text-gray-900">
                Quantity
              </label>
              <select
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="rounded-md border-gray-300 py-1.5 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => addToCart({ ...product, quantity })}
              className="mt-6 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <ShoppingCartIcon className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 