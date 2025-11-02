import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | Print Queen 3D",
  description: "View our portfolio of custom 3D printed products, NFC payment stands, QR displays, and branded keychains for businesses in Los Angeles.",
}

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: "Modern Cafe NFC Stand",
      client: "Brew & Beans Cafe",
      category: "NFC Payment Stand",
      description: "Custom cyan and white NFC payment stand with logo engraving for seamless customer checkout.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop",
    },
    {
      title: "Boutique QR Display",
      client: "Fashion Forward Boutique",
      category: "QR Code Display",
      description: "Elegant QR code stand for product information and Instagram integration.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop",
    },
    {
      title: "Corporate Event Keychains",
      client: "Tech Summit 2024",
      category: "NFC Keychains",
      description: "500 custom NFC keychains with company branding for conference attendees.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    },
    {
      title: "Restaurant Table Stands",
      client: "Sunset Bistro",
      category: "NFC Payment Stand",
      description: "Set of 20 branded NFC stands for tableside ordering and payment.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
    },
    {
      title: "Retail Pop-Up Display",
      client: "Urban Street Market",
      category: "QR Code Display",
      description: "Portable QR displays for vendor payment and product catalogs.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop",
    },
    {
      title: "Gym Membership Cards",
      client: "FitLife Gym",
      category: "NFC Keychains",
      description: "Custom NFC membership keychains with access control integration.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Print Queen 3D has helped businesses across Los Angeles elevate their brand with custom 3D printed solutions
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-display font-bold text-brand-cyan mb-2">200+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-brand-cyan mb-2">150+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-brand-cyan mb-2">24hr</div>
              <div className="text-gray-600">Avg. Turnaround</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-brand-cyan mb-2">100%</div>
              <div className="text-gray-600">Made in LA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-brand-cyan text-brand-navy px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{item.title}</h3>
                  <p className="text-brand-cyan font-semibold text-sm mb-3">{item.client}</p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-brand-navy text-center mb-12">
            Before & After
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Example 1 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="mb-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">BEFORE</span>
              </div>
              <div className="bg-white rounded-lg p-8 mb-4">
                <p className="text-gray-600 italic">"Basic generic payment setup with no branding, causing confusion at checkout"</p>
              </div>
              <div className="mb-4 mt-8">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">AFTER</span>
              </div>
              <div className="bg-gradient-to-br from-brand-cyan/10 to-brand-navy/10 rounded-lg p-8 border-2 border-brand-cyan">
                <p className="text-brand-navy font-semibold">"Custom NFC stand with logo perfectly matches our brand. Checkout time reduced by 40%!"</p>
                <p className="text-sm text-gray-600 mt-2">— Coffee Shop Owner, Downtown LA</p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="mb-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">BEFORE</span>
              </div>
              <div className="bg-white rounded-lg p-8 mb-4">
                <p className="text-gray-600 italic">"Printed paper QR codes that looked unprofessional and got damaged easily"</p>
              </div>
              <div className="mb-4 mt-8">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">AFTER</span>
              </div>
              <div className="bg-gradient-to-br from-brand-cyan/10 to-brand-navy/10 rounded-lg p-8 border-2 border-brand-cyan">
                <p className="text-brand-navy font-semibold">"Durable QR displays that look amazing and withstand heavy use at our pop-ups!"</p>
                <p className="text-sm text-gray-600 mt-2">— Event Coordinator, Santa Monica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand-navy to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 150+ Los Angeles businesses who trust Print Queen 3D for their custom printing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/us/quote"
              className="bg-brand-cyan hover:bg-brand-neon text-brand-navy font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Request a Quote
            </a>
            <a
              href="/us/store"
              className="bg-transparent border-2 border-brand-cyan hover:bg-brand-cyan/10 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Shop Products
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
