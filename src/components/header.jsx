import { Link } from "react-router-dom";

const Header = ({ sidebarOpen, setSidebarOpen, sidebarCollapsed, setSidebarCollapsed }) => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Mobile toggle button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <Link to="/" className="text-xl font-bold text-gray-800">
            Miftah-Store
          </Link>
          <div className="ml-8">
            <span className="text-lg font-semibold text-green-600">
              Call Us: +1 (234) 567-890
            </span>
          </div>
        </div>

        {/* Desktop collapse button */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="hidden md:block text-gray-600 hover:text-gray-900"
          aria-label="Collapse sidebar"
        >
          {sidebarCollapsed ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
