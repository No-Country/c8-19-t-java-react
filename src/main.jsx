import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PlaceDetails from "./pages/PlaceDetails";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop";
import ResultsPage from "./pages/ResultsPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/resultsPage" element={<ResultsPage />} />

          {/* Ruta protegida */}
          <Route element={<ProtectedRoute />}>
            <Route path="/shop" element={<Shop />} />
          </Route>
          <Route path="/:id" element={<PlaceDetails />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
