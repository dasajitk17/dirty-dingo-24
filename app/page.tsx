// pages/index.tsx
import { useEffect, useState } from 'react';

function Index() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the API route
    fetch('/api/qa')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Hello from Next.js</h1>
      <p>Message from API: {message}</p>
    </div>
  );
}

export default Index;
