function App() {
  return (
    <div>
      <div>
        {/* Generating the # of stars */}
        {Array.from({ length: 5 }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p>10</p>
    </div>
  );
}

export default App;
