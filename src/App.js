import "./App.css";
import { Route, Routes } from "react-router-dom";
import SelectedCategoryPage from "./components/selectedCategory/SelectedCategoryPage";
import SelectionPage from "./components/selectionPage/SelectionPage";

function App() {
  return (
    <>
      {/* Two components LandingPage and SelectedPage*/}
      <Routes>
        <Route path="/" element={<SelectionPage />} />
        <Route path="/home" element={<SelectedCategoryPage />} />
      </Routes>
    </>
  );
}

export default App;
