import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductAdmin from "../pages/ProductAdmin/ProductAdmin";

const AppRouter: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<ProductAdmin />}/>
    </Routes>
  )
}

export default AppRouter;