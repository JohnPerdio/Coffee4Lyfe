import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layouts/BaseLayout"
import HomePage from "./pages/HomePage"
import PromotionPage from "./pages/PromotionPage"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/promotion" element={<PromotionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}