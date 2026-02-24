
const ProductCard = () => {
    return (
        <div className='flex items-center justify-center bg-gray-950 p-4'>
            <div className='group relative w-76 rounded-4xl bg-gray-900 p-5 border border-white/5 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-400/10'>

                {/* Product Image */}
                <div className='relative aspect-square overflow-hidden rounded-2xl bg-gray-800 flex items-center justify-center'>
                    <div className='absolute inset-0 bg-linear-to-tr from-cyan-500/5 to-transparent'></div>
                    <img src="https://i.postimg.cc/25BPjPQg/Aloe-Neem-Anti-Dandruff-Shampoo.webp" alt="Product"
                        className='w-56 h-56 object-contain rounded-xl transition-transform duration-500 group-hover:scale-110' />
                </div>

                {/* Product Details */}
                <div className='mt-5 space-y-1'>
                    <h3 className='text-xl font-bold text-cyan-400 tracking-tight'>300 Touring</h3>
                    <p className='text-xl font-medium text-gray-400 tracking-wide'>Chrysler</p>

                    <div className='flex items-center justify-between pt-4'>
                        <span className='text-lg font-bold'>
                            $28999.99
                        </span>

                        {/* Details button added for aesthetic purposes only (not part of core requirements) */}
                        <button className='rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 hover:bg-cyan-400 hover:text-gray-950 transition-all py-1 px-2'>
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;