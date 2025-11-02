import { Metadata } from "next"
import { getRegion } from "@lib/data/regions"
import { listProducts } from "@lib/data/products"
import ProductPreview from "@modules/products/components/product-preview"
import { HttpTypes } from "@medusajs/types"

export const metadata: Metadata = {
  title: "Shop | Print Queen 3D",
  description: "Browse our NFC and 3D printed products for your business.",
}

export default async function StorePage(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params
  
  const region = await getRegion(countryCode)
  
  if (!region) {
    return null
  }

  // Get all products
  const { response } = await listProducts({
    queryParams: {
      limit: 100,
    },
    countryCode,
  })

  const products = response.products || []

  return (
    <div className="py-16 bg-gradient-to-br from-white via-brand-cream to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-brand-green via-brand-cyan to-brand-blue bg-clip-text text-transparent">
              Explore our collections
            </span>
          </h1>
          <p className="text-xl text-gray-700">Business tools to fun custom creations—everything is made to order in Los Angeles with premium materials.</p>
        </div>

        {/* Products Grid - 2 on mobile, 6 on desktop like homepage */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4">
            {products.map((product: HttpTypes.StoreProduct) => (
              <ProductPreview 
                key={product.id} 
                product={product} 
                region={region}
                isFeatured
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No Products Yet</h3>
            <p className="text-gray-500 mb-8">Products will appear here once you add them in Medusa Admin</p>
          </div>
        )}

        {/* Product Count */}
        {products.length > 0 && (
          <div className="mt-8 text-center text-gray-600">
            Showing {products.length} product{products.length !== 1 ? 's' : ''}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 text-center border-4 border-brand-pink shadow-2xl">
          <div className="text-6xl mb-4">✨</div>
          <h2 className="font-display text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-brand-pink via-brand-orange to-brand-yellow bg-clip-text text-transparent">
              Have an idea?
            </span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            We'll design it and print it—props, signage, awards, replacement parts, one-of-a-kind gifts. Email your concept and we'll quote fast with clear steps and turnaround.
          </p>
          <a
            href={`/${countryCode}/quote`}
            className="inline-block bg-gradient-to-r from-brand-pink to-brand-orange hover:from-brand-orange hover:to-brand-pink text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            Request a Quote →
          </a>
        </div>
      </div>
    </div>
  )
}
