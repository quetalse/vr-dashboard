import React from 'react';
import LineChart from '../../charts/LineChart02';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard08({title, data}) {

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100 flex items-center">
        <h2 className="font-semibold text-gray-800">{title}</h2>
      </header>
      <div className="px-5 py-3 h-full">
        <div className="flex flex-wrap h-full justify-between items-end">
          <div className="flex w-full  items-start justify-center">
            <div className="text-9xl font-bold text-gray-800 mr-2">1,482</div>
            <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">-22%</div>
          </div>
          <div className="flex-grow ml-2 mb-1">
            {/*<ul ref={legend} className="flex flex-wrap justify-end"></ul>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard08;
