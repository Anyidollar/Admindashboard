import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import SideBar from "./SideBar";
function App() {
  const [openSideBarToggle, setOpenSideBarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSideBarToggle(!openSideBarToggle);
  };
  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <SideBar
        openSideBarToggle={openSideBarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Home />
    </div>
  );
}

export default App;
