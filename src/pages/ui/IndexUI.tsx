import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { Search, Sparkles, Recycle, Heart, ShieldCheck, Leaf } from 'lucide-react';

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section - Buy & Sell */}
      <section className="relative bg-gradient-to-br from-vintage-blue/10 via-vintage-yellow/10 to-vintage-blue/5 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-vintage-yellow/20 px-4 py-2 rounded-full">
                <Recycle className="h-4 w-4 text-vintage-blue" />
                <span className="text-sm font-medium text-vintage-dark">Sustainable Fashion</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-vintage-dark leading-tight">
                Buy vintage
              </h1>
              
              <p className="text-lg text-gray-600 max-w-xl">
                Discover curated secondhand fashion that's unique, sustainable, and timeless. 
                Every piece has a story—make it yours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-vintage-blue hover:bg-vintage-blue/90 text-white font-semibold px-8"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Explore Finds
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-vintage-dark text-vintage-dark hover:bg-vintage-dark hover:text-white font-semibold px-8"
                >
                  Sell Your Items
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-vintage-blue" />
                  <span className="text-sm text-gray-600">Authenticated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-vintage-blue" />
                  <span className="text-sm text-gray-600">Sustainable</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-vintage-blue" />
                  <span className="text-sm text-gray-600">Curated</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop" 
                  alt="Vintage denim"
                  className="rounded-lg vintage-shadow w-full h-64 object-cover vintage-card-hover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop" 
                  alt="Designer jacket"
                  className="rounded-lg vintage-shadow w-full h-64 object-cover vintage-card-hover mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="outline" 
                className="border-vintage-blue text-vintage-blue hover:bg-vintage-blue hover:text-white"
              >
                All Brands
              </Button>
              <Button variant="outline">Levi's</Button>
              <Button variant="outline">Designer</Button>
              <Button variant="outline">Vintage</Button>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="outline"
                className="border-vintage-yellow text-vintage-dark hover:bg-vintage-yellow"
              >
                Excellent
              </Button>
              <Button variant="outline">Good</Button>
              <Button variant="outline">Fair</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-white to-vintage-blue/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-vintage-dark mb-4">
                Real collections
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Handpicked vintage pieces organized by style, era, and vibe
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-vintage-dark mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Collection'}` 
                  : 'Featured Vintage Finds'
                }
              </h2>
              <p className="text-gray-600">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.description
                  : 'One-of-a-kind pieces waiting for their next chapter'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="border-vintage-blue text-vintage-blue hover:bg-vintage-blue hover:text-white"
              >
                See All Items
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gray-100 rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Sparkles className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                No items available in this collection yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Care Guide Section */}
      <section className="py-16 bg-vintage-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Vintage Care Guide
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Keep your vintage treasures looking their best with our expert care tips. 
                Sustainable fashion means making pieces last.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-vintage-blue rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Gentle Washing</h3>
                    <p className="text-gray-400">Hand wash or use delicate cycle for vintage fabrics</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-vintage-yellow text-vintage-dark rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Air Dry</h3>
                    <p className="text-gray-400">Skip the dryer to preserve fabric integrity</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-vintage-blue rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Store Properly</h3>
                    <p className="text-gray-400">Use padded hangers and breathable garment bags</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="mt-8 bg-vintage-yellow text-vintage-dark hover:bg-vintage-yellow/90 font-semibold"
              >
                Read Full Guide
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=700&fit=crop" 
                alt="Vintage clothing care"
                className="rounded-lg vintage-shadow w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-vintage-blue to-vintage-blue/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-16 w-16 mx-auto mb-6 text-vintage-yellow" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Explore?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of vintage lovers finding unique pieces that tell a story. 
            Start your sustainable fashion journey today.
          </p>
          <Button 
            size="lg" 
            className="bg-vintage-yellow text-vintage-dark hover:bg-vintage-yellow/90 font-semibold px-12 text-lg"
          >
            Explore All Finds
          </Button>
        </div>
      </section>

      <NewsletterSection />
      <FloatingCart />
    </EcommerceTemplate>
  );
};