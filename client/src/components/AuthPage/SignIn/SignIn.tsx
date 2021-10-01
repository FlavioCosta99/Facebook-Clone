import React, { useState } from 'react';
import { signin } from '../../../redux/actions/auth-actions';
import FormField from '../../FormField';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../../Alert';
import { State } from '../../../redux/reducers';

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { auth_error }: any = useSelector((state: State) => state.authReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signin(formData, history));
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
            name="email"
            type="email"
            required={true}
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <FormField
            name="password"
            type="password"
            required={true}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {auth_error && (
          <Alert
            color="red"
            title="Login failed!"
            message={auth_error.message}
          />
        )}
        <div className="text-sm">
          <a href="/" className="font-medium text-blue-400 hover:text-blue-400">
            Forgot your password?
          </a>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-4    00"
          >
            Sign In
          </button>
        </div>

        <div className="text-right">
          <Link
            className="font-medium text-xs text-blue-200 hover:text-blue-100 cursor-pointer"
            to="/signup"
          >
            Forgot your password? Don't have an account? Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
