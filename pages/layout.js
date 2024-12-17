import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(segment => segment);
  const [productTitle, setProductTitle] = useState('');

  useEffect(() => {
    // Check if the last segment is a product ID and fetch the product title
    const lastSegment = pathSegments[pathSegments.length - 1];
    if (lastSegment && !isNaN(lastSegment)) { // Assuming product IDs are numeric
      fetch(`https://dummyjson.com/products/${lastSegment}`)
        .then(res => res.json())
        .then(data => setProductTitle(data.title))
        .catch(error => console.error('Error fetching product title:', error));
    }
  }, [pathSegments]);
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Header with Navigation */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-semibold">My Website</h1>
          <button 
            className="block md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <Link href="#" className="hover:text-gray-600">About</Link>
            <Link href="#" className="hover:text-gray-600">Contact</Link>
          </nav>
        </div>
      </header>

 <aside className={`fixed inset-0 bg-white z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-4 mt-8">
          <Link href="/" className="hover:text-gray-600 text-lg">Home</Link>
          <Link href="#" className="hover:text-gray-600 text-lg">About</Link>
          <Link href="#" className="hover:text-gray-600 text-lg">Contact</Link>
        </nav>
      </aside>

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto p-3">
          <ol className="list-reset flex text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            {pathSegments.map((segment, index) => {
              const href = '/' + pathSegments.slice(0, index + 1).join('/');
              const isLast = index === pathSegments.length - 1;

              // Use the product title if this is the last segment and a product title is available
              const title = isLast && productTitle

              return (
                <li key={index} className="flex items-center">
                  <span className="mx-2">/</span>
                  {isLast ? (
                    <span className="text-gray-700">{title}</span>
                  ) : (
                    <Link href={href} className="hover:text-gray-700">
                      {title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="container mx-auto p-4 text-center">
          <ul className="flex justify-center space-x-4 text-sm">
            <li><Link href="#" className="hover:text-gray-600">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-gray-600">Terms of Service</Link></li>
          </ul>
          <p className="mt-4 text-xs text-gray-500">&copy; 2023 My Website</p>
        </div>
      </footer>
    </div>
  );
}