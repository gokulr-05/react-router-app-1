import "./App.css";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Product from "./pages/Product";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />

        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
