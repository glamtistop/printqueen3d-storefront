import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us | Print Queen 3D",
  description: "Learn about Print Queen 3D - Los Angeles-based custom 3D printing experts specializing in NFC solutions and branded business products.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">About Print Queen 3D</h1>
          <p className="text-xl text-gray-300">
            Precision engineering meets stylish design in the heart of Los Angeles
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Print Queen 3D delivers fast, high-quality 3D-printed business solutions with precision engineering and expert finishing. Based in Los Angeles, we specialize in NFC-enabled tools that enhance customer experience, streamline payments, and elevate brand identity.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              We combine smart tech with stylish design — because your brand deserves to stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-brand-navy text-center mb-12">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-brand-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-navy mb-3">Speed</h3>
              <p className="text-gray-600">
                Fast turnaround times without compromising quality. Most projects completed within 24-48 hours.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-brand-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-navy mb-3">Precision</h3>
              <p className="text-gray-600">
                State-of-the-art 3D printing technology ensuring every detail meets professional standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-brand-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-navy mb-3">Service</h3>
              <p className="text-gray-600">
                Personalized support from design consultation to final delivery. Your success is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-brand-navy mb-6">Cutting-Edge Technology</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-cyan rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">NFC Integration</h3>
                    <p className="text-gray-600">Seamless NFC chip integration for contactless payments and access control</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-cyan rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">QR Code Customization</h3>
                    <p className="text-gray-600">Branded QR codes with custom colors, logos, and error correction</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-cyan rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">Premium Materials</h3>
                    <p className="text-gray-600">Durable PLA, PETG, and specialty filaments for lasting quality</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-cyan rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">Expert Finishing</h3>
                    <p className="text-gray-600">Professional post-processing for a polished, production-ready result</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-cyan/10 to-brand-navy/10 rounded-lg p-8 border-2 border-brand-cyan/30">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-display font-bold text-brand-cyan mb-2">24hr</div>
                  <div className="text-gray-700">Average turnaround time</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-brand-cyan mb-2">200+</div>
                  <div className="text-gray-700">Projects completed</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-brand-cyan mb-2">150+</div>
                  <div className="text-gray-700">Happy clients</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-brand-cyan mb-2">100%</div>
                  <div className="text-gray-700">Made in Los Angeles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-brand-navy text-center mb-12">Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="font-display font-bold text-brand-navy mb-2">Retail Stores</h3>
              <p className="text-sm text-gray-600">NFC payment solutions and branded displays</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="font-display font-bold text-brand-navy mb-2">Restaurants & Cafes</h3>
              <p className="text-sm text-gray-600">Table stands and QR menu displays</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎪</div>
              <h3 className="font-display font-bold text-brand-navy mb-2">Events & Pop-Ups</h3>
              <p className="text-sm text-gray-600">Portable payment and information displays</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="font-display font-bold text-brand-navy mb-2">Corporate Offices</h3>
              <p className="text-sm text-gray-600">Branded keychains and access solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-brand-navy mb-6">Based in Los Angeles</h2>
          <p className="text-xl text-gray-600 mb-8">
            Proudly serving businesses across the greater Los Angeles area with local pickup and fast delivery options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-gray-600">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Los Angeles, CA</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:printqueen3d@gmail.com" className="hover:text-brand-cyan">printqueen3d@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand-navy to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's bring your custom 3D printing project to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/us/quote"
              className="bg-brand-cyan hover:bg-brand-neon text-brand-navy font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Request a Quote
            </Link>
            <Link
              href="/us/portfolio"
              className="bg-transparent border-2 border-brand-cyan hover:bg-brand-cyan/10 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
