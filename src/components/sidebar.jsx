import { Link } from "react-router-dom";
import { categories } from "../data";

const SideBar = ({ isOpen, onClose, collapsed }) => {
  return (
    <>
      {/* Mobile Sidebar */}
      <aside
        className={`bg-white shadow-md fixed h-full w-64 z-40 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-64"} md:hidden`}
      >
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-lg">Categories</h3>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  to={`/category/${category.toLowerCase()}`}
                  className="block py-2 text-gray-600 hover:text-blue-600"
                  onClick={onClose}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col bg-white shadow-md fixed top-16 h-full z-30 transition-all duration-300
        ${collapsed ? "w-16" : "w-64"}`}
      >
        <div className="p-4 border-b border-gray-200">
          {!collapsed && <h3 className="font-semibold text-lg">Categories</h3>}
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  to={`/category/${category.toLowerCase()}`}
                  className={`block py-2 text-gray-600 hover:text-blue-600 ${
                    collapsed ? "text-center" : ""
                  }`}
                >
                  {collapsed ? category[0] : category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default SideBar;
