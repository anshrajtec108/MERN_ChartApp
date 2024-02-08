import { Route } from "react-router-dom"
import './App.css'
import HomePage from "./Pages/HomePage"
import ChartPage from "./Pages/ChartPage"

function App() {


  return (
    <div className="App">
      <Route path='/' component={HomePage} exact />
      <Route path='/chart' component={ChartPage} />
    </div>
  )
}

export default App
