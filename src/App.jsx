import React from "react";
import Navabar from "./Components/Navabar/Navabar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Admin from "./Pages/Admin/Admin";

const App = () => {
  return (
    <div>
      <Navabar />
      <Admin />
    </div>
  );
};

export default App;
