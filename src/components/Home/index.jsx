import { useState } from "react";
import { Link } from "react-router";

import styles from "./Home.module.css"

import useFetchProducts from "../../hooks/useFetchProducts";


const Home = () => { 
    const {products, isProductsLoading, isProductsError} = useFetchProducts();
    const [selectedCategory,setSelectedCategory] = useState("전체");
     console.log("products.length =", products.length);
    const fileredProducts = products.filter(({ category }) => {
        if(selectedCategory === "전체"){
            return true; 
        }
        return selectedCategory === category;
    })
     if(isProductsLoading){
        return <div>상품을 로딩중 입니다....</div>
     }
     if(isProductsError){
        return <div>상품목록을 가져오는데 에러가 발생했습니다.</div>
     }
    return (
        <>
            <ul className={styles.categoryList}>
                
                {["전체","상의","하의", "신발","가방","악세사리"].map(
                 (category) => {
                    return (
                        <li 
                        key={category} 
                        className={selectedCategory === category ? styles.selected : null}
                        onClick={()=>{
                            setSelectedCategory(category)
                        }}
                    >
                            {category}
                        </li>
                    );
                })}
            </ul>
            <h3>상품 목록({fileredProducts.length})</h3>
            <div className={styles.productList}>
               { 
               fileredProducts.map(({id, category, image, name, price}) => {
                
                return (
                <Link  
                key={id}
                to={`${import.meta.env.BASE_URL}products/${id}`}
                className={styles.productListItem}>
                        <img 
                            src= {`${import.meta.env.BASE_URL}${image.replace(/^\/+/, "")}`}
                          />
                        <div className={styles.productInfo}>
                            <div className={styles.productCategory}>{category}</div>
                            <div className= {styles.productName}>{name}</div>
                            <div className= {styles.productPrice}>{price.toLocaleString()}원</div>
                        </div>
                </Link>
                )
               })}
                
            </div>
            
        </> 
    )
}

export default Home;