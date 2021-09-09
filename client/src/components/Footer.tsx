import React from 'react';
import { getCurrentUser } from '../redux/actions/auth-actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Footer() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCurrentUser(history));
  }, []);

  return (
    <footer className="absolute w-full bottom-0 mb-3">
      <div className="w-4/5 m-auto border-t-2 border-gray-400 text-gray-400 pt-3">
        Created By Flávio
      </div>
    </footer>
  );
}
