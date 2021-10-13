import React from 'react';
import LeftPanel from './LeftPanel';
import CenterPanel from './CenterPanel';
import RightPanel from './RightPanel';
import './style.css';

export default function Homepage() {
  return (
    <div className="homepage flex flex-row justify-around">
      <LeftPanel />
      <CenterPanel />
      <RightPanel />
    </div>
  );
}
