import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { ClassNames } from "@emotion/react";
import classes from "./Product.module.css";
function Product() {
  const [products, setProducts] = useState();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    // <section>
    //   {products ? (
    //     products.map((singleProduct) => (
    //       <ProductCard product={singleProduct} key={singleProduct.id} />
    //     ))
    //   ) : (
    //     <p>Loading...</p>
    //   )}
    // </section>
    <section className={classes.product_container}>
      {products?.map((singleProduct) => {
        return (
          <ProductCard
            product={singleProduct}
            renderAdd={true}
            key={singleProduct.id}
          />
        );
      })}
    </section>
  );
}

export default Product;
