"use client";

export const runtime = 'edge';


import { useState } from 'react';

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
    <div class="bg-gray-200 min-h-screen flex items-center justify-center">
      <div class="container mx-auto px-4 max-w-lg">
          <h1 class="text-3xl font-bold text-center mb-8">TikTok 资金计算器</h1>
          <p class="text-center text-gray-400 mb-8">使用最方便、最值得信赖的 TikTok 资金计算器计算任何 TikTok 账户的收益。</p>
          
          <form onSubmit={handleSubmit}>
            <div class="relative mb-4">
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="charlidamelio" class="w-full bg-gray-800 rounded-lg py-3 px-4 text-white focus:outline-none"/>
                    <button class="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
            </div>
            
            <button class="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg mb-6">
                CALCULATE EARNINGS
            </button>
        </form>
          
          <div class="flex justify-center space-x-6 text-green-500 mb-6">
            <span class="flex items-center"><svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> Free</span>
            <span class="flex items-center"><svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> Real-time Data</span>
            <span class="flex items-center"><svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> Calculation accuracy</span>
          </div>
          {result && <>
          <div class="bg-gray-800 rounded-lg p-4 mb-4">
              <div class="flex items-center mb-4">
                  <img src={`${result.avatar}`} alt="Profile" class="w-16 h-16 rounded-full mr-4"/>
                  <div>
                      <h2 class="text-xl font-bold">{result.name}</h2>
                      <div class="text-gray-400">
                          <p><span class="mr-2">👥</span>Followers: {result.followers}</p>
                          <p><span class="mr-2">❤️</span>Total Likes: {result.likes}</p>
                          <p><span class="mr-2">🎥</span>Videos: {result.videos}</p>
                          <p><span class="mr-2">⭐</span>Engagement Rate: {result.engagement}</p>
                      </div>
                  </div>
              </div>
          </div>
        
          <div class="bg-gray-800 rounded-lg p-4 text-center">
              <p class="text-gray-400 mb-2">Estimated earnings per Video</p>
              <p class="text-3xl text-white font-bold">{result.earnings}</p>
          </div>
          </>}
      </div>
    </div>
  );
}
