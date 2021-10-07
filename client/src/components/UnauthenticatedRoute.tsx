import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '../redux/reducers';

export default function UnauthenticatedRoute({
  component: Component,
  ...rest
}: any) {
  const { isLoggedIn }: any = useSelector((state: State) => state.authReducer);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}
