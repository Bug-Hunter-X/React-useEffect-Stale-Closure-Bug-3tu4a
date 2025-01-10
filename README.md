# React useEffect Stale Closure Bug

This repository demonstrates a common bug in React applications involving stale closures within the `useEffect` hook.  The bug occurs when an asynchronous operation updates a state variable, but the callback function within `useEffect` uses a previous value of that variable (a stale closure). 

## The Bug
The `bug.js` file contains a React component that uses `useEffect` to update a counter after a 1-second delay. However, due to the stale closure, the component always displays 'Count: 0' instead of 'Count: 1' after the delay.

## The Solution
The solution is implemented in `bugSolution.js`.  Instead of directly using the `count` variable in the `setTimeout` callback, a functional update is used to access the latest value of the state variable `setCount(prevCount => prevCount + 1)`. This ensures that the updated value of `count` is always used.

## How to run:
1. Clone the repository
2. Navigate to the project directory
3. Run `npm install` 
4. Run `npm start`