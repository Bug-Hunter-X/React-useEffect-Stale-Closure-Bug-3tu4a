```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    setTimeout(() => {
      setCount(prevCount => prevCount + 1); // Functional update to solve the stale closure issue
    }, 1000);
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```