'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                width={120}
                height={120}
                alt="Logo"
                src="/images/logo.png"
              />
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
                >
                  About Us
                </a>
                <a
                  href="#services"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
                >
                  Our Services
                </a>
                <a
                  href="#contact"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                GET A FREE QUOTE
              </button>
              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-900 hover:text-gray-600"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu dropdown */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-gray-100 shadow-lg">
              <div className="space-y-1">
                <a
                  href="#"
                  className="text-gray-900 hover:text-yellow-600 hover:bg-gray-50 block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-yellow-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                  </div>
                </a>
                <a
                  href="#about"
                  className="text-gray-900 hover:text-yellow-600 hover:bg-gray-50 block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-yellow-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    About Us
                  </div>
                </a>
                <a
                  href="#services"
                  className="text-gray-900 hover:text-yellow-600 hover:bg-gray-50 block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-yellow-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Our Services
                  </div>
                </a>
                <a
                  href="#contact"
                  className="text-gray-900 hover:text-yellow-600 hover:bg-gray-50 block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-yellow-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Building Software that Scales With You
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We build software that transforms ideas into powerful, scalable
            products fast and simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors text-center"
            >
              ABOUT US
            </a>
            <a
              href="#services"
              className="border border-gray-300 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              OUR SERVICES
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              fill
              alt="Hands on keyboard - Building the future"
              src="/images/hands_on_keyboard.png"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section - Who we are */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  fill
                  alt="👥"
                  src="/images/discussion.png"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-yellow-600 mb-2">
                ABOUT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who we are
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We&apos;re more than just a development agency. We&apos;re builders,
                innovators, dreamers.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began with developing our own product, and along the
                way, we realized businesses needed to outsource tech partner who
                understands both the startup hustle and the enterprise scale.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we help startups and enterprises bring their ideas to
                life whether it&apos;s launching an MVP or optimizing existing
                software. Our focus is always on quality, performance, and user
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Innovation at speed
              </h3>
              <p className="text-gray-600 text-sm">
                We leverage cutting-edge technologies and agile methodologies to
                deliver robust solutions rapidly, ensuring your business stays
                ahead of market demands and competitive pressures.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Simplicity in solutions
              </h3>
              <p className="text-gray-600 text-sm">
                We believe in elegant, streamlined solutions that eliminate
                complexity while maximizing efficiency, making technology
                accessible and manageable for your organization.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Long-term partnerships
              </h3>
              <p className="text-gray-600 text-sm">
                We invest in building lasting relationships with our clients,
                providing ongoing support, strategic guidance, and scalable
                solutions that evolve with your business growth.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Security & trust
              </h3>
              <p className="text-gray-600 text-sm">
                We implement enterprise-grade security protocols and maintain
                the highest standards of data protection, ensuring your business
                operations remain secure and compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-sm font-semibold text-yellow-600 mb-2">
              WHAT WE DO
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Services
            </h2>
            <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              VIEW ALL
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
              <div className="h-48 bg-gradient-to-br from-orange-200 to-orange-400 flex items-center justify-center relative">
                <Image
                  fill
                  alt="Custom Software Development"
                  src="/images/development.png"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Custom Software Development
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Tailored software solutions designed to meet your specific
                  business requirements, from enterprise applications to
                  scalable web platforms.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
              <div className="h-48 bg-gradient-to-br from-blue-200 to-blue-600 flex items-center justify-center relative">
                <Image
                  fill
                  alt="System Integration & Optimization"
                  src="/images/system.png"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  System Integration & Optimization
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Seamlessly integrate existing systems and optimize performance
                  to enhance operational efficiency and reduce technical debt.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
              <div className="h-48 bg-gradient-to-br from-red-200 to-red-600 flex items-center justify-center relative">
                <Image
                  fill
                  alt="Strategic Technology Consulting"
                  src="/images/consulting.png"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Strategic Technology Consulting
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Expert guidance on technology strategy, digital
                  transformation, and architectural decisions to align IT
                  initiatives with business objectives.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
              <div className="h-48 bg-gradient-to-br from-purple-200 to-purple-600 flex items-center justify-center relative">
                <Image
                  fill
                  alt="Digital Transformation & Innovation"
                  src="/images/transformation.png"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Digital Transformation & Innovation
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Accelerate your digital journey with modern technologies,
                  cloud migration, and innovative solutions that drive
                  competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-gray-800 to-gray-600 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 py-16 px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let&apos;s Create Something Extraordinary Together
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              For us, it&apos;s about understanding your vision, ensuring your
              problems and creating amazing solutions that grow with you. Let&apos;s
              build something meaningful together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                CONTACT US
              </a>
              <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors flex items-center justify-center">
                GET A FREE QUOTE
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            <div>
              <div className="text-sm font-semibold text-yellow-600 mb-2">
                CONTACT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to transform your business with innovative technology solutions?
                We&apos;d love to hear about your project and discuss how we can help you
                achieve your goals. Get in touch with us today.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 text-yellow-600">📧</div>
                  <span className="text-gray-900">derek@startonidea.co</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 text-yellow-600">📞</div>
                  <span className="text-gray-900">+1 (608) 358-0180</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 text-yellow-600">📍</div>
                  <span className="text-gray-900">
                    12709 Tanglewood Dr, Urbandale, IA 50323
                  </span>
                </div>
              </div>

              {/* Google Map */}
              <div className="h-124 rounded-lg overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.123456789!2d-93.7123456!3d41.6234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee99123456789a%3A0x123456789abcdef0!2s12709%20Tanglewood%20Dr%2C%20Urbandale%2C%20IA%2050323%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location - 12709 Tanglewood Dr, Urbandale, IA 50323"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center space-x-4 mb-8">
              <a
                href="#services"
                className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                OUR SERVICES
              </a>
              <a
                href="#about"
                className="border border-white text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors"
              >
                ABOUT US
              </a>
            </div>
            <div className="flex justify-center space-x-8 mb-8 text-sm">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-yellow-400 transition-colors">
                About Us
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Book a Demo
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright © STARTONIDEA. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/startonide32360"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/start-on-idea/about/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
