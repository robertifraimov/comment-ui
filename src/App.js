
import './App.scss';
import Comment from './comment/Comment';
import Header from './Header/Header';
import Search from './Search/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>

      <div className="App">

      <Header/>
        <Switch>
          <Route path="/" exact component={Comment} />
          <Route path="/search" component={Search} />
        </Switch>

      </div>

    </Router>
  );
}

export default App;
 