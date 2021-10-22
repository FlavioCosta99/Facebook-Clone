import React from 'react';
import PostsForm from './PostsForm';
import Posts from './Posts';
import Rooms from './Rooms';
import Stories from './Stories';

export default function index() {
  return (
    <div className="center_panel p-2">
      <Stories />
      <PostsForm />
      <Rooms />
      <Posts />
    </div>
  );
}
