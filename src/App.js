
import './App.css';
import Article from './components/Article';
import Products from './components/Products';

function App(props) {

  return (
    <>
      <Products {...props} />
      <Article {...props} />
    </>
  );
}

export default App;
