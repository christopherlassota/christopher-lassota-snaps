import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import PhotoDetails from "./pages/PhotoDetails/PhotoDetails.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/Photo-details" element={<PhotoDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
