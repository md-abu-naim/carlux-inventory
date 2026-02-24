import Navber from '../Components/Navber';
import ProductCard from '../Components/ProductCard';
import SearchBar from '../Components/SearchBar';
import SortDropdown from '../Components/SortDropdown';
import { useProducts } from '../Hooks/useProducts';
import SkeletonLoader from '../Components/SkeletonLoader';
import { useState } from 'react';

const Home = () => {
    const { products, loading } = useProducts()
    const [search, setSearch ] = useState("")
    console.log(search);


    const filterProducts = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className='bg-gray-950 min-h-screen text-gray-300 space-y-3'>
            {/* Header */}
            <Navber />

            {/* Filtering */}
            <div className='flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-900 p-4 rounded-lg'>
                <SearchBar search={search} setSearch={setSearch} />
                <SortDropdown />
            </div>

            {/* Main section */}
            <div className='mt-8'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold'>Available Vehicles</h1>
                    <p className='text-gray-400 mb-4'>Explore our latest inventory of vehicles</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        loading ? Array.from({ length: 8 }).map((_, i) => <SkeletonLoader key={i} />) : (
                            filterProducts.map((product, i) => (
                                <ProductCard key={i} product={product} />
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;