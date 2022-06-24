import * as React from "react";
import { Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage"
import StudentLoginPage from './components/StudentLoginPage'
import "./App.css";

function App() {
  return (
    <div >
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/login/student" element={<StudentLoginPage />} />
      </Routes>
    </div>
  );
}

export default App;