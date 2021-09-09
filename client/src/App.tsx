import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Init } from './redux/api/api-manager';
import SignIn from './components/AuthPage/SignIn/SignIn';
import SignUp from './components/AuthPage/SignUp/SignUp';
import Homepage from './components/Homepage/Homepage';

Init();
function App() {
  return (
    <BrowserRouter>
      <div className="App bg-gray">
        <Navbar />
        <Switch>
          <PrivateRoute path="/" exact component={Homepage} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
