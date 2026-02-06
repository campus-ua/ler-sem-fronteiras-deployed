import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChooseFriend from "./pages/ChooseFriend";
import Reader from "./pages/Reader";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amigo" element={<ChooseFriend />} />
        <Route path="/ler" element={<Reader />} />
      </Routes>
    </BrowserRouter>
  );
}
