import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/Product/ProductCard";
import axios from "axios";
import { productUrl } from "../../Api/endPoint";
import Loader from "../../Components/Loader/Loader";
function Results() {
  const [results, setResults] = useState();
  const [isloading, setisloading] = useState(false);
  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        console.log(res);
        setResults(res.data);
        setisloading(false);
      })
      .catch((err) => {
        console.log(err);
        setisloading(false);
      });
  });
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {isloading ? (
            <Loader />
          ) : (
            results?.map((product) => (
              <ProductCard
                key={product.id}
                renderAdd={true}
                product={product}
              />
            ))
          )}
        </div>
      </section>
    </LayOut>
  );
}

export default Results;
