```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly setting the interval inside the useEffect dependency array
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function to clear the interval when the component unmounts or when dependencies change
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this runs only once on mount

  return <div>Count: {count}</div>;
}
```