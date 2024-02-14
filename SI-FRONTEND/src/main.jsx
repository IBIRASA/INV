import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./Pages/Login.jsx";
import Reset from "./Pages/Reset.jsx";
import Request from "./Pages/Request.jsx";
import Reportt from "./Pages/Reportt.jsx";
import Finance from "./Pages/finance/Finance.jsx";
import Manager from "./Pages/Manager.jsx";

// import Dash1 from './components/Dash1.jsx';
// import Dash2 from './components/Dash2.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";
import ItemsIn from "./Pages/ItemsIn.jsx";
import Itemout from "./Pages/Itemout.jsx";
import User from "./Pages/User.jsx";
import TableCash from "./Pages/finance/TableCash.jsx";
import Upload from "./Pages/finance/Upload.jsx";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogContextState = () => {
  const { state } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(state);
    if (state.isAuthenticated) {
      navigate("/home");
    }
  }, [state]);

  return null;
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/welcome" element={<App />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/Home" element={<Dashboard />} />
          <Route path="/Request" element={<Request />} />
          <Route path="/Report" element={<Reportt />} />
          <Route path="/Stock" element={<ItemsIn />} />
          <Route path="/Itemout" element={<Itemout />} />
          <Route path="/user" element={<User />} />
          <Route path="/accounts" element={<TableCash />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/Finance" element={<Finance/>} />
          <Route path="/Manager" element={<Manager/>} />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
