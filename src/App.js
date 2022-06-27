import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import Layout from "./components/UI/Layout/Layout";
const Search = React.lazy(() => import("./pages/Search/Search"));
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Suspense fallback={<div>heheh</div>}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Suspense>
        </Switch>{" "}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
