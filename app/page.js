
import React from 'react';

// Simulate async data fetching
async function getData() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 3000));
  return { message: "Hello World!" };
}

async function Page() {
  const data = await getData();
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          {data.message}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome to your Next.js app!
        </p>
      </div>
    </div>
  );
}

export default Page;
