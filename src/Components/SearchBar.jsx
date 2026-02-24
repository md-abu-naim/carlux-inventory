
const SearchBar = ({ search, setSearch }) => {


    return (
        <input onChange={(e) => setSearch(e.target.value)} value={search}
            type="text" name="search" placeholder="Search by title"
            className="w-full p-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
    );
};

export default SearchBar;