
const SortDropdown = ({sort, setSort}) => {
    return (
        <select onChange={(e) => setSort(e.target.value)} value={sort}
            className="p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500">
            <option value="">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
        </select>
    );
};

export default SortDropdown;