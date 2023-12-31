import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import CategoryCardContainer from "../components/CategoryCardContainer";
import Nav from "../components/Nav";
import About from "../components/shared/About";
import { Footer } from "../components/shared/Footer";
import CategoryPageHeader from "../components/shared/CategoryPageHeader";
import CategoryItemImage from "../components/shared/CategoryItemImage";
import CategoryItemDescription from "../components/shared/CategoryItemDescription";
import { Box } from "@mui/material";
import CategoryItemContainer from "../components/shared/CategoryItemContainer";
import { APIProduct } from "../types";

const Headphones: NextPage = () => {
  const category = "headphones";
  const [data, setData] = useState<APIProduct[]>([]);
  const [isLoading, setLoading] = useState(true);
  const products = Array.from(new Set(data));

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        response.map((item: APIProduct) => {
          if (item.category === category) {
            data.unshift(item);
          }
        });
      });
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Nav />
      <CategoryPageHeader category={category} />

      {products.map((item) => {
        return <CategoryItemContainer item={item} key={item.id} />;
      })}

      <CategoryCardContainer />
      <About />
      <Footer />
    </div>
  );
};

export default Headphones;
