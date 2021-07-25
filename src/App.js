import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopsPage from "./pages/homepage/shops/shops.component.jsx";
import Header from "./components/header/header.component.jsx";
import Auth from "./pages/auth/auth.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopsPage} />
          <Route path="/signin" component={Auth} />
        </Switch>
      </div>
    );
  }
}
export default App;
