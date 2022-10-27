import products from '../assets/db/db'
import CounterApp from './CounterApp';
import ProductCard from './ProductCard';
import './products.css';

const Products = () => {
  return (
    <>
        <h1>Biciclet</h1>
        { products.map((product) => {
          return (
            <ProductCard key={product.id}>
              <img className='product_img' src={product.img} alt={product.title} />
              <div>{product.title}</div>
              <div>{product.price}</div>
              <CounterApp />
            </ProductCard>
          )
        })}
    </>
  );
};

export default Products;