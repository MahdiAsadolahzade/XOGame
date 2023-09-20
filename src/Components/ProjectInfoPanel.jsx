// ProjectInfoPanel.js
import React from 'react';
import InfoIcons from '../assets/Icons/InfoIcons';

function ProjectInfoPanel({ onClose ,darkMode }) {
  return (
    <div className={`fixed bottom-0 right-0 m-4 p-4 ${darkMode?"dark:bg-gray-800":"bg-gray-100"}  shadow-lg rounded-lg`}>
      
      

      {InfoIcons.react}
      {InfoIcons.tailwind}
      {InfoIcons.nodejs}
      {InfoIcons.postgesql}
      <div
        onClick={onClose}
        className={`mt-4 p-2 ${darkMode?"hover:text-teal-500":"hover:text-rose-500"}  rounded-full  focus:outline-none focus:ring focus:ring-blue-300`}
      >
        {InfoIcons.close}
      </div>
    </div>
  );
}

export default ProjectInfoPanel;
