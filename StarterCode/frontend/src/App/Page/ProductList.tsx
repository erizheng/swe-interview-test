import React, { useContext, useEffect } from 'react';
import { Product } from './types.ts'
import { ProductItem } from './ProductItem.tsx'
import { AppContext } from './context.tsx';
import { fetchProductFromBackend } from './product-utils.ts';


const ProductList = () => {
  const { prod, setProducts } = useContext(AppContext);

  //implement the get products function
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const productList = await fetchProductFromBackend();
      setProducts(productList);
      console.log(productList);
    }catch (err){
      console.log(err.message);
    }
  };

  //moved handle delete to ProductItem

  return (
      <ul className='image-grid'>
        {prod.map((product: Product) => (
          <ProductItem id={product.id} 
                      name={product.name} 
                      price={product.price} 
                      description={product.description} 
                      imageUrl={product.imageUrl}/>
            
        ))}
        
      </ul>
  );
};

export default ProductList;