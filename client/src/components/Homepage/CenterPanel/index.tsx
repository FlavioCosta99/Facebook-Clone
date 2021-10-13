import React from 'react';
import PublicationForm from './PublicationForm';
import Rooms from './Rooms';
import Stories from './Stories';

export default function index() {
  return (
    <div className="center_panel">
      <Stories />
      <PublicationForm />
      <Rooms />
    </div>
  );
}
