import "./App.css";
import ProductPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductPage />} />
          <Route path="add" element={<AddProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
