import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CounrtyList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { AppContextProvider } from "./context";

export default function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          {/* This will just work just as the above route */}
          {/* <Route path="/" element={<Homepage />} /> */}

          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />

          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate to="cities" replace />} />
            <Route
              path="cities"
              element={<CityList />}
            />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CounrtyList />} />
            <Route path="form" element={<Form />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}