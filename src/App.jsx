import Home from "./pages/home/Home"
import New from "./pages/new/New"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import Login from "./pages/login/Login"
import { userInputs, productInputs } from "./formSource"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./style/dark.scss"

function App() {

  return (
    <div className="app dark">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New inputs = {userInputs} title="Add New User"/>}/>
            </Route>
            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productId" element={<Single/>}/>
              <Route path="new" element={<New inputs = {productInputs} title="Add New Product"/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
