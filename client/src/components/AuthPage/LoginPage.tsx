import React, { useState } from 'react';
import { signin } from '../../redux/actions/auth-actions';
import FormField from '../FormField';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../Alert';
import { State } from '../../redux/reducers';
import './AuthPage.css';
import SignUpModal from './SignUpModal';
import Footer from './Footer';

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { auth_error }: any = useSelector((state: State) => state.authReducer);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signin(formData));
  };

  const [showRegister, setShowRegister] = useState<boolean>(false);

  return (
    <div
      className="w-auto container mx-auto p-4 flex flex-row justify-center"
      style={{ marginTop: '130px' }}
    >
      <div className="mt-5 pr-12">
        <p className="font-black text-5xl font-sans text-blue-400 mt-5 ">
          facebook clone
        </p>
        <p className="text-2xl">
          Connect with your friends and the world around you on Facebook
        </p>
      </div>

      <div
        style={{ width: '396px' }}
        className=" w-1/2 mt-8 space-y-6 bg-white px-4 py-3 rounded-sm shadow"
      >
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <FormField
              name="email"
              type="email"
              classNameInput="input_fields"
              required={true}
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <FormField
              name="password"
              type="password"
              required={true}
              classNameInput="input_fields"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {auth_error && auth_error.type === 'login' && (
            <Alert
              style={{ margin: '15px 0px' }}
              color="red"
              title="Login failed!"
              message={auth_error.message}
            />
          )}
          <div>
            <button
              type="submit"
              className="group mt-4 relative w-full flex justify-center border border-transparent rounded-md text-white bg-blue-400 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-4  btn_login"
            >
              Log In
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          <a href="/" className="font-medium text-blue-400 hover:text-blue-400">
            Forgot password?
          </a>
        </div>
        <div
          style={{
            borderBottom: '1px solid #dadde1',
            alignItems: 'center',
            display: 'flex',
            margin: '20px 16px',
            textAlign: 'center',
          }}
        />
        <div className="flex justify-center">
          <button
            onClick={() => setShowRegister(true)}
            className=" group relative font-large text-white bg-green text-center py-2 px-4 border border-transparent rounded-md mb-5 "
          >
            Create New Account
          </button>
          {showRegister && <SignUpModal setShowRegister={setShowRegister} />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
