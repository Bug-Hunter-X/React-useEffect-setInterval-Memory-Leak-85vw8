# React useEffect setInterval Memory Leak

This repository demonstrates a common error when using the `setInterval` function within a React `useEffect` hook.  Forgetting to clear the interval using `clearInterval` leads to memory leaks and unexpected behavior, especially when the component unmounts or when the dependencies change.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides the corrected implementation.

## Problem

The original code incorrectly manages the interval.  The `setInterval` function continues to run even after the component unmounts, resulting in a memory leak.

## Solution

The solution includes a cleanup function within the `useEffect` hook. This function, returned by the `useEffect` hook, ensures the `clearInterval` function is called when the component unmounts or the dependencies change. This prevents memory leaks and ensures the application behaves as intended.
