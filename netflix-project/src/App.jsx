import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyHomepage from "./components/MyHomepage";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNavbar></MyNavbar>
      <MyHomepage></MyHomepage>
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
