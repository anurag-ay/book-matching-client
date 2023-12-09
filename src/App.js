import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import LogIn from "./pages/Login";
import SignUp from "./pages/Signup";
import { useEffect, useState } from "react";
import UserInfoProvider from "./context/userInfoContex";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    let tokenValue = localStorage.getItem("token");
    setToken(tokenValue);
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            token ? (
              <UserInfoProvider>
                <Home />
              </UserInfoProvider>
            ) : (
              <LogIn />
            )
          }
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
