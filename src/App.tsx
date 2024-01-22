import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import KitchenPage from "./pages/KitchenPage";
import TakeOutPage from "./pages/TakeoutPage";
import { CategoryProvider } from "./Contexts/CategoryContext";
import { ProductProvider } from "./Contexts/ProductContext";
import { OrderProvider } from "./Contexts/OrderContext";

function App() {
  return (
    <>
      <ToastContainer />
      <OrderProvider>
        <ProductProvider>
          <CategoryProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" Component={HomePage}></Route>
                <Route path="/cozinha" Component={KitchenPage}></Route>
                <Route path="/retirada" Component={TakeOutPage}></Route>
              </Routes>
            </BrowserRouter>
          </CategoryProvider>
        </ProductProvider>
      </OrderProvider>
    </>
  );
}
export default App;
