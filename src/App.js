import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Header></Header> */}
        <Route element={<Header></Header>}>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Details />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
