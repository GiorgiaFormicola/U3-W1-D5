import { Component } from "react";
import HomeNavbar from "./components/HomeNavbar";
import HomeMain from "./components/HomeMain";
import HomeFooter from "./components/HomeFooter";

class HomePage extends Component {
  render() {
    return (
      <>
        <HomeNavbar></HomeNavbar>
        <HomeMain></HomeMain>
        <HomeFooter></HomeFooter>
      </>
    );
  }
}

export default HomePage;
