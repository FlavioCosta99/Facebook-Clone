import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/actions/auth-actions';
import FormField from '../FormField';
import { Link } from 'react-router-dom';
import Alert from '../Alert';
import { State } from '../../redux/reducers';

export default function SignUpModal({ setShowRegister }: any) {
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

  const { auth_error }: any = useSelector((state: State) => state.authReducer);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signup(formData));
  };

  return (
    <div
      className="fixed inset-0 overflow-y-auto h-full w-full"
      style={{
        zIndex: 2,
        backgroundColor: 'rgba(255, 255, 255, .8)',
        top: 0,
        left: 0,
      }}
    >
      <div className="relative top-40 mx-auto pb-3 border w-96 shadow-lg rounded-md bg-white">
        <div className="p-3">
          <img
            alt="close"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
            className="sign_up_close cursor-pointer"
            onClick={() => setShowRegister(false)}
          />
          <h1
            style={{
              color: '#1c1e21',
              fontFamily: 'SFProDisplay-Bold, Helvetica, Arial, sans-serif',
              fontSize: '32px',
              lineHeight: '38px',
              marginBottom: '0',
            }}
          >
            Sign up{' '}
          </h1>
          <p className="text-gray-100"> It's quick and easy.</p>
        </div>

        <div className="divider m-2" />
        <form className="m-auto w-4/5 mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="space-y-px">
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
          <p style={{ color: '#777', fontSize: '11px' }}>
            By clicking Sign Up, you agree to our Terms. Learn how we collect,
            use and share your data in our Data Policy and how we use cookies
            and similar technology in our Cookies Policy. You may receive SMS
            Notifications from us and can opt out any time.
          </p>
          {auth_error && auth_error.type === 'register' && (
            <Alert
              color="red"
              title="Login failed!"
              message={auth_error.message}
            />
          )}
          <div className="text-center">
            <button
              type="submit"
              className=" group  relative font-large text-white bg-green text-center py-2 px-7 border border-transparent rounded-md mb-5 "
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
