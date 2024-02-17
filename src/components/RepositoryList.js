
import React, { useState, useEffect } from 'react';
import RepositoryCard from './RepositoryCard';

function RepositoryList({ username }) {
  const [repositories, setRepositories] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?page=${page}&per_page=10`)
      .then(response => response.json())
      .then(data => setRepositories(data))
      .catch(error=>console.error('Error fetching repositories:', error)
      );
      console.log(repositories,"repo")
  }, [username, page]);


  return (
    <>
    <div className='flex justify-center items-center w-full'>
    <h2>Repository List </h2>

    </div>
 
    <div className='flex flex-col my-4 px-4 mx-2'>
      {repositories.length && repositories.map(repo => (
        <RepositoryCard key={repo.id} repository={repo} />
      ))}
      <div className='flex justify-center items-center space-x-4'>
      <button className='border-2 border-slate-900 px-4 rounded-md py-2 text-black' onClick={() => setPage(page => page - 1)}>Previous Page</button>
      <button className='border-2 border-slate-900 px-4 rounded-md py-2 text-black' onClick={() => setPage(page => page + 1)}>Next Page</button>
      </div>
      
    </div>
    </>
  );
}

export default RepositoryList;
