import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head'; // Import Head for SEO
import Filters from './filters';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=30')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-16">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">Error: {error.message}</div>;
  }

  return (
    <>
   <Head>
    <title>Shop Luxe Slime Beauty for premium beauty products</title>
    <meta name="description" content="Shop Luxe Slime Beauty for premium beauty products. Find makeup, skincare, and accessories that elevate your beauty routine with high-quality essentials." />
    <meta property="og:title" content="Luxe Slime Beauty Products" />
    <meta property="og:description" content="Explore Luxe Slime Beauty's curated selection of makeup, skincare, and accessories that help you enhance your beauty routine with top-quality products." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yourwebsite.com/products" />
    <meta property="og:image" content="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png" />
    <meta property="og:site_name" content="Luxe Slime Beauty" />
    <meta property="og:locale" content="en_US" />
    <link rel="canonical" href="https://yourwebsite.com/products" />
    <meta name="robots" content="index, follow" />
</Head> 
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <Filters products={products} setProducts={setProducts}/>
        <h2 className="sr-only">Products</h2>
  
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={`/${product.id}`} className="group">
              <img
                alt={product.title}
                src={product.thumbnail}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}