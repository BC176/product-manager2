import "./App.css";
import Main from "../src/views/Main";
import { Router } from "@reach/router";
import EditProduct from "./components/EditProduct";
import DisplayProduct from "./components/DisplayProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <EditProduct path="/:productID/edit" />
        <DisplayProduct path="/:productID" />
      </Router>
    </div>
  );
}

export default App;
