import './App.css';

const testJson = new URL('./assets/test.json', import.meta.url).href;

console.log(testJson);

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
