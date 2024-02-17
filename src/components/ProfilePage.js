// ProfilePage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RepositoryList from './RepositoryList';

function ProfilePage() {
  const { username } = useParams();
  const[data, setData]=useState(true)
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error)
      );
      console.log(userData,"userdata")
  }, [username]);

  if(userData && userData.name){
    return(
      <body class="h-scren">
      <div class="flex flex-col md:flex-row justify-center md:justify-center">
        {
            userData &&
        <div className='justify-center items-center md:h-fit flex mt-20'>
             <div class="flex flex-col items-center ml-2 ">
             <div>
        <div class="mx-2 overflow-hidden rounded-full w-40 md:w-80">
          <img src={userData.avatar_url}/>
            </div>
        </div>
            <div>
              <h2 class="text-lg font-medium">{userData.name}</h2>
            </div>
            <div class="mt-2">
              {userData.bio&&<p>Bio: {userData.bio}</p>}
              <div class="mt-4 space-x-2">
                <button class="px-2 py-2 rounded-xl text-xs bg-zinc-400 text-white font-medium">Repos: {userData.public_repos}</button>
                <button class="px-4 py-2 rounded-xl text-xs bg-zinc-400 text-white font-medium">Followers: {userData.followers}</button>
                <button class="px-4 py-2 rounded-xl text-xs bg-zinc-400 text-white font-medium">Following: {userData.following}</button>
     
              </div>
              {userData.blog &&<a href={userData.blog}>Blog: {userData.blog}</a>}
            </div>
          </div>
    
        </div>
    }
        <div>
            <RepositoryList username={username}/>
        </div>
        
        </div>
        
      </body>
  )

  }else{
    return(
      <div>
        <h1>No Repo found with the username</h1>
      </div>
    )
  }

  

}

export default ProfilePage;
