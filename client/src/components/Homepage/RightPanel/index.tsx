import React from 'react';
import Contacts from './Contacts';
import Sponsored from './Sponsored';
import YourPages from './YourPages';

export default function index() {
  return (
    <div className="right_panel m-4">
      <div className="fixed container_rightpanel">
        <Sponsored />
        <div className="divider w-full" style={{ marginLeft: '0px' }} />
        <YourPages />
        <div className="divider w-full" style={{ marginLeft: '0px' }} />
        <Contacts />
      </div>
    </div>
  );
}
