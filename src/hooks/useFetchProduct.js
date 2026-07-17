import { useState, useEffect} from "react";

function useFetchProduct(productId){
    const [product,setProduct] = useState(null);
    const [isProductLoading,setIsProductLoading] = useState(true);
    const [isProductError,setIsProductError] = useState(false);


    useEffect(() => {
        async function fectchProduct(){
            try{
                setIsProductLoading(true);
                // http://localhost:3000/products/${productId}?_embed=reviews
                const response =  await fetch(
                    `https://e-commerce-rzh9.onrender.com/products?productId=${productId}`
                );
                if(!response.ok) {
                    throw new Error("");
                }
                const json =  await response.json();
                
                setProduct(json);
                setIsProductLoading(false);
            }catch{
                setIsProductError(true);
                setIsProductLoading(false);
            }
        }
        fectchProduct();
    },[productId])

    return{
        product,
        isProductLoading,
        isProductError,
    };
}

export default useFetchProduct;