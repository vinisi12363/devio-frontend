import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';
import KitchenPage from "./pages/KitchenPage";
import TakeOutPage from "./pages/TakeoutPage";
import { CategoryProvider } from "./Contexts/CategoryContext";
function App() {
  return (
    <CategoryProvider>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage}></Route>
          <Route path="/cozinha" Component={KitchenPage}></Route>
          <Route path="/retirada" Component={TakeOutPage}></Route>
        </Routes>
      </BrowserRouter>
    </CategoryProvider>
  )
}
export default App;
