import React from 'react';

function RepositoryCard({ repository }) {
  return (
    <div className="flex flex-col bg-slate-900 my-6 w-auto min-h-20 p-2 rounded-lg">
                <h2 className=" text-white text-lg font-semibold leading-none">{repository.name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {repository.description}
                </p>
              </div>
  );
}

export default RepositoryCard;