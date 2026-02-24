import Navber from '../Components/Navber';
import SearchBar from '../Components/SearchBar';
import SortDropdown from '../Components/SortDropdown';

const Home = () => {
    return (
        <div className='bg-gray-950 min-h-screen text-gray-300 space-y-3'>
            {/* Header */}
            <Navber />

            <div className='flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-900 p-4 rounded-lg'>
                <SearchBar />
                <SortDropdown />
            </div>
        </div>
    );
};

export default Home;