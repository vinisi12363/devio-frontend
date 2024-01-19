import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/Homepage'
function App() {
  return (
    <>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
