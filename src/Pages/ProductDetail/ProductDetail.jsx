import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoint";
import LayOut from "../../Components/LayOut/LayOut";
import ProductCard from "../../Components/Product/ProductCard";
import { FadeLoader } from "react-spinners";
function ProductDetail() {
  const { productId } = useParams();
  const [product, setproduct] = useState({});
  const [isloading, setisloading] = useState(false);
  useEffect(() => {
    setisloading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log(res.data);
        setproduct(res.data);
        setisloading(false);
      })
      .catch((err) => {
        console.log(err);
        setisloading(false);
      });
  }, []);
  return (
    <LayOut>
      {isloading ? (
        <FadeLoader />
      ) : (
        <ProductCard
          product={product}
          renderAdd={true}
          flex={true}
          renderDesc={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;
