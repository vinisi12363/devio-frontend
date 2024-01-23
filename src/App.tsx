import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HomePage, KitchenPage , TakeOutPage } from "./pages";
import { CategoryProvider } from "./Contexts/CategoryContext";
import { ProductProvider } from "./Contexts/ProductContext";
import { OrderProvider } from "./Contexts/OrderContext";
import { DatabaseOrderProvider } from "./Contexts/DatabaseOrdersContext";
import { WindowWidthProvider } from "./Contexts/windowSizeContext";

function App() {
  return (
    <WindowWidthProvider>
      <ToastContainer />
      <DatabaseOrderProvider>
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
      </DatabaseOrderProvider>
    </WindowWidthProvider>
  );
}
export default App;
