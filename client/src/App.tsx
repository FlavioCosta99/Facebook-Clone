import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Init } from './redux/api/api-manager';
import SignIn from './components/AuthPage/SignIn/SignIn';
import SignUp from './components/AuthPage/SignUp/SignUp';
import Homepage from './components/Homepage/Homepage';
import { useSelector } from 'react-redux';
import { State } from './redux/reducers';
import LoadingScreen from './components/LoadingScreen';
import { getCurrentUser } from './redux/actions/auth-actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';

Init();
function App() {
  const { loading, loggedIn }: any = useSelector(
    (state: State) => state.authReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <BrowserRouter>
      <div className="App bg-gray">
        <Navbar />
        {loading ? (
          <LoadingScreen />
        ) : (
          <Switch>
            <PrivateRoute path="/" exact component={Homepage} />
            <UnauthenticatedRoute path="/signin" exact component={SignIn} />
            <UnauthenticatedRoute path="/signup" exact component={SignUp} />
          </Switch>
        )}{' '}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
