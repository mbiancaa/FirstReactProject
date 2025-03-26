import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
// import App from './App.jsx';
import "modern-normalize";
import ReactDOM from "react-dom/client";
import Homepage from './pages/Homepage';
import About from './pages/About';
import Blog from './pages/Blog';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import BlogPost from './pages/BlogPost';
import ProductItem from './pages/ProductItem';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/about" element={<About />} >
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
      </Route>

      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:blogTitle" element={<BlogPost />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<ProductItem />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

