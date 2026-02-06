import { Component } from "react";
import AccountNavbar from "./AccountNavbar";
import AccountMain from "./AccountMain";

class AccountPage extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#141414" }}>
        <AccountNavbar></AccountNavbar>
        <AccountMain></AccountMain>
      </div>
    );
  }
}
export default AccountPage;
