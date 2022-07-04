import * as React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import LoginPage from './components/LoginPage'
import DetailContentPage from "./components/DetailContentPage"
import MainContentPage from "./components/MainContentPage"
import AddNewPage from "./components/AddNewPage";
import EditPage from "./components/EditPage";
import "./App.css";

function App() {
 
  return (
    <div >
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/login/student" element={<LoginPage role='Student' />} />
         <Route path="/login/admin" element={<LoginPage role='Administrator' />} />
         <Route path="/login/tutor" element={<LoginPage role='Tutor' />} />
         <Route path="/main-content/student" element={<MainContentPage role='Student' />} />
         <Route path="/main-content/admin" element={<MainContentPage role='Administrator' />} />
         <Route path="/main-content/tutor" element={<MainContentPage role='Tutor' />} />
         <Route path="/detail-content/:id" element={<DetailContentPage  />} />
         <Route path="/add-new" element={<AddNewPage  />} />
         <Route path="/edit/:id" element={<EditPage  />} />
      </Routes>
    </div>
  );
}

export default App;