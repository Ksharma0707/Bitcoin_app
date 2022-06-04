import React,  { useState }  from "react";
import AboutTab from "./AboutTab";
import LivePriceTab from "./LivePriceTab";
const Tabs = () => {
const [activeTab, setActiveTab] = useState("tab1");
const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  return (
    <div className="Tabs">
      <ul className="nav">
      <h1 className="head"> Bit Live</h1>
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          About
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Live Price
        </li>
      </ul>
      <div className="outlet">
      {activeTab === "tab1" ? <AboutTab /> : <LivePriceTab />}
      </div>
    </div>
  );
};
export default Tabs;