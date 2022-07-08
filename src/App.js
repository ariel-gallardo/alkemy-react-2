import { BrowserRouter, Route, Routes } from "react-router-dom";
import Components from "./Components";
import Views from "./Views";

function App() {
  return (
    <BrowserRouter>
      <Components.Countries.Provider>
        <Components.Content>
          <Routes>
            <Route exact path="/login" element={<Views.Login />} />
            <Route exact path="/register" element={<Views.Register />} />
          </Routes>
        </Components.Content>
      </Components.Countries.Provider>
    </BrowserRouter>
  );
}

export default App;
