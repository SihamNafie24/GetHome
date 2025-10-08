import { motion } from 'framer-motion';
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  SparklesIcon, 
  UserGroupIcon,
  TrophyIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';

export default function About() {
  const features = [
    {
      name: 'Quality First',
      description: 'We source only the highest quality products that meet our strict standards.',
      icon: SparklesIcon,
    },
    {
      name: 'Customer Satisfaction',
      description: 'Your happiness is our priority. We go above and beyond to ensure you love your purchase.',
      icon: HeartIcon,
    },
    {
      name: 'Secure Shopping',
      description: 'Shop with confidence knowing your data is protected with industry-leading security.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Expert Support',
      description: 'Our team of experts is always ready to help you find the perfect products.',
      icon: UserGroupIcon,
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: '/images/team/Sarah Johnson.png',
      bio: 'With over 15 years of experience in home goods retail, Sarah founded GetHome with a vision to make quality home products accessible to everyone.',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Product',
      image: '/images/team/Michael Chen .png',
      bio: 'Michael brings his expertise in product development and quality control to ensure every item meets our high standards.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Experience',
      image: '/images/team/Emily Rodriguez.png',
      bio: 'Emily leads our customer service team, ensuring every customer receives exceptional support and care.',
    },
    {
      name: 'David Kim',
      role: 'Operations Director',
      image: '/images/team/David Kim.png',
      bio: 'David oversees our logistics and operations, making sure your orders are processed and delivered efficiently.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="/images/about-hero.jpg"
            alt="About GetHome"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transforming Houses Into Homes
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              We're on a mission to deliver innovative, high-quality home products that enhance everyday living. Discover the GetHome difference.
            </p>
            <div className="mt-10 flex gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white">10K+</div>
                <div className="text-sm text-gray-300 mt-1">Happy Customers</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-300 mt-1">Products</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white">4.8★</div>
                <div className="text-sm text-gray-300 mt-1">Rating</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <SparklesIcon className="h-5 w-5 mr-2" />
              Our Journey
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Founded in 2020, GetHome began with a simple yet powerful idea: everyone deserves access to high-quality home products that make life easier and more enjoyable. What started as a small online store has grown into a trusted destination for modern home essentials.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Today, we're proud to serve thousands of customers across the country, offering carefully curated products that combine functionality, style, and quality. Our commitment to customer satisfaction and product excellence remains at the heart of everything we do.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-2">
                <CheckBadgeIcon className="h-6 w-6 text-primary-600" />
                <span className="text-sm font-medium text-gray-700">Verified Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <TrophyIcon className="h-6 w-6 text-primary-600" />
                <span className="text-sm font-medium text-gray-700">Award Winning</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 lg:mt-0"
          >
            <div className="relative">
              <img
                className="rounded-2xl shadow-2xl"
                src="/images/about-story.jpg"
                alt="Our story"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <RocketLaunchIcon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">3+</div>
                    <div className="text-sm text-gray-500">Years Growing</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose GetHome
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We're committed to providing the best shopping experience for our customers.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div>
                  <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.name}</h3>
                  <p className="mt-3 text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            The passionate people behind GetHome.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <img
                  className="mx-auto h-48 w-48 rounded-full object-cover border-4 border-white shadow-xl relative z-10"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-sm font-semibold text-primary-600 mt-1">{member.role}</p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed px-2">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-md border border-primary-100"
            >
              <div className="bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <SparklesIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Quality</h3>
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                We never compromise on quality. Every product we offer meets our high standards for durability, functionality, and design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-md border border-purple-100"
            >
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <RocketLaunchIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                We constantly seek out new and innovative products that can improve our customers' lives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-md border border-green-100"
            >
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <GlobeAltIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Sustainability</h3>
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                We're committed to reducing our environmental impact and promoting sustainable practices throughout our business.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 