import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/homePage"
import DetailPage from "./pages/detailPage/detailPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/palettes/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
