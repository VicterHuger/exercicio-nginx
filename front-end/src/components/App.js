import { BrowserRouter, Routes, Route } from "react-router-dom";

import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Choose some of the screens: /first or /second</h1>} />
        <Route path="/first" element={<FirstScreen />} />
        <Route path="/second" element={<SecondScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;