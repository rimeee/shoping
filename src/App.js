import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import NavBar from "./component/NavBar";
import { fas } from "@fortawesome/free-solid-svg-icons";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]);
  return (
    <div>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
