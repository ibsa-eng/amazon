import React from "react";
import classes from "./category.module.css";
import { categoryInfos } from "./categoryFullInfo";
import CategoryCard from "./CategoryCard";
function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos) => (
        <CategoryCard data={infos} />
      ))}
    </section>
  );
}

export default Category;
