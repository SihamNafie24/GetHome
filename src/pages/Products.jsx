import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { ShoppingCartIcon, MagnifyingGlassIcon, ChevronRightIcon, FunnelIcon, XMarkIcon, StarIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import toast from 'react-hot-toast';

// Mock data for products with real names and Pexels images
const mockProducts = [
  // Kitchen Tools
  {
    id: 1,
    name: 'Professional Chef Knife Set',
    price: 299.99,
    category: 'Kitchen Tools',
    image: 'https://images.pexels.com/photos/16443132/pexels-photo-16443132/free-photo-of-sternsteiger-set-of-7-in-vg-10-steel.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'High-quality stainless steel chef knives.',
    rating: 4.8,
    reviews: 156,
    inStock: true,
  },
  {
    id: 2,
    name: 'Smart Digital Kitchen Scale',
    price: 49.99,
    category: 'Kitchen Tools',
    image: 'https://media.istockphoto.com/id/506195136/photo/portable-induction-cooktop.jpg?s=612x612&w=0&k=20&c=NQN0nWflv1_OJfRpRoARKc76_-2iDAUaRVknduAiBfY=',
    description: 'Precise digital scale with smart features.',
    rating: 4.5,
    reviews: 89,
    inStock: true,
  },
  {
    id: 3,
    name: 'Premium Cast Iron Skillet',
    price: 89.99,
    category: 'Kitchen Tools',
    image: 'https://images.pexels.com/photos/5639249/pexels-photo-5639249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Durable cast iron skillet for perfect searing.',
    rating: 4.9,
    reviews: 203,
    inStock: true,
  },
  // Home Appliances
  {
    id: 4,
    name: 'Smart Refrigerator',
    price: 1299.99,
    category: 'Home Appliances',
    image: 'https://media.istockphoto.com/id/1468024980/photo/cleaner-looking-at-the-shopping-list-on-the-fridge-at-an-automated-house.jpg?s=612x612&w=0&k=20&c=Y9p5P7h3KcczlYOsa2JO3kDhWUoirWK3VXwOQqZmnVA=',
    description: 'Modern refrigerator with smart features.',
    rating: 4.7,
    reviews: 145,
    inStock: true,
  },
  {
    id: 5,
    name: 'Professional Blender',
    price: 199.99,
    category: 'Home Appliances',
    image: 'https://images.pexels.com/photos/7936982/pexels-photo-7936982.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'High-powered blender for smoothies.',
    rating: 4.6,
    reviews: 178,
    inStock: true,
  },
  {
    id: 6,
    name: 'Smart Dishwasher',
    price: 899.99,
    category: 'Home Appliances',
    image: 'https://images.pexels.com/photos/3829560/pexels-photo-3829560.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Energy-efficient dishwasher.',
    rating: 4.4,
    reviews: 92,
    inStock: true,
  },
  // Storage Solutions
  {
    id: 7,
    name: 'Modular Kitchen Storage Set',
    price: 149.99,
    category: 'Storage Solutions',
    image: 'https://images.pexels.com/photos/6489104/pexels-photo-6489104.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Versatile storage solution.',
    rating: 4.3,
    reviews: 67,
    inStock: true,
  },
  {
    id: 9,
    name: 'Under-Sink Storage Unit',
    price: 79.99,
    category: 'Storage Solutions',
    image: 'https://media.istockphoto.com/id/1267081481/photo/modern-design-bathroom-sink-with-mirror-in-a-modern-residential-building-or-hotel.jpg?s=612x612&w=0&k=20&c=1FDPm3q6jX9lN7LwNK8BbIZnMWr-lkpc93VkMe6X-rE=',
    description: 'Space-saving storage solution.',
    rating: 4.2,
    reviews: 54,
    inStock: false,
  },
  // Smart Home
  {
    id: 10,
    name: 'Smart Home Hub',
    price: 199.99,
    category: 'Smart Home',
    image: 'https://images.pexels.com/photos/28940512/pexels-photo-28940512/free-photo-of-smart-home-devices-bulbs-cameras-hubs.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Central control hub for smart devices.',
    rating: 4.7,
    reviews: 234,
    inStock: true,
  },
  {
    id: 11,
    name: 'Smart Lighting System',
    price: 149.99,
    category: 'Smart Home',
    image: 'https://media.istockphoto.com/id/1345541604/photo/woman-controlling-the-lights-of-her-house-using-a-home-automation-system.jpg?s=612x612&w=0&k=20&c=OUJ6GbXbj2x372roEym9tcuty0cr3IGJM14JQCGXD20=',
    description: 'Automated lighting system.',
    rating: 4.5,
    reviews: 167,
    inStock: true,
  },
  {
    id: 12,
    name: 'Smart Security Camera',
    price: 129.99,
    category: 'Smart Home',
    image: 'https://images.pexels.com/photos/16423102/pexels-photo-16423102/free-photo-of-home-security-camera.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'HD security camera with motion detection.',
    rating: 4.6,
    reviews: 198,
    inStock: true,
  },
];

// Generate more products by duplicating and modifying existing ones
const generateMoreProducts = () => {
  const additionalProducts = [];
  const uniqueImages = [
    'https://images.pexels.com/photos/6214477/pexels-photo-6214477.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/29262961/pexels-photo-29262961/free-photo-of-modern-minimalist-kitchen-with-sleek-design.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5639249/pexels-photo-5639249.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7936982/pexels-photo-7936982.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3829560/pexels-photo-3829560.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6489104/pexels-photo-6489104.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  for (let i = 13; i <= 100; i++) {
    const baseProduct = mockProducts[(i - 1) % mockProducts.length];
    const imageIndex = (i - 13) % uniqueImages.length;
    additionalProducts.push({
      ...baseProduct,
      id: i,
      name: `${baseProduct.name} ${Math.floor(i / mockProducts.length) + 1}`,
      price: baseProduct.price + Math.floor(Math.random() * 50),
      image: uniqueImages[imageIndex],
      rating: (4 + Math.random()).toFixed(1),
      reviews: Math.floor(Math.random() * 200) + 20,
      inStock: Math.random() > 0.1,
    });
  }
  return [...mockProducts, ...additionalProducts];
};

const allProducts = generateMoreProducts();

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState(allProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    priceRange: 'all',
    sortBy: 'featured',
  });
  const { addToCart } = useCart();

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  useEffect(() => {
    let filteredProducts = [...allProducts];

    // Apply search filter
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (filters.category !== 'all') {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.toLowerCase().replace(' ', '-') === filters.category
      );
    }

    // Apply price range filter
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'price-low-high':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setProducts(filteredProducts);
  }, [filters, searchTerm]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    if (key === 'category') {
      setSearchParams({ category: value });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-md">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <FunnelIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Filters</span>
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`w-full lg:w-64 space-y-4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            {/* Clear Filters Button */}
            {(filters.category !== 'all' || filters.priceRange !== 'all') && (
              <button
                onClick={() => {
                  setFilters({ category: 'all', priceRange: 'all', sortBy: 'featured' });
                  setSearchParams({});
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
              >
                <XMarkIcon className="h-4 w-4" />
                <span className="text-sm font-medium">Clear Filters</span>
              </button>
            )}

            {/* Category Filter */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Category</h3>
              <div className="space-y-1">
                <button
                  onClick={() => handleFilterChange('category', 'all')}
                  className={`flex items-center justify-between w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    filters.category === 'all'
                      ? 'bg-teal-50 text-teal-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>All Categories</span>
                  {filters.category === 'all' && <ChevronRightIcon className="h-4 w-4" />}
                </button>
                {['Kitchen Tools', 'Home Appliances', 'Storage Solutions', 'Smart Home'].map(
                  (category) => (
                    <button
                      key={category}
                      onClick={() =>
                        handleFilterChange('category', category.toLowerCase().replace(' ', '-'))
                      }
                      className={`flex items-center justify-between w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        filters.category === category.toLowerCase().replace(' ', '-')
                          ? 'bg-teal-50 text-teal-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span>{category}</span>
                      {filters.category === category.toLowerCase().replace(' ', '-') && <ChevronRightIcon className="h-4 w-4" />}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Price Range</h3>
              <div className="space-y-1">
                {[
                  { label: 'All Prices', value: 'all' },
                  { label: 'Under $100', value: '0-100' },
                  { label: '$100 - $300', value: '100-300' },
                  { label: '$300 - $500', value: '300-500' },
                  { label: 'Over $500', value: '500-10000' },
                ].map((range) => (
                  <button
                    key={range.value}
                    onClick={() => handleFilterChange('priceRange', range.value)}
                    className={`flex items-center justify-between w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      filters.priceRange === range.value
                        ? 'bg-teal-50 text-teal-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{range.label}</span>
                    {filters.priceRange === range.value && <ChevronRightIcon className="h-4 w-4" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold text-gray-900">{products.length}</span> products
              </p>
              <select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="block w-48 rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 bg-white text-sm py-2"
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>

            {products.length === 0 ? (
              <div className="col-span-full flex flex-col items-center justify-center py-16">
                <div className="text-center">
                  <svg
                    className="mx-auto h-24 w-24 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">No products found</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                  <button
                    onClick={() => {
                      setFilters({ category: 'all', priceRange: 'all', sortBy: 'featured' });
                      setSearchTerm('');
                      setSearchParams({});
                    }}
                    className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-teal-600 hover:bg-teal-700"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300 flex flex-col"
                >
                  <div className="relative">
                    <Link to={`/products/${product.id}`} className="block">
                      <div className="aspect-square w-full overflow-hidden bg-gray-50 p-6">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                    
                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 z-10"
                    >
                      {wishlist.includes(product.id) ? (
                        <HeartIconSolid className="h-5 w-5 text-red-500" />
                      ) : (
                        <HeartIcon className="h-5 w-5 text-gray-600" />
                      )}
                    </button>

                    {/* Stock Badge */}
                    {!product.inStock && (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                        Out of Stock
                      </div>
                    )}
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <Link to={`/products/${product.id}`}>
                      <h3 className="text-base font-semibold text-gray-900 hover:text-teal-600 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-gray-500 line-clamp-2">{product.description}</p>
                    
                    <div className="mt-auto pt-4">
                      <p className="text-lg font-bold text-gray-900 mb-3">
                        ${product.price.toFixed(2)}
                      </p>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          if (product.inStock) {
                            handleAddToCart(product);
                          }
                        }}
                        disabled={!product.inStock}
                        className={`w-full inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg transition-colors duration-200 ${
                          product.inStock
                            ? 'text-white bg-teal-600 hover:bg-teal-700'
                            : 'text-gray-400 bg-gray-200 cursor-not-allowed'
                        }`}
                      >
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
