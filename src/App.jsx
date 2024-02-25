import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppNav from "./components/AppNav";
import HomePage from "./pages/HomePage";
import Posts from "./pages/Posts";
import DashBoard from "./pages/Dasboard";
import Layout from "./components/Layout";
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<Posts />} />
          <Route path="dashboard" element={<DashBoard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
