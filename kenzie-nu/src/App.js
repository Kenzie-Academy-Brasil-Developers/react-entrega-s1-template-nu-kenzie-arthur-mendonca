import "./App.css";
import FrontPage from "./components/front-page/front-page";
import Dashboard from "./components/dashboard/dashboard";
import "./Global/globalstyles.css";
import "./Global/reset.css";
import { useState } from "react";

function App() {
  const [showFront, setShowFront] = useState(true);
  console.log(showFront);

  return (
    <div className="App">
      {showFront ? (
        <FrontPage frontPage={showFront} setState={setShowFront} />
      ) : (
        <Dashboard setState={setShowFront} />
      )}
    </div>
  );
}

export default App;
