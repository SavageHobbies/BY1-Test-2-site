import Link from 'next/link';

    const Navbar = () => {
      return (
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="text-2xl font-bold text-gray-800">
                    BY1.net
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                <Link href="/partners" className="text-gray-600 hover:text-gray-900">Partners</Link>
                <Link href="/roi-calculator" className="text-gray-600 hover:text-gray-900">ROI Calculator</Link>
              </div>
            </div>
          </div>
        </nav>
      );
    };

    export default Navbar;
