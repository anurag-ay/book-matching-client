import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonalityForm from "./pages/PersonalityForm";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<PersonalityForm />}
          // element={token ? ChatWithContext : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
