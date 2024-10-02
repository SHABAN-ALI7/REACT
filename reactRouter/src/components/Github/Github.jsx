import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/octocat')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setdata(data);
        })
    }, [])

  return (
    <div className=' text-center  m-4 bg-gray-600 text-white p-4 text-3xl ' >Github Followers: {data.followers} 
    <img className=' text-center flex mx-auto w-64' src={data.avatar_url} alt="Git picture" /></div>
    
  )
}

export default Github