import React, { useState, useEffect } from 'react'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./Routes.js";
import Header from "./components/Header";
import "./styles.css";
import protectedRoutes from './protectedRoutes'
import firebase from "firebase";
import firebaseConfig from "./firebase.config";
import ProtectedRouteHoc from './components/ProtectedRouteHoc'

firebase.initializeApp(firebaseConfig)

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  function readSession() {
    const user = window.sessionStorage.getItem(
			`firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
		);
		if (user) setLoggedIn(true)
  }
  useEffect(() => {
    readSession()
  }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      Is logged in? {JSON.stringify(isLoggedIn)}
      <div className="App">
        <Router>
          <Header isLoggedIn={isLoggedIn}/>

          <Switch>
            {protectedRoutes.map(route => (
              <ProtectedRouteHoc
                key={route.path}
                isLoggedIn={isLoggedIn}
                path={route.path}
                component={route.main}
                exact={route.exact}
                public={route.public}
              />
            ))}
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
