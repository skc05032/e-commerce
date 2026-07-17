import { useEffect, useState } from "react";

function useFetchReviews(productId){
    const [reviews,setReviews] = useState([]);
    const [isReviewsLoading,setIsReviewsLoading] = useState(true);
    const [isReviewsError,setIsReviewsError] = useState(false);

    useEffect(() => {
        async function fetchReviews(){
            try{
                setIsReviewsLoading(true);
                const response = await fetch(
                    `https://e-commerce-rzh9.onrender.com/reviews?productId=${productId}`
                );

                if(!response.ok){
                    throw new Error();
                }

                const json = await response.json(); 

                setReviews(json);
                setIsReviewsLoading(false);

            } catch{
                setIsReviewsError(true);
                setIsReviewsLoading(false);
            }
        }
        fetchReviews();
    },[productId])

    return{
        reviews,
        isReviewsLoading,
        isReviewsError,
    };
}

export default useFetchReviews;