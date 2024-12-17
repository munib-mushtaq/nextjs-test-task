import { useState, useEffect } from 'react';

export default function Filters({ products, setProducts }) {
    const [initialProducts] = useState(products); // Store initial products
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');

    useEffect(() => {
        let filteredProducts = initialProducts;

        // Only filter if searchTerm is not empty
        if (searchTerm) {
            filteredProducts = filteredProducts.filter(product => 
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Apply sorting if a filter is selected
         // Apply sorting if a filter is selected
         if (selectedFilter) {
            filteredProducts = [...filteredProducts].sort((a, b) => {
                if (selectedFilter === 'priceLowToHigh') {
                    return a.price - b.price;
                } else if (selectedFilter === 'title') {
                    return a.title.localeCompare(b.title);
                }
                return 0;
            });
        }

        setProducts(filteredProducts);
    }, [searchTerm, selectedFilter, initialProducts, setProducts]);

    return (
        <div className="p-4">
            <div className="flex justify-end items-center mb-4">
                <div className="flex items-center space-x-4">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border rounded-lg p-2 w-1/3"
                    />
                    <select 
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.target.value)}
                        className="border rounded-lg p-2 bg-white"
                    >
                        <option value="" disabled>Filter by</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="title">Sort by Title</option>
                    </select>
                </div>
            </div>
        </div>
    )
}