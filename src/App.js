import "./App.css";
import BgColor from "./components/BgColor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Menu } from "./components/Menu";
import { MainPage } from "./components/MainPage";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const colorsArray = [
    "#c2fbd7",
    "#c33ffb",
    "#99ffff",
    "orange",
    "yellow",
    "rgb(45, 255, 255)",
    "crimson",
    "tomato",
    "#DF5589FF",
    "#019fff",
  ];

  return (
    <>
      <Menu />
      <Router>
        <Switch>
          <div className="main-containers">
            <Route exact path="/" component={Home} />

            <div className="containers">
              {colorsArray.map((color) => (
                <BgColor path="/bgcolor" bgColorName={color} />
              ))}
            </div>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
