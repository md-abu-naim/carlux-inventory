
const SkeletonLoader = () => {

    return (
        <div className="flex items-center justify-center bg-gray-950 p-4 animate-pulse">
            <div className="w-76 rounded-4xl bg-gray-900 p-5 border border-white/5">

                <div className="aspect-square rounded-2xl bg-gray-800"></div>

                <div className="mt-5 space-y-3">
                    <div className="h-6 w-3/4 rounded bg-gray-700"></div>
                    <div className="h-5 w-1/2 rounded bg-gray-700"></div>

                    <div className="flex items-center justify-between pt-4">
                        <div className="h-6 w-20 rounded bg-gray-700"></div>
                        <div className="h-8 w-20 rounded-full bg-gray-700"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonLoader;