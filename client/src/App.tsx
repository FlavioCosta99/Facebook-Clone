import Navbar from './components/Navbar/Navbar';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Init } from './redux/api/api-manager';
import Login from './components/AuthPage/LoginPage';
import Homepage from './components/Homepage/Homepage';
import { useSelector } from 'react-redux';
import { State } from './redux/reducers';
import LoadingScreen from './components/LoadingScreen';
import { getCurrentUser } from './redux/actions/auth-actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';

Init();
function App() {
  const { loading, isLoggedIn }: { loading: boolean; isLoggedIn: boolean } =
    useSelector((state: State) => state.authReducer);
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
            <PrivateRoute exact path="/" component={Homepage} />
            <UnauthenticatedRoute path="/signin" exact component={Login} />
          </Switch>
        )}{' '}
      </div>
    </BrowserRouter>
  );
}

export default App;
