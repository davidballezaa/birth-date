import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from "./components/navbar.js";
import PeopleList from "./components/people-list.js";
import CreateUser from "./components/create-user.js";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<PeopleList />} />
          <Route path="/create" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
