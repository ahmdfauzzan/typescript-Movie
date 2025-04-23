import DashboardPage from "@/pages/DashboardPage";
import HomePage from "@/pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterList;
