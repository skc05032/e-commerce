import {useState, useEffect} from 'react';

function useFetchProducts(){
    const [products,setProducts] = useState([]);
    const [isProductsLoading,setIsProductsLoading] = useState(true);
    const [isProductsError,setIsProductsError]= useState(false);

    useEffect(() => {
        async function fetchProducts(){
          try{
             const response = await fetch("https://e-commerce-rzh9.onrender.com");

             if(!response.ok){
                throw new Error();
             }

             const json = await response.json();

            setProducts(json);
            setIsProductsLoading(false);
          } catch{
            setIsProductsError(true);
            setIsProductsLoading(false);
          }
       

       
    }

    fetchProducts();
    },[])
    return {
        products,
        isProductsLoading,
        isProductsError,
    };
}

export default useFetchProducts;