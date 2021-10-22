import React from 'react';

export default function InteractionBar() {
  return (
    <div className=" border-t-2 border-gray-400 p-2 flex justify-center">
      <ul className="flex justify-between w-3/4">
        <li className="flex items-center cursor-pointer">
          <i data-visualcompletion="css-img" className="like mr-2" />
          <p> Like </p>
        </li>
        <li className="flex items-center cursor-pointer">
          <i data-visualcompletion="css-img" className="comment mr-2" />
          <p> Comment </p>
        </li>
        <li className="flex items-center cursor-pointer">
          <i data-visualcompletion="css-img" className="share mr-2" />
          <p> Share </p>
        </li>
      </ul>
    </div>
  );
}
