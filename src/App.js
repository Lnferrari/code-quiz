import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './Components/Home'
import Quiz from './Components/Quiz';


const App = () => {

  const header = (
    <div className='header'>
      <h1>Code quiz</h1>
      <p>Check your knowledge!</p>
    </div>
  )
  
  const backgroundBubbles = (
    <ul className="bg-bubbles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  )  

  return (
    <>
      <Router>
        {header}
        {backgroundBubbles}
        <Redirect to='/code-quiz' />
        <Switch>
          <Route path='/code-quiz' exact component={Home} />
          <Route path='/code-quiz/quiz' exact component={Quiz}>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
