import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { useHistory } from 'react-router';
import Home from './Components/Home'
import Quiz from './Components/Quiz';


const App = () => {

  const hero = (
    <div>
      <h1>React code quiz</h1>
      <p>Check your knowledge!</p>
    </div>
  )

  return (
    <div>
      <Router>
        {hero}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/quiz' >
            <Quiz  />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
