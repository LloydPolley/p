import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import MyRoutes from "./components/Navigation/MyRoutes";

function App() {
  return (
    <div className="App">
      <Navigation />
      <MyRoutes />
    </div>
  );
}

export default App;
