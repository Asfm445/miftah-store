import { Link } from "react-router-dom";

const Header = ({
  sidebarOpen,
  setSidebarOpen,
  sidebarCollapsed,
  setSidebarCollapsed,
}) => {
  return (
    <header className="bg-white shadow-lg fixed w-full z-20 border-b-2 border-green-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Mobile toggle button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors duration-300"
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

          {/* Enhanced Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-3 group animate-fadeIn relative"
          >
            <div className="relative">
              {/* Main logo container with enhanced effects */}
              <div className="relative h-14 w-14 md:h-16 md:w-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-1 shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-green-300/50">
                {/* Logo image with better visibility */}
                <img
                  src="/logo.jpg"
                  alt="Miftah Store Logo"
                  className="h-full w-full rounded-full object-cover border-2 border-white shadow-inner"
                />
                
                {/* Animated ring effect */}
                <div className="absolute -inset-2 rounded-full border-2 border-green-400/30 animate-ping-slow"></div>
                <div className="absolute -inset-1 rounded-full border-2 border-green-300/50 animate-pulse"></div>
              </div>

              {/* Enhanced glow effect */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-30 blur-xl group-hover:opacity-40 group-hover:blur-2xl transition-all duration-700 animate-float"></span>
              
              {/* Shining dots for extra attention */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full animate-bounce delay-300 shadow-lg"></div>
            </div>

            {/* Enhanced text styling */}
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent group-hover:from-green-500 group-hover:to-emerald-600 transition-all duration-500 tracking-tight">
                Miftah Store
              </span>
              <span className="text-xs font-semibold text-green-500 opacity-80 transform translate-y-[-2px]">
                Premium Shopping
              </span>
            </div>

            {/* Optional: Add a small badge for extra attention */}
            <div className="absolute -top-2 -right-2">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-500"></span>
              </span>
            </div>
          </Link>

          {/* Phone number */}
          <div className="ml-6 hidden lg:block">
            <span className="text-lg font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200">
              📞 Call Us: +251 92 221 8897
            </span>
          </div>
        </div>

        {/* Desktop collapse button */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="hidden md:block text-gray-600 hover:text-gray-900 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-100"
          aria-label="Collapse sidebar"
        >
          {sidebarCollapsed ? (
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          ) : (
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;