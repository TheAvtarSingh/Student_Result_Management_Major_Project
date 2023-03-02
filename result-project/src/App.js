import "./App.css";


// Components
import Navbar from "./components/navBar/Navbar";
import AddNewMarks from "./components/addMarks";
import ModifyOldMarks from "./components/modifyMarks";
import GetOldMarks from "./components/getMarks";
import HomePage from "./components/homePage/homePage";
import Footer from './components/footer/footer';
import AdminLoginPage from "./components/AdminLoginPage/AdminLoginPage";
import StudentLoginPage from "./components/StudentLoginPage/StudentLoginPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import AddStudent from "./components/AddStudent/AddStudent";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar title="GeturResult.com" />
<Routes>
  
  <Route path="/" element={<HomePage />} />
  <Route path="/addNewMarks" element={<AddNewMarks />} />
  <Route path="/ModilfyOldMarks" element={<ModifyOldMarks />} />
  <Route path="/GetOldMarks" element={<GetOldMarks />} />
  <Route path="/admin_login_page" element={<AdminLoginPage />} />
  <Route path="/student_login_page" element={<StudentLoginPage />} />
  <Route path="/add_student_admin" element={<AddStudent />} />

  <Route path="*" element={<PageNotFound />} />
      
      
      
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
