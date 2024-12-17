import { useEffect, useState } from 'react';
import Layout from '../layout';
import Head from 'next/head';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return {
    props: { product },
  };
}

export default function ProductDetailPage({ product }) {
  const [clientSideReviews, setClientSideReviews] = useState([]);

  useEffect(() => {
    // Move any client-specific logic here
    setClientSideReviews(product.reviews.map(review => ({
      ...review,
      formattedDate: new Date(review.date).toLocaleDateString()
    })));
  }, [product.reviews]);

  return (
    <Layout>
      <Head>
        <title>{product.title} - Your Store Name</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={`${product.title} - Your Store Name`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://yourwebsite.com/products/${product.id}`} />
        <meta property="og:image" content={product.thumbnail} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://yourwebsite.com/products/${product.id}`} />
      </Head>
      <div className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="lg:w-1/2">
            <img src={product.thumbnail} alt={product.title} className="w-full h-auto object-cover" />
            <div className="flex mt-4 space-x-2 px-4">
              {product.images.map((image, index) => (
                <img key={index} src={image} alt={`Product image ${index + 1}`} className="w-20 h-20 object-cover rounded-md border border-gray-200" />
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-8 p-4">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">{product.title}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className="text-2xl font-semibold mb-4 text-green-600">${product.price.toFixed(2)}</p>
            <div className="text-sm text-gray-500 space-y-2">
              <p>Category: <span className="text-gray-700">{product.category}</span></p>
              <p>Brand: <span className="text-gray-700">{product.brand}</span></p>
              <p>SKU: <span className="text-gray-700">{product.sku}</span></p>
              <p>Availability: <span className="text-gray-700">{product.availabilityStatus}</span></p>
              <p>Warranty: <span className="text-gray-700">{product.warrantyInformation}</span></p>
              <p>Shipping: <span className="text-gray-700">{product.shippingInformation}</span></p>
              <p>Return Policy: <span className="text-gray-700">{product.returnPolicy}</span></p>
              <p>Minimum Order Quantity: <span className="text-gray-700">{product.minimumOrderQuantity}</span></p>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Reviews</h2>
              {clientSideReviews.map((review, index) => (
                <div key={index} className="mb-4 p-4 border rounded-md shadow-sm bg-gray-50">
                  <p className="text-sm text-gray-600">Rating: <span className="font-semibold">{review.rating} / 5</span></p>
                  <p className="text-sm text-gray-600">Comment: <span className="italic">{review.comment}</span></p>
                  <p className="text-sm text-gray-600">Reviewer: <span className="font-semibold">{review.reviewerName}</span></p>
                  <p className="text-sm text-gray-600">Date: <span className="font-semibold">{review.formattedDate}</span></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}