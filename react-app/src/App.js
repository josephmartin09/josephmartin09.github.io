import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import NoPage from './NoPage';

const App = () => (
	<main>
		<Navbar />
	    <Switch>
	      <Route exact path='/' component={Home} />
	      <Route component={NoPage} />
	    </Switch>
  </main>		
)

export default App