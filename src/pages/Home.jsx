import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShoppingBagIcon, 
  TruckIcon, 
  ShieldCheckIcon, 
  ArrowPathIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const features = [
    {
      name: 'Free Shipping',
      description: 'Free shipping on all orders over $50',
      icon: TruckIcon,
    },
    {
      name: 'Secure Payment',
      description: 'Your payment information is secure',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Easy Returns',
      description: '30-day money back guarantee',
      icon: ArrowPathIcon,
    },
  ];

  const categories = [
    {
      name: 'Kitchen Tools',
      image: 'https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Essential tools for modern cooking',
    },
    {
      name: 'Home Equipment',
      image: 'https://media.istockphoto.com/id/1211554164/photo/3d-render-of-home-appliances-collection-set.jpg?b=1&s=612x612&w=0&k=20&c=gkgvbE0sGmNs5xOWBlfhEXPENF2tqXzG2k5_svFAwLw=',
      description: 'Upgrade your home with smart appliances',
    },
    {
      name: 'Smart Appliances',
      image: 'https://images.pexels.com/photos/29262961/pexels-photo-29262961/free-photo-of-modern-minimalist-kitchen-with-sleek-design.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Intelligent solutions for modern living',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full object-cover"
            style={{ filter: 'brightness(0.6)' }}
          >
            <source src="https://videos.pexels.com/video-files/3773486/3773486-sd_640_360_30fps.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Transform Your Home
              </h1>
              <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Discover our collection of modern kitchen tools and advanced home equipment.
                Quality products for a better living experience.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <ShoppingBagIcon className="h-5 w-5 mr-2" />
                  Shop Now
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary-600 transition-colors duration-300"
                >
                  Learn More
                  <ChevronRightIcon className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              We're committed to providing the best shopping experience for our customers.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary-50 rounded-full">
                    <feature.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.name}</h3>
                  <p className="mt-3 text-base text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Shop by Category
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Browse our wide selection of products by category.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-center object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex flex-col items-center justify-end p-8 transition-all duration-300 group-hover:from-black/80 group-hover:to-black/40">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-200 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                  <Link
                    to={`/products?category=${category.name.toLowerCase().replace(' ', '-')}`}
                    className="mt-4 inline-flex items-center text-white hover:text-primary-300 transition-colors duration-300"
                  >
                    Shop Now
                    <ChevronRightIcon className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Sign up for our newsletter
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-primary-100">
                Stay updated with our latest products and exclusive offers.
              </p>
            </motion.div>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sm:flex"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-700 focus:ring-white transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
} 