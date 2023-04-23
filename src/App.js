import "./App.css";
import { BrowserRouter as Router,Switch ,Route } from "react-router-dom"
import About from "./components/about/About";
import Home from "./components/home/Home";
function App() {
  return (
    <>
      <Router>
          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/src/components/about/About' component={About} />
          </Switch>
          </Router>

    </>
  )
}

export default App
