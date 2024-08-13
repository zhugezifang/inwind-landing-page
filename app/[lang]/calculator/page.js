"use client";

import { useState } from 'react';

export const runtime = 'edge';

export default function HomePage() {
  const [name, setName] = useState('');
  const [result, setMessage] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/greet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        setError(data.error);
        setMessage('');
      } else {
        setMessage(data);
        setError('');
      }
    } catch (err) {
      setError('Something went wrong');
      setMessage('');
    }
  };
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-lg">
          <h1 className="text-3xl font-bold text-center mb-8">TikTok 资金计算器</h1>
          <p className="text-center text-gray-400 mb-8">使用最方便、最值得信赖的 TikTok 资金计算器计算任何 TikTok 账户的收益。</p>
          
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="charlidamelio" className="w-full bg-gray-800 rounded-lg py-3 px-4 text-white focus:outline-none"/>
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
            </div>
            
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg mb-6">
                CALCULATE EARNINGS
            </button>
        </form>
          
          <div className="flex justify-center space-x-6 text-green-500 mb-6">
            <span className="flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> Free</span>
            <span className="flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> Real-time Data</span>
            <span className="flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> Calculation accuracy</span>
          </div>
          {result && <>
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
              <div className="flex items-center mb-4">
                  <img src={`${result.avatar}`} alt="Profile" className="w-16 h-16 rounded-full mr-4"/>
                  <div>
                      <h2 className="text-xl font-bold">{result.name}</h2>
                      <div className="text-gray-400">
                          <p><span className="mr-2">👥</span>Followers: {result.followers}</p>
                          <p><span className="mr-2">❤️</span>Total Likes: {result.likes}</p>
                          <p><span className="mr-2">🎥</span>Videos: {result.videos}</p>
                          <p><span className="mr-2">⭐</span>Engagement Rate: {result.engagement}</p>
                      </div>
                  </div>
              </div>
          </div>
        
          <div className="bg-gray-800 rounded-lg p-4 text-center">
              <p className="text-gray-400 mb-2">Estimated earnings per Video</p>
              <p className="text-3xl text-white font-bold">{result.earnings}</p>
          </div>
          </>}
      </div>
    </div>
  );
}
