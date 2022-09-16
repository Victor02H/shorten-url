import { BrowserRouter, Route } from "react-router-dom";

import App from "./App";
import LoginSignUp from "./components/Login-signUp";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route element={App} path="/" exact />
      <Route element={LoginSignUp} path="/login" />
    </BrowserRouter>
  );
}
