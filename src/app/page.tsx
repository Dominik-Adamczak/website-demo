// import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-gray-900">
                Studio
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
                  About
                </a>
                <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
                  Services
                </a>
                <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
                  Portfolio
                </a>
                <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
                  Contact
                </a>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-900 hover:text-gray-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Our Studio
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Creating beautiful experiences through innovative design and development
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Our Work
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are passionate about creating exceptional digital experiences that combine 
                beautiful design with cutting-edge technology. Our team specializes in web 
                development, UI/UX design, and digital strategy.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Every project we undertake is approached with creativity, attention to detail, 
                and a commitment to delivering results that exceed expectations.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Learn More
              </button>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg flex items-center justify-center">
              <div className="text-gray-600 text-lg font-medium">About Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of services to help bring your vision to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-black rounded-lg mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600">
                Custom websites and web applications built with modern technologies and best practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-black rounded-lg mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">UI/UX Design</h3>
              <p className="text-gray-600">
                User-centered design solutions that create intuitive and engaging experiences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-black rounded-lg mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Strategy</h3>
              <p className="text-gray-600">
                Strategic planning and consultation to help your business succeed online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of our recent work and creative projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative h-64 overflow-hidden rounded-lg bg-gradient-to-br from-blue-200 to-purple-300 flex items-center justify-center">
                  <div className="text-gray-700 font-medium">Portfolio {item}</div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                      <p className="text-sm">View Details</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold mb-4">Studio</div>
              <p className="text-gray-400 mb-6 max-w-md">
                We create exceptional digital experiences through innovative design and development. 
                Let&apos;s work together to bring your vision to life.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Strategy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>hello@studio.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Design Street</li>
                <li>Creative City, CC 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
