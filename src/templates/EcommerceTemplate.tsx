import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Recycle } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 bg-white border-b ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-vintage-blue rounded-full flex items-center justify-center">
                <Recycle className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-vintage-dark">ReVintage</div>
                <div className="text-xs text-gray-500">Secondhand Fashion</div>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-vintage-dark hover:text-vintage-blue transition-colors font-medium"
              >
                Shop
              </Link>
              <Link 
                to="/blog" 
                className="text-vintage-dark hover:text-vintage-blue transition-colors font-medium"
              >
                Stories
              </Link>
              <Link 
                to="#" 
                className="text-vintage-dark hover:text-vintage-blue transition-colors font-medium"
              >
                Sell
              </Link>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative hover:bg-vintage-blue/10"
                aria-label="View cart"
              >
                <ShoppingCart className="h-5 w-5 text-vintage-dark" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-vintage-blue text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-vintage-dark">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-vintage-dark text-white py-12 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-vintage-blue rounded-full flex items-center justify-center">
                <Recycle className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">ReVintage</div>
                <div className="text-xs text-gray-400">Secondhand Fashion</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm">
              Curated vintage and secondhand fashion for the conscious consumer. 
              Every piece tells a story, every purchase makes a difference.
            </p>
            <SocialLinks />
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Shop</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                All Items
              </Link>
              <Link 
                to="#" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                New Arrivals
              </Link>
              <Link 
                to="#" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Collections
              </Link>
              <Link 
                to="#" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Sale
              </Link>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4 text-white">About</h3>
            <div className="space-y-2">
              <Link 
                to="/blog" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Our Story
              </Link>
              <Link 
                to="#" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Sustainability
              </Link>
              <Link 
                to="#" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Care Guide
              </Link>
              <Link 
                to="#" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; 2024 ReVintage. Sustainable fashion, timeless style.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms</Link>
            <Link to="#" className="hover:text-white transition-colors">Shipping</Link>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}