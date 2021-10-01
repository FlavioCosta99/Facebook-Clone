import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../../redux/actions/auth-actions';
import FormField from '../../FormField';
import { useHistory, Link } from 'react-router-dom';
import Alert from '../../Alert';
import { State } from '../../../redux/reducers';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const { auth_error }: any = useSelector((state: State) => state.authReducer);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signup(formData, history));
  };

  return (
    <div className="w-auto container mx-auto p-4">
      <p className="font-black text-center mt-4 text-3xl font-sans text-primary">
        MemoriesAPP
      </p>
      <form className="m-auto w-1/2 mt-8 space-y-6" onSubmit={handleSubmit}>
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <FormField
            name="name"
            type="text"
            required={true}
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
          />
          <FormField
            name="email"
            type="email"
            required={true}
            placeholder="Email Address"
            onChange={handleChange}
            value={formData.email}
          />
          <FormField
            name="password"
            type="password"
            required={true}
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          />
          <FormField
            name="confirmPassword"
            type="password"
            required={true}
            placeholder="Confirm Password"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
        </div>
        {auth_error && (
          <Alert
            color="red"
            title="Login failed!"
            message={auth_error.message}
          />
        )}
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            Sign Up
          </button>
        </div>
        <div className="text-right">
          <Link
            className="font-medium text-xs text-blue-200 hover:text-blue-100 cursor-pointer"
            to="/signin"
          >
            Already have an account? Sign in
          </Link>
        </div>
      </form>{' '}
    </div>
  );
}
