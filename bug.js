```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once after the initial render
    console.log('Component mounted');
    // Simulate an asynchronous operation
    setTimeout(() => {
      setCount(count + 1); // This is the BUG: count is stale closure 
    }, 1000);
    return () => {
      console.log('Component unmounted');
    };
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```