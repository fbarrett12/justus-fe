import React from 'react'
import Pages from './pages'


const routes = [
    { name: "Join", path: "/", exact: true, main: () => <Pages.Join /> },
    { name: "Login", path: "/login", exact: true, main: () => <Pages.Login /> }
  ];
  
  export default routes;