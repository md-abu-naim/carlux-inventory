
const Error = ({ error }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-36 bg-red-950/20 border border-red-500 rounded-xl text-red-400 p-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mb-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <p className="text-lg font-semibold text-center">{error}</p>
        </div>
    );
};

export default Error;