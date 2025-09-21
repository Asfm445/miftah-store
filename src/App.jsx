import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import SideBar from './components/sidebar';
import ProductList from './components/product';
import ProductDetailPage from './components/productDetail';
import CategoryPage from './components/catagory';
// import AdminPage from './components/AdminPage'; // Import AdminPage

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false); // desktop

  return (
    <>
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />

      <SideBar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        collapsed={sidebarCollapsed}
      />

      <div className={`min-h-screen bg-gray-100 transition-all ${sidebarCollapsed ? "md:ml-16" : "md:ml-64"} pt-16`}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          {/* <Route path="/admin" element={<AdminPage />} /> New Admin route */}
        </Routes>
      </div>
    </>
  );
}

export default App;
