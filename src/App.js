import logo from './static/imgs/netflix-logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Movies from "./components/Movies";

function App() {
  return (
    <Router>
      <div className="movieDisplay">
        <img alt="website-logo" src={logo} className="movieDisplay__headLogo" />
          <Route path="/" exact component={Movies}/>
      </div>
    </Router>        
  );
}

export default App;
