/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "@/src/pages/LandingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Placeholder for future routes */}
        <Route path="/login" element={<div className="flex items-center justify-center h-screen">Login Page Placeholder</div>} />
        <Route path="/dashboard" element={<div className="flex items-center justify-center h-screen">Dashboard Placeholder</div>} />
      </Routes>
    </BrowserRouter>
  );
}
