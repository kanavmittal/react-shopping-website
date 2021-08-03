import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopsPage from "./pages/homepage/shops/shops.component.jsx";
import Header from "./components/header/header.component.jsx";
import Auth from "./pages/auth/auth.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./index.css";
import { setCurrentUser } from "./redux/user/user.action.js";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopsPage} />
          <Route path="/signin" component={Auth} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
