import './productList.css';
import Product from '../product/Product.jsx';
import { products } from '../../data'
const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid deleniti provident facilis optio dolor, ratione doloribus repellendus iusto et! Dolor repudiandae a deserunt sit ipsa similique magnam sed neque laboriosam?        </p>
      </div>
      <div className='pl-list'>
        {products.map(item => (
   <Product key={item.id} image={item.image} link={item.link} />
        ))}
     

      </div>
    </div>
  )
}

export default ProductList